package com.service;

import com.model.Tweet;

import java.util.List;

public interface TweetService {
    List<Tweet> listTweets();
    Tweet save(String tweet);
}
