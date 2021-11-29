import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerItemListProps, DrawerItemProps} from './styles';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.titleDrawerContainer}>
        <Text style={{color: '#fff', fontSize: 23}}>Hernan</Text>
      </View>
      {/* <DrawerItemList {...props} {...DrawerItemListProps} /> */}
      <DrawerItem
        onPress={() => {
          props.navigation.navigate('Home');
        }}
        label="Home"
        {...DrawerItemProps}
      />
      <DrawerItem
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
        label="Profile"
        {...DrawerItemProps}
      />
      <View style={style.space} />
      <DrawerItem onPress={() => {}} label="Sign Out" {...DrawerItemProps} />
    </DrawerContentScrollView>
  );
};
const style = StyleSheet.create({
  titleDrawerContainer: {
    width: '50%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  titleDrawer: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0.1,
    lineHeight: 38,
  },
  space: {
    height: 1,
    width: 175.5,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default CustomDrawer;
