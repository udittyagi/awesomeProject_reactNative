import {Text, View} from 'react-native';
import React from 'react';

import styles from './IconCard.styles';
import globalStyles from '../../configs/globalStyles';

export default function IconCard({style, Icon, title, iconColor}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconView({iconColor})}>{Icon}</View>
      <View style={styles.textView}>
        <Text style={[globalStyles.text, styles.cardText]}>{title}</Text>
      </View>
    </View>
  );
}
