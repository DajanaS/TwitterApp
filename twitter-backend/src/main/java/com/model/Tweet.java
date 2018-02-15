package com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Tweet {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Date date = new Date();

    @ManyToOne
    private User author;

    @JsonIgnore
    @OneToMany(mappedBy = "likedTweet", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<TweetLike> likes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public List<TweetLike> getLikes() {
        return likes;
    }

    public void setLikes(List<TweetLike> likes) {
        this.likes = likes;
    }
}