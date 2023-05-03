import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SafeView from '../components/Common/SafeView/SafeView';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import IconCard from '../components/IconCard/IconCard';
import colors from '../configs/color';

const data = [
  {
    title: 'My Listings',
    iconColor: colors.secondary,
    Icon: (
      <MaterialCommunityIcons
        name="format-list-bulleted"
        size={20}
        color={colors.white}
      />
    ),
  },
  {
    title: 'My Messages',
    iconColor: colors.primary,
    Icon: (
      <MaterialCommunityIcons name="email" size={20} color={colors.white} />
    ),
  },
];

export default function MyAccount() {
  return (
    <SafeView style={styles.contaier}>
      <ProfileCard
        style={styles.profileCard}
        image={require('../assets/mosh.jpg')}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
      />
      <View style={styles.listView}>
        <FlatList
          data={data}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <IconCard
              style={styles.iconCard}
              title={item.title}
              iconColor={item.iconColor}
              Icon={item.Icon}
            />
          )}
        />
      </View>
      <IconCard
        style={styles.iconCard}
        title="Log Out"
        iconColor={'#ffe66d'}
        Icon={
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color={colors.white}
          />
        }
      />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: '#f8f4f4',
    // backgroundColor: 'blue',
  },
  profileCard: {
    backgroundColor: colors.white,
  },
  iconCard: {
    backgroundColor: colors.white,
    marginTop: 2,
  },
  listView: {
    marginVertical: 20,
  },
});
