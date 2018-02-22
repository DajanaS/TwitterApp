package com.web;

import com.model.Tweet;
import com.service.TweetService;
import lombok.Data;
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

    @GetMapping("/author/{id}")
    @ResponseBody
    public List<Tweet> listTweetsByAuthor(@PathVariable Long id) {
        return tweetService.listTweetsByAuthorId(id);
    }

    @GetMapping("/all")
    @ResponseBody
    public Page<Tweet> showPage(@RequestParam(defaultValue = "1") int page) {
        return tweetService.findAll(page);
    }

    @GetMapping("/total")
    @ResponseBody
    public int totalTweets() {
        return tweetService.totalTweets();
    }

    @PostMapping
    @ResponseBody
    public Tweet saveTweet(@RequestBody TweetData tweetData) {
        return tweetService.save(tweetData.content, tweetData.userId);
    }

    @Data
    public static class TweetData {
        public String content;
        public Long userId;
    }

    @PostMapping("/delete")
    @ResponseBody
    public boolean deleteTweet(@RequestBody Long id) {
        return this.tweetService.deleteTweet(id);
    }
}
