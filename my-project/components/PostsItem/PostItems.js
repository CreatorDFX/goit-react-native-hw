import { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PostItems({
  navigation,
  imageURI,
  title,
  comments,
  likes,
  location,
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageURI }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imageNavContainer}>
        <View style={styles.imageStatContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navigation.navigate('Comments')}
          >
            {comments === 0 ? (
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color="#BDBDBD"
                style={{ transform: [{ scaleX: -1 }] }}
              />
            ) : (
              <Ionicons
                name="chatbubble-sharp"
                size={24}
                color="#FF6C00"
                style={{ transform: [{ scaleX: -1 }] }}
              />
            )}
            <Text style={styles.navigationTitle}>{comments}</Text>
          </TouchableOpacity>
          {likes >= 0 ? (
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={() => setIsLiked(!isLiked)}
            >
              <Feather
                name="thumbs-up"
                size={24}
                color={isLiked ? '#FF6C00' : '#BDBDBD'}
              />
              <Text style={styles.navigationTitle}>
                {isLiked ? likes + 1 : likes}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() =>
            navigation.navigate('Map', { position: location.position })
          }
        >
          <AntDesign name="enviromento" size={24} color="#BDBDBD" />
          <Text
            style={{
              ...styles.navigationTitle,
              textDecorationLine: 'underline',
            }}
          >
            {location}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    gap: 8,
    margin: 16,
  },
  imageContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: { fontFamily: 'Roboto-medium', fontSize: 16, color: '#212121' },
  imageNavContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  imageStatContainer: { flexDirection: 'row', gap: 24 },
  navigationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  navigationTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: 16,
    color: '#212121',
  },
});