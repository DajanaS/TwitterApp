package repository;

import model.Tweet;
import model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TweetRepository extends CrudRepository<Tweet, Long> {
    List<Tweet> findAllByTwitterIdOrderByTime(Long id);
    List<Tweet> findAllByTwitterIn(List<User> users);
}
