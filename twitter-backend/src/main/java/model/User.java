package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
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

    @Column(nullable = false)
    private String avatar;

    @JsonIgnore
    @OneToMany(mappedBy = "author", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<Tweet> tweets;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    private List<User> following;

    @JsonIgnore
    @ManyToMany(mappedBy = "following", fetch = FetchType.EAGER)
    private List<User> followers;
}
