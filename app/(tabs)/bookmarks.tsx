import Loader from "@/components/Loader";
import NoBookmarksFound from "@/components/NoBookmarksFound";
import { api } from "@/convex/_generated/api";
import { styles } from "@/styles/feed.styles";
import { useQuery } from "convex/react";
import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Bookmarks = () => {
  const bookMarkedPosts = useQuery(api.bookmark.getBookmarkedPosts);

  if (bookMarkedPosts === undefined) {
    return <Loader />;
  }
  if (bookMarkedPosts.length === 0) {
    return <NoBookmarksFound />;
  }

  console.log(bookMarkedPosts);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>bookmarks</Text>
      </View>
      {/* POSTS */}
      <ScrollView
        contentContainerStyle={{
          padding: 8,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {bookMarkedPosts.map((post) => {
          if (!post) return null;

          return (
            <View
              style={{
                width: "33.33%",
                padding: 1,
              }}
              key={post._id}
            >
              <Image
                source={{ uri: post.imageUrl }}
                style={{ width: "100%", aspectRatio: 1 }}
                contentFit="cover"
                transition={200}
                cachePolicy={"memory-disk"}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Bookmarks;
