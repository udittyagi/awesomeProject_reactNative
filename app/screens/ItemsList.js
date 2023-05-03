import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import SafeView from '../components/Common/SafeView/SafeView';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import colors from '../configs/color';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: 1,
    image: require('../assets/mosh.jpg'),
    title:
      "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    subTitle:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
  },
  {
    id: 2,
    image: require('../assets/mosh.jpg'),
    title: 'Mosh Hemadani',
    subTitle: '4 Listing',
  },
];

const ItemSeperator = () => {
  return <View style={styles.itemSeperator} />;
};

const SwipeableItems = ({...props}) => {
  const renderRightActions = (progress, dragX) => {
    return (
      <View style={styles.swipeView}>
        <MaterialIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
    );
  };
  return (
    <Swipeable
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}
      containerStyle={{backgroundColor: colors.secondary}}>
      <ProfileCard
        {...props}
        showChevron
        numberOfSubTitleLines={3}
        numberOfTitleLines={1}
      />
    </Swipeable>
  );
};

export default function ItemsList() {
  return (
    <SafeView>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        ItemSeparatorComponent={ItemSeperator}
        renderItem={({item}) => (
          <SwipeableItems style={styles.profileCard} {...item} />
        )}
      />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  itemSeperator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightGrey,
  },
  profileCard: {
    backgroundColor: '#fff',
  },
  swipeView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});
