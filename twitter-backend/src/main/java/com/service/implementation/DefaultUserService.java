package com.service.implementation;

import com.google.common.collect.Lists;
import com.model.User;
import com.repository.UserRepository;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DefaultUserService implements UserService {
    private UserRepository userRepository;

    @Autowired
    public DefaultUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        User user1 = user;
        if (user.getId() != null) { // update user if already exists
            user1 = userRepository.findOne(user.getId());
            user1.setName(user.getName());
            user1.setGender(user.getGender());
            if (!user.getEmail().equals(user1.getEmail())) {
                if (getAllRegisteredUsersEmails(user1.getId()).stream().anyMatch(email -> user.getEmail().equals(email))) {
                    return null; // duplicate emails not allowed
                }
                user1.setEmail(user.getEmail());
            }
            user1.setBirth(user.getBirth());
            user1.setPassword(user.getPassword());
            user1.setAvatar(user.getAvatar());
            return userRepository.save(user1); // save the updated user
        }
        if (getAllRegisteredUsersEmails(Long.valueOf(-1)).stream().anyMatch(email -> user.getEmail().equals(email))) {
            return null; // duplicate emails not allowed
        }
        return userRepository.save(user1); // save the new user
    }

    @Override
    public List<String> getAllRegisteredUsersEmails(Long authUserId) {
        List<User> all = Lists.newArrayList(userRepository.findAll());
        User authenticatedUser = userRepository.findOne(authUserId);
        if (authenticatedUser != null) {
            return all.stream().map(user -> user.getEmail())
                    .filter(e -> !e.equals(authenticatedUser.getEmail()))
                    .collect(Collectors.toList());
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

    @Override
    public User updateAvatar(Long userId, String avatarLocation) {
        User exists = userRepository.findOne(userId);
        exists.setAvatar(avatarLocation);
        return userRepository.save(exists);
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        if (getUserById(getUserByEmail(email)).getPassword().equals(password)) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public User followUser(Long userId, Long followerId) {
        User user = userRepository.getUserById(userId);
        User follower = userRepository.getUserById(followerId);

        List<User> userFollowers = user.getFollowers();
        List<User> followerFollowing = follower.getFollowing();

        userFollowers.add(follower);
        followerFollowing.add(user);

        user.setFollowers(userFollowers);
        follower.setFollowing(followerFollowing);

        userRepository.save(follower);
        return userRepository.save(user);
    }

    @Override
    public User unfollowUser(Long userId, Long followerId) {
        User user = userRepository.getUserById(userId);
        User follower = userRepository.getUserById(followerId);

        List<User> userFollowers = user.getFollowers();
        List<User> followerFollowing = follower.getFollowing();

        userFollowers.remove(follower);
        followerFollowing.remove(user);

        user.setFollowers(userFollowers);
        follower.setFollowing(followerFollowing);

        userRepository.save(follower);
        return userRepository.save(user);
    }

    @Override
    public User rateUser(Long userId, Long senderId, Float rating) {
        User user = userRepository.getUserById(userId);
        User sender = userRepository.getUserById(senderId);

        List<Float> userRatings = user.getRating();
        userRatings.add(rating);

        user.setRating(userRatings);
        userRepository.save(user);

        return user;
    }
}
