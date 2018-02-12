package com.service.implementation;

import com.authentication.AuthenticationService;
import com.google.common.collect.Lists;
import com.model.User;
import com.repository.UserRepository;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultUserService implements UserService {
    private UserRepository userRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public DefaultUserService(UserRepository userRepository, AuthenticationService authenticationService) {
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;
    }

    @Override
    public User save(User user) {
        User user1 = user;
        if (user.getId() != null) { // update user if already exists
            user1 = userRepository.findOne(user.getId());
            user1.setName(user.getName());
            user1.setGender(user.getGender());
            if (!user.getEmail().equals(user1.getEmail())) {
                if (getAllRegisteredUsersEmails().stream().anyMatch(email -> user.getEmail().equals(email))) {
                    return null; // duplicate emails not allowed
                }
                user1.setEmail(user.getEmail());
            }
            user1.setBirth(user.getBirth());
            user1.setPassword(user.getPassword());
            user1.setAvatar(user.getAvatar());
            if (authenticationService.getAuthenticatedUser().getId().equals(user.getId())) {
                authenticationService.updateUser(user1);
            }
            return userRepository.save(user1); // save the updated user
        }
        if (getAllRegisteredUsersEmails().stream().anyMatch(email -> user.getEmail().equals(email))) {
            return null; // duplicate emails not allowed
        }
        return userRepository.save(user1); // save the new user
    }

    @Override
    public List<String> getAllRegisteredUsersEmails() {
        List<User> all = Lists.newArrayList(userRepository.findAll());
        if (authenticationService.getAuthenticatedUser() != null) {
            String email = authenticationService.getAuthenticatedUser().getEmail();
            return all.stream().map(user -> user.getEmail()).filter(e -> !e.equals(email)).collect(Collectors.toList());
        }
        return all.stream().map(user -> user.getEmail()).collect(Collectors.toList());
    }

    @Override
    public Long getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) return user.getId();
        else return Long.valueOf(-1);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.getUserById(id);
    }
}
