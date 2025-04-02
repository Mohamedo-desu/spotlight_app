import { Id } from "@/convex/_generated/dataModel";

export interface CommentProps {
  user: {
    fullname: string | undefined;
    image: string | undefined;
  };
  _id: Id<"comments">;
  _creationTime: number;
  userId: Id<"users">;
  postId: Id<"posts">;
  content: string;
}
export interface CommentsModalProps {
  visible: boolean;
  postId: Id<"posts">;
  onClose: () => void;
}

export interface PostProps {
  _id: Id<"posts">;
  imageUrl: string;
  caption?: string;
  likes: number;
  comments: number;
  _creationTime: number;
  isLiked: boolean;
  isBookmarked: boolean;
  author: {
    _id: string;
    username: string;
    image: string;
  };
}

export interface StoryProps {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
}
