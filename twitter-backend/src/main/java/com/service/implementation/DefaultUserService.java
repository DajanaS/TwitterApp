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
        return userRepository.save(user);
    }

    @Override
    public List<String> getAllRegisteredUsersEmails() {
        List<User> all = Lists.newArrayList(userRepository.findAll());
        /*if (authenticationService.getAuthenticatedUser() != null) {
            all.remove(authenticationService.getAuthenticatedUser());
        }*/
        return all.stream().map(user -> user.getEmail()).collect(Collectors.toList());
    }
}
