package com.web;

import com.model.TweetLike;
import com.service.TweetLikeService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/likes")
public class TweetLikeController {
    private TweetLikeService likeService;

    @Autowired
    public TweetLikeController(TweetLikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping
    @ResponseBody
    public TweetLike saveLike(@RequestBody TweetData tweetData) {
        return likeService.save(tweetData.likedTweetId, tweetData.userId);
    }

    @Data
    public static class TweetData {
        public Long likedTweetId;
        public Long userId;
    }

    @PostMapping("/remove")
    @ResponseBody
    public boolean removeLike(@RequestBody TweetData tweetData) {
        return likeService.remove(tweetData.likedTweetId, tweetData.userId);
    }

    @GetMapping("/byTweet")
    @ResponseBody
    public List<TweetLike> getLikesByTweet(@RequestParam Long id) {
        return likeService.getTweetLikesByTweet(id);
    }

}
