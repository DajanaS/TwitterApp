package com.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class TweetLike {
    @Id
    @GeneratedValue
    private Long id;

    private Long likeOwnerId;

    private Long likedTweetId;
}
