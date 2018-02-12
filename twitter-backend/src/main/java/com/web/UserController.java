package com.web;

import com.authentication.AuthenticationService;
import com.model.User;
import com.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.service.UserService;

import java.util.List;

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
    public User saveUser(@RequestBody User user) {
        User user1 = user;
        if (user.getId() != null) {
            user1 = userRepository.findOne(user.getId());
            user1.setName(user.getName());
            user1.setGender(user.getGender());
            user1.setEmail(user.getEmail());
            user1.setBirth(user.getBirth());
            user1.setPassword(user.getPassword());
            user1.setAvatar(user.getAvatar());
            if (authenticationService.getAuthenticatedUser().getId().equals(user.getId())) {
                authenticationService.updateUser(user1);
            }
        }
        return userService.save(user1);
    }

    @GetMapping
    @ResponseBody
    public User getAuthenticatedUser() {
        return authenticationService.getAuthenticatedUser();
    }

    @GetMapping("/all")
    @ResponseBody
    public List<String> getAllRegisteredUsersEmails() {
        return userService.getAllRegisteredUsersEmails();
    }

    @GetMapping("/email")
    @ResponseBody
    public long getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/login")
    public boolean authenticateUser(@RequestBody LoginData loginData) {
        return !authenticationService.authenticateUser(loginData.email, loginData.password);
    }

    @PostMapping
    @ResponseBody
    @RequestMapping("/logout")
    public boolean logOutUser(@RequestBody String email) {
        return authenticationService.logOut(email);
    }

    @Data
    public static class LoginData {
        public String email;
        public String password;
    }
}