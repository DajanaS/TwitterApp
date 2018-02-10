package com.service;

import com.model.Tweet;

import java.util.List;

public interface TweetService {
    List<Tweet> listTweetsByAuthorId(Long id);

    List<Tweet> listTopTweetsByDateDesc();

    Tweet save(String tweet);
}
