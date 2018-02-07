package com.web;

import com.authentication.AuthenticationService;
import com.model.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.service.UserService;

@CrossOrigin
@Controller
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    private AuthenticationService authenticationService;

    @Autowired
    public UserController(UserService userService, AuthenticationService authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @PostMapping
    @ResponseBody
    public void saveUser(@RequestBody User user) {
        userService.save(user);
    }

    @GetMapping
    @ResponseBody
    public User getAuthenticatedUser() {
        return authenticationService.getAuthenticatedUser();
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/login")
    public boolean authenticateUser(@RequestBody LoginData loginData) {
        return !authenticationService.authenticateUser(loginData.email, loginData.password);
    }

    @Data
    public static class LoginData {
        public String email;
        public String password;
    }
}