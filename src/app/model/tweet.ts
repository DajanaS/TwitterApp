import {User} from './user';

export class Tweet {
  id: number;
  content: string;
  author: User;
  date: Date;
  likes: number;
}
