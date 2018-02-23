package com.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class TweetLike {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User likeOwner;

    @OneToOne
    private Tweet likedTweet;
}
