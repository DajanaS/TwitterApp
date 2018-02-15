package com.web;

import com.model.TweetLike;
import com.service.TweetLikeService;
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
    public TweetLike saveLike(@RequestBody Long likedTweetId) {
        return likeService.save(likedTweetId);
    }

    @PostMapping("/remove")
    @ResponseBody
    public boolean removeLike(@RequestBody Long tweetId) {
        return likeService.remove(tweetId);
    }

    @GetMapping("/byTweet")
    @ResponseBody
    public List<TweetLike> getLikesByTweet(@RequestParam Long id) {
        return likeService.getTweetLikesByTweet(id);
    }

}
