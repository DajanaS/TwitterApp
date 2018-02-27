import {User} from './user';
import {TweetLike} from './tweetLike';

export class Tweet {
  id: number;
  content: string;
  author: User;
  date: Date;
  likes: TweetLike[];
  sumLikes: number;

  constructor(content: string, author: User, date: Date, likes: TweetLike[]) {
    this.content = content;
    this.author = author;
    this.date = date;
    this.likes = likes;
  }

  setSumLikes(sumLikes: number) {
    this.sumLikes = sumLikes;
  }
}
