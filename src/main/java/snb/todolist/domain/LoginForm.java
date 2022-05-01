package snb.todolist.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Data
@Getter @Setter
public class LoginForm {
    @NotEmpty
    private String email;

    @NotEmpty
    private String password;
}
