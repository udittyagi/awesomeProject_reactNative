import {Image, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ProfileCard.styles';
import globalStyles from '../../configs/globalStyles';
import colors from '../../configs/color';

export default function ProfileCard({
  image,
  title,
  showChevron,
  subTitle,
  style,
  numberOfSubTitleLines,
  numberOfTitleLines,
}) {
  return (
    <View style={[styles.contentContainer, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text
          style={[globalStyles.text, styles.cardText]}
          numberOfLines={numberOfTitleLines}>
          {title}
        </Text>
        <Text
          style={[globalStyles.text, styles.cardText, styles.subTitleText]}
          numberOfLines={numberOfSubTitleLines}>
          {subTitle}
        </Text>
      </View>
      {showChevron ? (
        <MaterialIcons
          name="chevron-right"
          size={20}
          color={colors.mediumGrey}
        />
      ) : null}
    </View>
  );
}
