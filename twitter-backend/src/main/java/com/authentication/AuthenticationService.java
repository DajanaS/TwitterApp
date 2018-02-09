package com.authentication;

import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.UserRepository;

@Service
public class AuthenticationService {
    private User authenticatedUser;
    private UserRepository userRepository;

    @Autowired
    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getAuthenticatedUser() {
        return authenticatedUser;
    }

    public boolean isLoggedIn(String email) {
        return authenticatedUser.getEmail().equals(email);
    }

    public boolean logOut(String email) {
        if (this.isLoggedIn(email)) {
            this.authenticatedUser = null;
            return true;
        } else return false;
    }

    public boolean authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            authenticatedUser = user;
            return true;
        }
        return false;
    }

    public void updateUser(User user) {
        this.authenticatedUser = user;
    }
}
