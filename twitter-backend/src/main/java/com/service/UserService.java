package com.service;

import com.model.User;

import java.util.List;

public interface UserService {
    User save(User user);

    List<String> getAllRegisteredUsersEmails(Long authUserId);

    Long getUserByEmail(String email);

    User getUserById(Long id);

    User updateAvatar(Long userId, String avatarLocation);

    boolean authenticateUser(String email, String password);

    User followUser(Long userId, Long followerId);

    User unfollowUser(Long userId, Long followerId);

    User rateUser(Long userId, Long senderId, Float rating);
}
