package com.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
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

    @ElementCollection
    private List<TweetLike> likes;
}