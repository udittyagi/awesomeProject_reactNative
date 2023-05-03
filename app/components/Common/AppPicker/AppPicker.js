import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SafeView from '../SafeView/SafeView';
import colors from '../../../configs/color';
import globalStyles from '../../../configs/globalStyles';
import styles from './AppPicker.styles';
import Picker from './PickerComponents/Picker';

export default function AppPicker({
  containerStyle,
  icon,
  inputStyle,
  ItemPickerComponent = Picker,
  numColumns = 1,
  onChange,
  onClose,
  options = [],
  placeholder,
  value,
  width,
}) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = state => () => {
    if (state === false) {
      onClose && onClose();
    }
    setOpenModal(state);
  };

  const handleChange = selectedItem => () => {
    onChange && onChange(selectedItem);
    setOpenModal(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleModal(true)}>
        <View style={[styles.container({width}), containerStyle]}>
          {icon && (
            <MaterialIcons name={icon} size={20} color={colors.mediumGrey} />
          )}
          {value ? (
            <Text style={[globalStyles.text, styles.textInput, inputStyle]}>
              {value.label}
            </Text>
          ) : (
            <Text
              style={[
                globalStyles.text,
                styles.textInput,
                styles.placeholderText,
                inputStyle,
              ]}>
              {placeholder}
            </Text>
          )}
          <MaterialIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={openModal} animationType="slide">
        <SafeView style={styles.modalContainer}>
          <View style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              onPress={handleModal(false)}
              color={colors.mediumGrey}
            />
          </View>
          <FlatList
            keyExtractor={item => item.value}
            data={options}
            numColumns={numColumns}
            renderItem={({item}) => (
              <ItemPickerComponent item={item} onPress={handleChange(item)} />
            )}
          />
        </SafeView>
      </Modal>
    </>
  );
}
