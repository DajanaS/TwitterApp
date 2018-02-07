package com.repository;

import com.model.Tweet;
import com.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TweetRepository extends CrudRepository<Tweet, Long> {
    List<Tweet> findAllByIdOrderByTimeDesc(Long id);
    List<Tweet> findAllByAuthorIn(List<User> users);
}
