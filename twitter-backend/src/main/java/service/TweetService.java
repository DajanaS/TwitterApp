package service;

import model.Tweet;

import java.util.List;

public interface TweetService {
    List<Tweet> listTweets();
    void save(Tweet tweet);
}
