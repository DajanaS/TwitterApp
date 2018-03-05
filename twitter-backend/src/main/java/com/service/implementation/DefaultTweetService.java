package com.service.implementation;

import com.google.common.collect.Lists;
import com.model.Tweet;
import com.model.User;
import com.repository.TweetRepository;
import com.repository.UserRepository;
import com.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefaultTweetService implements TweetService {
    private TweetRepository tweetRepository;
    private UserRepository userRepository;

    @Autowired
    public DefaultTweetService(TweetRepository tweetRepository, UserRepository userRepository) {
        this.tweetRepository = tweetRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Tweet> listTweetsByAuthorId(Long id) {
        return Lists.newArrayList(tweetRepository.findAllByAuthorIdOrderByDateDesc(id));
    }

    @Override
    public Tweet save(String content, Long id) {
        User author = userRepository.findOne(id);
        if (author != null) {
            Tweet tweet = new Tweet();
            tweet.setContent(content);
            tweet.setAuthor(author);
            return tweetRepository.save(tweet);
        }
        return null;
    }

    @Override
    public Page<Tweet> findAll(int page) {
        return tweetRepository.findAll(new PageRequest(page - 1, 4));
        // TODO: byAuthorIn method should be used after following is implemented
    }

    @Override
    public int totalTweets() {
        return tweetRepository.findAll().size();
        // TODO: should return the number of tweets that byAuthorIn method returns
    }

    @Override
    public boolean deleteTweet(Long id) {
        if (tweetRepository.getTweetById(id) != null) return false;
        tweetRepository.delete(tweetRepository.getTweetById(id));
        return true;
    }
}
