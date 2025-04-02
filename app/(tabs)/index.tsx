import Loader from "@/components/Loader";
import NoPostsFound from "@/components/NoPostsFound";
import Post from "@/components/Post";
import Story from "@/components/Story";
import { STORIES } from "@/constants/mock-data";
import { COLORS } from "@/constants/theme";
import { api } from "@/convex/_generated/api";
import { styles } from "@/styles/feed.styles";
import { PostProps } from "@/types";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  const [refreshing, setRefreshing] = useState(false);
  const posts = useQuery(api.posts.getFeedPosts);

  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  const renderItem = ({ item }: { item: PostProps }) => {
    return <Post post={item} />;
  };

  if (posts === undefined) {
    return <Loader />;
  }

  return (
    <FlatList
      data={posts}
      style={styles.container}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          colors={[COLORS.primary]}
          tintColor={COLORS.primary}
        />
      }
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>spotlight</Text>
            <TouchableOpacity onPress={() => signOut()}>
              <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.storiesContainer}
          >
            {STORIES.map((story) => (
              <Story story={story} key={story.id} />
            ))}
          </ScrollView>
        </>
      }
      ListEmptyComponent={<NoPostsFound />}
    />
  );
}
