package com.repository;

import com.model.Tweet;
import com.model.TweetLike;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TweetLikeRepository extends CrudRepository<TweetLike, Long> {

    List<TweetLike> findAllByLikeOwner(Long id);

    List<TweetLike> findAllByLikedTweet(Tweet likedTweet);


}
