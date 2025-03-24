import { styles } from "@/styles/feed.styles";
import { Image } from "expo-image";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
}

const Story: FC<{ story: Story }> = ({ story }) => {
  return (
    <TouchableOpacity style={styles.storyWrapper}>
      <View style={[styles.storyRing, !story.hasStory && styles.noStory]}>
        <Image source={story.avatar} style={styles.storyAvatar} />
      </View>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
};

export default Story;
