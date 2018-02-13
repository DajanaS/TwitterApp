package com.model;

import javax.persistence.*;

@Entity
public class TweetLike {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User likeOwner;

    @OneToOne
    private Tweet likedTweet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getLikeOwner() {
        return likeOwner;
    }

    public void setLikeOwner(User likeOwner) {
        this.likeOwner = likeOwner;
    }

    public Tweet getLikedTweet() {
        return likedTweet;
    }

    public void setLikedTweet(Tweet likedTweet) {
        this.likedTweet = likedTweet;
    }

}
