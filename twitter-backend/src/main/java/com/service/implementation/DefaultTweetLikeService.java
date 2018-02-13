package com.service.implementation;

import com.authentication.AuthenticationService;
import com.google.common.collect.Lists;
import com.model.TweetLike;
import com.model.Tweet;
import com.model.User;
import com.repository.TweetLikeRepository;
import com.repository.TweetRepository;
import com.service.TweetLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefaultTweetLikeService implements TweetLikeService {

    private TweetLikeRepository likeRepository;
    private TweetRepository tweetRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public DefaultTweetLikeService(TweetLikeRepository likeRepository, TweetRepository tweetRepository, AuthenticationService authenticationService) {
        this.likeRepository = likeRepository;
        this.tweetRepository = tweetRepository;
        this.authenticationService = authenticationService;
    }

    @Override
    public List<TweetLike> getTweetLikesByTweet(Long id) {
        Tweet likedTweet = tweetRepository.findOne(id);
        return Lists.newArrayList(likeRepository.findAllByLikedTweet(likedTweet));
    }

    @Override
    public List<TweetLike> getTweetLikesByUser(Long id) {
        return Lists.newArrayList(likeRepository.findAllByLikeOwner(id));
    }

    @Override
    public TweetLike save(Long likedTweetId) {
        User likeOwner = findUserOfAuthenticatedPrincipal();
        if (likeOwner != null) {
            Tweet likedTweet = tweetRepository.findOne(likedTweetId);
            TweetLike like = new TweetLike();
            like.setLikeOwner(likeOwner);
            like.setLikedTweet(likedTweet);
            return likeRepository.save(like);
        }
        return null;
    }

    private User findUserOfAuthenticatedPrincipal() {
        return authenticationService.getAuthenticatedUser();
    }
}
