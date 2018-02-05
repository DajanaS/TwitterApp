package web;

import model.Tweet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.TweetService;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/tweets")
public class TweetController {
    private TweetService tweetService;

    @Autowired
    public TweetController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping
    @ResponseBody
    public List<Tweet> listTweets() {
        return tweetService.listTweets();
    }

    @PostMapping
    @ResponseBody
    public void saveTweet(@RequestBody Tweet tweet) {
        tweetService.save(tweet);
    }
}