package com.web;

import com.model.User;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.service.UserService;

import javax.validation.constraints.NotNull;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
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

    @GetMapping("/{id}")
    @ResponseBody
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/emails/{id}")
    @ResponseBody
    public List<String> getAllRegisteredUsersEmails(@PathVariable Long id) {
        return userService.getAllRegisteredUsersEmails(id);
    }

    @GetMapping("/email")
    @ResponseBody
    public long getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping("/login")
    @ResponseBody
    public Long authenticateUser(@RequestBody LoginData loginData) {
        if (userService.getUserByEmail(loginData.email) != -1 && userService.authenticateUser(loginData.email, loginData.password)) {
            return userService.getUserByEmail(loginData.email);
        } else {
            return Long.valueOf(-1);
        }
    }

    @Data
    public static class LoginData {
        public String email;
        public String password;
    }

    @PostMapping("{userId}/upload/avatar")
    @ResponseBody
    public User updateAvatar(@PathVariable @NotNull Long userId, @RequestBody String value) {
        return userService.updateAvatar(userId, value);
    }

    @PostMapping("{followerId}/follow/{userId}")
    @ResponseBody
    public User followUser(@PathVariable @NotNull Long followerId, @PathVariable @NotNull Long userId) {
        return userService.followUser(userId, followerId);
    }

    @PostMapping("{followerId}/unfollow/{userId}")
    @ResponseBody
    public User unfollowUser(@PathVariable @NotNull Long followerId, @PathVariable @NotNull Long userId) {
        return userService.unfollowUser(userId, followerId);
    }

    @PostMapping("{senderId}/rate/{userId}")
    @ResponseBody
    public User rateUser(@PathVariable @NotNull Long senderId, @PathVariable @NotNull Long userId, @RequestBody Float rating) {
        return userService.rateUser(userId, senderId, rating);
    }
}