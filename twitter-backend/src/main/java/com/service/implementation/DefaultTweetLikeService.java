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

import java.util.ArrayList;
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
            List<TweetLike> likes = likedTweet.getLikes();
            if (likes == null) {
                likes = new ArrayList<>();
            }
            likes.add(like);
            likedTweet.setLikes(likes);
            likes = likeOwner.getLikes();
            if (likes == null) {
                likes = new ArrayList<>();
            }
            likes.add(like);
            likeOwner.setLikes(likes);
            return likeRepository.save(like);
        }
        return null;
    }

    @Override
    public boolean remove(Long tweetId) {
        Tweet likedTweet = tweetRepository.findOne(tweetId);
        User likeOwner = findUserOfAuthenticatedPrincipal();

        List<TweetLike> likes = likeRepository.findAllByLikedTweet(likedTweet);
        TweetLike likeToRemove = null;
        for (TweetLike tl : likes) {
            if(tl.getLikeOwner().getEmail().equals(likeOwner.getEmail())) {
                likeToRemove = tl;
                break;
            }
        }

        likes = likedTweet.getLikes();
        likes.remove(likeToRemove);
        likedTweet.setLikes(likes);

        likes = likeOwner.getLikes();
        likes.remove(likeToRemove);
        likeOwner.setLikes(likes);

        likeRepository.delete(likeToRemove.getId());
        return true;
    }

    private User findUserOfAuthenticatedPrincipal() {
        return authenticationService.getAuthenticatedUser();
    }
}
