package com.service;

import com.model.Tweet;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TweetService {
    List<Tweet> listTweetsByAuthorId(Long id);

    List<Tweet> listTopTweetsByDateDesc();

    Page<Tweet> findAll(int page);

    int totalTweets();

    Tweet save(String tweet);

    boolean deleteTweet(Long id);
}
