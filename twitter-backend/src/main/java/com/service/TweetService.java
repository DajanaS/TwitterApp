package com.service;

import com.model.Tweet;

import java.util.List;

public interface TweetService {
    List<Tweet> listTweetsByAuthorId(Long id);

    Tweet save(String tweet);
}
