import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,

    display: 'flex',
    flexDirection: 'row',

  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 100,
    margin: 4,
  },
  textInput: {
    outline: 'none',
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 16,
  }
});

export default () => <View style={styles.container}>
  <Image style={styles.avatar} source={{uri: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}} />
  <TextInput style={styles.textInput} multiline={true} placeholder='No que está pensando?' placeholderTextColor={'#aaa'} />
</View>