export class TweetLike {
  id: number;
  likeOwnerId: number;
  likedTweetId: number;

  constructor(id: number, likeOwnerId: number, likedTweetId: number) {
    this.id = id;
    this.likeOwnerId = likeOwnerId;
    this.likedTweetId = likedTweetId;
  }
}
