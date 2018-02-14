package com.web;

import com.model.Tweet;
import com.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public List<Tweet> listTweetsByAuthor(@RequestParam Long id) {
        return tweetService.listTweetsByAuthorId(id);
    }

    @GetMapping("/top")
    @ResponseBody
    public List<Tweet> listTopTweetsByDateDesc() {
        return tweetService.listTopTweetsByDateDesc();
    }

    @GetMapping("/all")
    @ResponseBody
    public Page<Tweet> showPage(@RequestParam(defaultValue = "1") int page) {
        return tweetService.findAll(page);
    }

    @PostMapping
    @ResponseBody
    public Tweet saveTweet(@RequestBody String content) {
        return tweetService.save(content);
    }

    @GetMapping("/totalTweets")
    @ResponseBody
    public int totalTweets() {
        return tweetService.totalTweets();
    }
}
