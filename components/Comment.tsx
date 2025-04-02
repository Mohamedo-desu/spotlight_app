import { styles } from "@/styles/feed.styles";
import { Image } from "expo-image";
import React, { FC } from "react";
import { Text, View } from "react-native";

import { CommentProps } from "@/types";
import { formatDistanceToNow } from "date-fns";

const Comment: FC<{ comment: CommentProps }> = ({ comment }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={comment.user.image} style={styles.commentAvatar} />

      <View style={styles.commentContent}>
        <Text style={styles.commentUsername}>{comment.user.fullname}</Text>
        <Text style={styles.commentText}>{comment.content}</Text>
        <Text style={styles.commentTime}>
          {formatDistanceToNow(comment._creationTime, { addSuffix: true })}
        </Text>
      </View>
    </View>
  );
};

export default Comment;
