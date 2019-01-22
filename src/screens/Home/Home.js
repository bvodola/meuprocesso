import React from  'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import PublishInput from '../../shared/PublishInput';
import SinglePost from '../../shared/SinglePost';
import globals from '../../globals';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  async getTwitterHomeFeed() {
    const res = await axios.get(`${globals.BACKEND_URL}/api/posts/twitter/home`);
    console.log(res.data.data);
    this.setState({posts: res.data.data})
  }

  async likePost(post, like) {
    const action = like ? 'like' : 'unlike'

    let updatedPosts = [ ...this.state.posts ];
    const updatedPostIndex = updatedPosts.findIndex(p => p.id == post.id);
    updatedPosts[updatedPostIndex].liked = like;
    if(like)
      updatedPosts[updatedPostIndex].numberOfLikes++;
    else
      updatedPosts[updatedPostIndex].numberOfLikes--;
    this.setState({posts: updatedPosts});

    await axios.post(`${globals.BACKEND_URL}/api/posts/${post.service}/${action}/${post.id}`);
  }

  async componentDidMount() {
    if(!localStorage.getItem('posts') || 1==1) {
      await this.getTwitterHomeFeed();
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    } else {
      console.log('local');
      this.setState({posts: JSON.parse(localStorage.getItem('posts'))})
    }
    
  }

  render() {
    const {posts} = this.state;

    return(
      <View>
        <PublishInput />
        <ScrollView>
          {posts.map(post => (
            <SinglePost
              key={post.id}
              onPressLike={() => this.likePost(post, !post.liked)}
              {...post}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;