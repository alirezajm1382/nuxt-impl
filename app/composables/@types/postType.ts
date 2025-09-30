export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostWithUser extends Post {
  user?: {
    name: string;
    username: string;
  };
}
