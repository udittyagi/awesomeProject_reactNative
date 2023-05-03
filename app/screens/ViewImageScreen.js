import {StyleSheet, Image, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SafeView from '../components/Common/SafeView/SafeView';
import colors from '../configs/color';

const ViewImageScreen = () => {
  return (
    <SafeView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topButtons}>
          <View style={[styles.button]}>
            <MaterialCommunityIcons
              name="close"
              color={colors.white}
              size={35}
            />
          </View>
          <View style={[styles.button]}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={colors.white}
              size={35}
            />
          </View>
        </View>
        <Image source={require('../assets/chair.jpg')} style={styles.image} />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
  },
  bgGreen: {
    backgroundColor: '#08a780',
  },
  bgRed: {
    backgroundColor: 'tomato',
  },
  container: {
    backgroundColor: colors.black,
    width: '100%',
  },
  content: {
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  topButtons: {
    width: '100%',
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default ViewImageScreen;
