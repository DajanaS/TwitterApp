package com.web;

import com.authentication.AuthenticationService;
import com.model.User;
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
    private AuthenticationService authenticationService;

    @Autowired
    public UserController(UserService userService, AuthenticationService authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @PostMapping
    @ResponseBody
    public boolean addNewUser(@RequestBody User user) {
        return userService.save(user) == null;
    }

    @PostMapping("/update")
    @ResponseBody
    public User updateUser(@RequestBody User user) {
        return userService.save(user);
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