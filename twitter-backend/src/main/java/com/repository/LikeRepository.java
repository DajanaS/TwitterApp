package com.repository;

import com.model.Like;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LikeRepository extends CrudRepository<Like, Long> {

    List<Like> findAllByLikeOwner(Long id);

    List<Like> findAllByLikedTweet(Long id);
}
