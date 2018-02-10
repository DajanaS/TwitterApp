package com.service;


import com.model.Like;

import java.util.List;

public interface LikeService {

    List<Like> listLikesByTweet(Long id);

    List<Like> listLikesByUser(Long id);

    Like save(Long likedTweetId);
}
