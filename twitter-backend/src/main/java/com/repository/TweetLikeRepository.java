package com.repository;

import com.model.TweetLike;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TweetLikeRepository extends CrudRepository<TweetLike, Long> {

    List<TweetLike> findAllByLikeOwnerId(Long id);

    List<TweetLike> findAllByLikedTweetId(Long id);


}
