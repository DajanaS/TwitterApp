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
        System.out.println("Saving like for tweet with id: " + likedTweetId);
        return likeService.save(likedTweetId);
    }

    @GetMapping("/byTweet")
    @ResponseBody
    public List<TweetLike> getLikesByTweet(@RequestParam Long id) {
        System.out.println("Get likes for tweet with id: " + id);
        return likeService.getTweetLikesByTweet(id);
    }
}
