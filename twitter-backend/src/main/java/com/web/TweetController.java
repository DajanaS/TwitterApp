package com.web;

import com.model.Tweet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.service.TweetService;

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

    @PostMapping
    @ResponseBody
    public Tweet saveTweet(@RequestBody String content) {
        return tweetService.save(content);
    }

}
