import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 4,
  },
  textContainer: {
    paddingLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#999',
  },
  content: {
    marginTop: 8,
  },
  mediaImage: {
    
    height: '80vw',
    marginTop: 16,
    marginBottom: -16,
    marginLeft: -16,
    marginRight: -16,

  },
  interact: {
    flexDirection: 'row',
    marginTop: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  liked: {
    color: '#e0245e'
  },
  interactText: {
    marginLeft: 4,
  },
  interactions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  interaction: {
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
  },
  interactionIcon: {
    color: '#ffca43',
  },
  interactionText: {
    color: '#666',
    marginLeft: 4,
  },
});

const SinglePost = ({id, user, title, created, content, media, liked, numberOfLikes, numberOfComments, numberOfShares, comments, service, onPressLike}) =>
  <View style={styles.container}>
    <View style={styles.header}>
      <Image style={styles.avatar} source={{uri: user.image}} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{created} &bull; via {service}</Text>
      </View>
    </View>

    <View style={styles.content}>
      <Text>{content}</Text>

      {media.type === 'text' && (
        <Text>{media.description}</Text>
      )}

      {media.type === 'image' && ([
        <Text key={0}>{media.description}</Text>,
        <Image key={1} source={{uri: media.image_uri}} style={styles.mediaImage} />
      ])}
    </View>

    <View style={styles.interact}>
      <TouchableOpacity style={styles.button} onPress={onPressLike}>
        <Icon style={liked ? styles.liked : {}} name={`heart${liked ? '' : '-outline'}`} size={18} />
        <Text style={[styles.interactText, liked ? styles.liked : {}]}>{liked ? 'Curtiu' : 'Curtir'}</Text>
      </TouchableOpacity>

      {comments !== false &&
        <TouchableOpacity style={styles.button}>
          <Icon name='comment-outline' size={18} />
          <Text style={styles.interactText}>Comentar</Text>
        </TouchableOpacity>
      }

      <TouchableOpacity style={styles.button}>
        <Icon name='share-outline' size={18} />
        <Text style={styles.interactText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.interactions}>
      <View style={styles.interaction}>
        <Icon style={styles.interactionIcon} name='heart' size={18} />
        <Text style={styles.interactionText}>{numberOfLikes || 0}</Text>
      </View>
      {comments !== false && 
        <View style={styles.interaction}>
          <Icon style={styles.interactionIcon} name='comment' size={18} />
          <Text style={styles.interactionText}>{numberOfComments || 0}</Text>
        </View>
      }
      <View style={styles.interaction}>
        <Icon style={styles.interactionIcon} name='share' size={18} />
        <Text style={styles.interactionText}>{numberOfShares || 0}</Text>
      </View>
      
    </View>
    
  </View>;

SinglePost.defaultProps = {
  media: {}
}

export default SinglePost;