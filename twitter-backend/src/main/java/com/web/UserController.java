package com.web;

import com.authentication.AuthenticationService;
import com.model.User;
import com.repository.UserRepository;
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
    private UserRepository userRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public UserController(UserService userService, AuthenticationService authenticationService, UserRepository userRepository) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.userRepository = userRepository;
    }

    @PostMapping
    @ResponseBody
    public void saveUser(@RequestBody User user) {
        User user1 = user;
        if (user.getId() != null) {
            user1 = userRepository.findOne(user.getId());
            user1.setName(user.getName());
            user1.setGender(user.getGender());
            user1.setEmail(user.getEmail());
            user1.setBirth(user.getBirth());
            user1.setPassword(user.getPassword());
            user1.setAvatar(user.getAvatar());
        }
        userService.save(user1);
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