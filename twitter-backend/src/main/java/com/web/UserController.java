package com.web;

import com.model.User;
import com.service.StorageService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.service.UserService;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    private StorageService storageService;

    @Autowired
    public UserController(UserService userService, StorageService storageService) {
        this.userService = userService;
        this.storageService = storageService;
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
    public User updateAvatar(@PathVariable @NotNull Long userId, @RequestParam("avatar") MultipartFile avatar) {
        String fileName = storageService.store(avatar);
        return userService.updateAvatar(userId, fileName);
    }
}