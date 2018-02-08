import {User} from './user';

export class Tweet {
  id: number;
  content: string;
  author: User;
  date: Date;
  likes: number;

  constructor(content: string, author: User, date: Date, likes: number) {
    this.content = content;
    this.author = author;
    this.date = date;
    this.likes = likes;
  }
}
