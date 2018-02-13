import {User} from './user';
import {Tweet} from './tweet';

export class TweetLike {
  id: number;
  likeOwner: User;
  likedTweet: Tweet;

  constructor(id: number, likeOwner: User, likedTweet: Tweet) {
    this.id = id;
    this.likeOwner = likeOwner;
    this.likedTweet = likedTweet;
  }
}