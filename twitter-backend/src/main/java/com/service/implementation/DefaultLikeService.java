package com.service.implementation;

import com.authentication.AuthenticationService;
import com.google.common.collect.Lists;
import com.model.Like;
import com.model.Tweet;
import com.model.User;
import com.repository.LikeRepository;
import com.repository.TweetRepository;
import com.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefaultLikeService implements LikeService {

    private LikeRepository likeRepository;
    private TweetRepository tweetRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public DefaultLikeService(LikeRepository likeRepository, TweetRepository tweetRepository, AuthenticationService authenticationService) {
        this.likeRepository = likeRepository;
        this.tweetRepository = tweetRepository;
        this.authenticationService = authenticationService;
    }

    @Override
    public List<Like> listLikesByTweet(Long id) {
        return Lists.newArrayList(likeRepository.findAllByLikedTweet(id));
    }

    @Override
    public List<Like> listLikesByUser(Long id) {
        return Lists.newArrayList(likeRepository.findAllByLikeOwner(id));
    }

    @Override
    public Like save(Long likedTweetId) {
        User likeOwner = findUserOfAuthenticatedPrincipal();
        if (likeOwner != null) {
            Tweet likedTweet = tweetRepository.findOne(likedTweetId);
            Like like = new Like();
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
