import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';

import Card from '../components/ItemCard/ItemCard';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import SafeView from '../components/Common/SafeView/SafeView';

const data = [
  {
    id: 1,
    image: require('../assets/jacket.jpg'),
    title: 'Red Jacket For Sale',
    subTitle: '$100'
  },
  {
    id: 2,
    image: require('../assets/jacket.jpg'),
    title: 'Red Jacket For Sale',
    subTitle: '$100'
  }
];

export default function ListingScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [itemData, setItemData] = React.useState([...data]);

  const onRefreshHandler = () => {
    setRefreshing(true);
    setTimeout(() => {
      if (itemData.length === 1) {
        setItemData([...data]);
      } else {
        setItemData([data[0]]);
      }
      setRefreshing(false);
    }, 500);
  };

  return (
    <SafeView style={styles.container}>
      <View style={styles.listView}>
        <FlatList
          data={itemData}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={onRefreshHandler}
          renderItem={({item}) => <Card {...item} style={styles.cardStyle} />}
        />
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f4f4',
    width: '100%'
  },
  profileCard: {
    marginTop: 20
  },
  listView: {
    width: '90%'
  },
  cardStyle: {
    height: 300,
    borderRadius: 20,
    marginBottom: 20
  }
});

// return (
//   <View style={styles.container}>
//     <Card
//       image={require('../assets/jacket.jpg')}
//       title='Red Jacket for Sale'
//       subTitle='$100'
//       style={{height: '40%'}}
//     />
//     <ProfileCard
//       title='Mosh Hemadani'
//       subTitle='5 Listings'
//       image={require('../assets/mosh.jpg')}
//       style={styles.profileCard}
//     />
//   </View>
// );
