package com.service;


import com.model.Like;

import java.util.List;

public interface LikeService {

    List<Like> getLikesByTweet(Long id);

    List<Like> getLikesByUser(Long id);

    Like save(Long likedTweetId);
}
