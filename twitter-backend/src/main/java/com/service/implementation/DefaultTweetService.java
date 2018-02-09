package com.service.implementation;

import com.authentication.AuthenticationService;
import com.google.common.collect.Lists;
import com.model.Tweet;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.repository.TweetRepository;
import com.service.TweetService;

import java.util.List;

@Service
public class DefaultTweetService implements TweetService {
    private TweetRepository tweetRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public DefaultTweetService(TweetRepository tweetRepository, AuthenticationService authenticationService) {
        this.tweetRepository = tweetRepository;
        this.authenticationService = authenticationService;
    }

    @Override
    public List<Tweet> listTweets() {
        return Lists.newArrayList(tweetRepository.findAll());
    }

    @Override
    public Tweet save(String content) {
        User author = findUserOfAuthenticatedPrincipal();
        if (author != null) {
            Tweet tweet = new Tweet();
            tweet.setContent(content);
            tweet.setAuthor(author);
            return tweetRepository.save(tweet);
        }
        return null;
    }

    private User findUserOfAuthenticatedPrincipal() {
        return authenticationService.getAuthenticatedUser();
    }
}
