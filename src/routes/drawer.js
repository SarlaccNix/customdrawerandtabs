import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {Node} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from './stack';
import {styles} from './styles';
import CustomDrawer from './CustomDrawer';
const DrawerNav = createDrawerNavigator();

const Screens = ({style, props}) => {
  console.log('Screen props', props);
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack />
    </Animated.View>
  );
};

const Drawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-7deg'],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -110],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{rotate}, {translateX}],
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <DrawerNav.Navigator
        overlayColor="#00000000"
        sceneContainerStyle={styles.contentZIndex}
        drawerType="slide"
        drawerPosition="left"
        drawerStyle={styles.drawer}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <CustomDrawer {...props} style={props.style} />;
        }}>
        <DrawerNav.Screen name="Home">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </DrawerNav.Screen>
      </DrawerNav.Navigator>
    </View>
  );
};

export default Drawer;
