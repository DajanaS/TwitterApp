package com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private Date birth;

    @Column(nullable = false)
    private String password;

    @Lob
    @Column(nullable = false)
    private String avatar;

    @JsonIgnore
    @OneToMany(mappedBy = "author", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<Tweet> tweets;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> following;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> followers;

    @JsonIgnore
    @ElementCollection
    private List<TweetLike> likes;

    @ElementCollection
    private List<Float> rating;

    public User() {
    }

    public User(String name, String gender, String email, Date birth, String password, String avatar) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.birth = birth;
        this.password = password;
        this.avatar = avatar;
    }
}
