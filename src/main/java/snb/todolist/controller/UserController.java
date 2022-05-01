package snb.todolist.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import snb.todolist.service.UserService;
import snb.todolist.domain.LoginForm;
import snb.todolist.domain.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;


@Slf4j
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        userService.register(user);
        log.info("register = [{}, {}]", user.getEmail(), user.getPassword());
        return new ResponseEntity<String>("REGISTER SUCCESS", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginForm form,
                                   BindingResult result,
                                   HttpServletRequest request){
        if(result.hasErrors()){
            return new ResponseEntity<String>("BINDING ERROR", HttpStatus.BAD_REQUEST);
        }
        User user = userService.login(form.getEmail(), form.getPassword());

        if(user == null){
            return new ResponseEntity<String>("LOGIN FAIL", HttpStatus.BAD_REQUEST);
        }
        HttpSession session = request.getSession();
        session.setAttribute("LOGIN_USER", user);
        log.info("login? = [{}, {}, {}] ", user.getEmail(), user.getPassword(), session);
        return new ResponseEntity<String>("LOGIN SUCCESS", HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request){
        HttpSession session = request.getSession();

        if(session != null) {
            session.invalidate();
        }

        log.info("logout = {}", session);
        return new ResponseEntity<String>("LOGOUT SUCCESS", HttpStatus.OK);
    }
}