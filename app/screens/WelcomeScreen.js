import {Text, ImageBackground, StyleSheet, Image, View} from 'react-native';

import colors from '../configs/color';
import AppButton from '../components/Common/AppButton/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
      blurRadius={5}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo-red.png')}
          style={styles.image}
        />
        <Text>Sell What u Don't need</Text>
        <View style={styles.bottomView}>
          <AppButton
            title="Login"
            color="secondary"
            style={{marginBottom: 16}}
          />
          <AppButton title="Register" color="primary" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  bottomButtons: {
    width: '100%',
    height: 50,
  },
  bgRed: {
    backgroundColor: colors.secondary,
  },
  bgGreen: {
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default WelcomeScreen;
