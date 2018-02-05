package service.implementation;

import model.Tweet;
import org.springframework.stereotype.Service;
import repository.TweetRepository;
import service.TweetService;

import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {
    private TweetRepository tweetRepository;

    public TweetServiceImpl(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    @Override
    public List<Tweet> listTweets() {
        return null;
    }

    @Override
    public void save(Tweet tweet) {
        tweetRepository.save(tweet);
    }
}
