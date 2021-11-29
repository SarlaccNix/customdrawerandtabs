import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{margin: 15}}
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
          <Icon size={30} name="menu" color="blue" />
        </TouchableOpacity>
        <Text>Profile Page</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile Screen Goes Here</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={{fontWeight: 'bold'}}>Go Back</Text>
        </TouchableOpacity>
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

export default Profile;
