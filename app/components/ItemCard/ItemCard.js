import {View, Text, Image} from 'react-native';
import React from 'react';

import AppText from '../Common/Text/AppText';
import styles from './ItemCard.styles';
import globalStyles from '../../configs/globalStyles';

export default function Card({title, subTitle, image, style = {}}) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textWrapper}>
        <AppText>{title}</AppText>
        <Text style={[globalStyles.text, styles.subTitleText]}>{subTitle}</Text>
      </View>
    </View>
  );
}
