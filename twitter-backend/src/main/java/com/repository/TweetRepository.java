package com.repository;

import com.model.Tweet;
import com.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TweetRepository extends PagingAndSortingRepository<Tweet, Long> {
    List<Tweet> findAllByAuthorIdOrderByDateDesc(Long id);

    List<Tweet> findAllByAuthorIn(List<User> users);

    List<Tweet> findFirst5ByOrderByDateDesc();

    List<Tweet> findAll();
}
