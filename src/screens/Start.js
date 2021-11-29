import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{margin: 15}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Icon size={30} name="menu" color="blue" />
        </TouchableOpacity>
        <Text>Home Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 100,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#9f9fa0',
    letterSpacing: 4,
  },
});

export default Start;
