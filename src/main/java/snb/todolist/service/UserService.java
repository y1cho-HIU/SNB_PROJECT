package snb.todolist.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import snb.todolist.domain.User;
import snb.todolist.repository.UserRepository;

@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public User register(User user){
        return userRepository.save(User.builder()
                        .email(user.getEmail())
                        .password(user.getPassword())
                        .build());
    }

    public User login(String email, String password){
        return userRepository.findByEmail(email)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
}
