package com.service;


import com.model.TweetLike;

import java.util.List;

public interface TweetLikeService {

    List<TweetLike> getTweetLikesByTweet(Long id);

    List<TweetLike> getTweetLikesByUser(Long id);

    TweetLike save(Long likedTweetId);
}
