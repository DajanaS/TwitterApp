package com.service.implementation;

import com.google.common.collect.Lists;
import com.model.TweetLike;
import com.model.Tweet;
import com.model.User;
import com.repository.TweetLikeRepository;
import com.repository.TweetRepository;
import com.repository.UserRepository;
import com.service.TweetLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DefaultTweetLikeService implements TweetLikeService {

    private TweetLikeRepository likeRepository;
    private TweetRepository tweetRepository;
    private UserRepository userRepository;

    @Autowired
    public DefaultTweetLikeService(TweetLikeRepository likeRepository, TweetRepository tweetRepository, UserRepository userRepository) {
        this.likeRepository = likeRepository;
        this.tweetRepository = tweetRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<TweetLike> getTweetLikesByTweet(Long id) {
        return Lists.newArrayList(likeRepository.findAllByLikedTweetId(id));
    }

    @Override
    public List<TweetLike> getTweetLikesByUser(Long id) {
        return Lists.newArrayList(likeRepository.findAllByLikeOwnerId(id));
    }

    @Override
    public TweetLike save(Long likedTweetId, Long userId) {
        User likeOwner = userRepository.findOne(userId);
        if (likeOwner != null) {
            Tweet likedTweet = tweetRepository.findOne(likedTweetId);
            TweetLike like = new TweetLike();
            like.setLikeOwnerId(likeOwner.getId());
            like.setLikedTweetId(likedTweet.getId());
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
    public boolean remove(Long tweetId, Long userId) {
        Tweet likedTweet = tweetRepository.findOne(tweetId);
        User likeOwner = userRepository.findOne(userId);

        List<TweetLike> likes = likeRepository.findAllByLikedTweetId(tweetId);
        TweetLike likeToRemove = null;
        for (TweetLike tl : likes) {
            User tmpUser = userRepository.getUserById(tl.getLikeOwnerId());
            if (tmpUser.getEmail().equals(likeOwner.getEmail())) {
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
}
