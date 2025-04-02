import Loader from "@/components/Loader";
import NoNotificationFound from "@/components/NoNotificationFound";
import Notification from "@/components/Notification";
import { api } from "@/convex/_generated/api";
import { styles } from "@/styles/notifications.styles";
import { useQuery } from "convex/react";
import React from "react";
import { FlatList, Text, View } from "react-native";

const Notifications = () => {
  const notifications = useQuery(api.notifications.getNotifications);

  if (notifications === undefined) {
    return <Loader />;
  }
  if (notifications.length === 0) {
    return <NoNotificationFound />;
  }

  const renderItem = ({ item }: { item: PostProps }) => {
    return <Notification notification={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        style={styles.container}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Notifications;
