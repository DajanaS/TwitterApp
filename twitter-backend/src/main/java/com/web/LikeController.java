package com.web;

import com.model.Like;
import com.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/likes")
public class LikeController {
    private LikeService likeService;

    @Autowired
    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping
    @ResponseBody
    public Like saveLike(@RequestBody Long likedTweetId) {
        return likeService.save(likedTweetId);
    }

    @GetMapping("/byTweet")
    @ResponseBody
    @RequestMapping(value = "/{id}")
    public List<Like> getLikesByTweet(@PathVariable("id") Long id) {
        return likeService.getLikesByTweet(id);
    }
}
