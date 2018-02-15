package com.service;

import com.model.User;

import java.util.List;

public interface UserService {
    User save(User user);

    List<String> getAllRegisteredUsersEmails();

    Long getUserByEmail(String email);

    User getUserById(Long id);

    User updateAvatar(Long userId, String avatarLocation);
}
