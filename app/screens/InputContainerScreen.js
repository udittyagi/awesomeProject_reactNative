import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppPicker from '../components/Common/AppPicker/AppPicker';
import AppTextInput from '../components/Common/AppTextInput/AppTextInput';
import SafeView from '../components/Common/SafeView/SafeView';

const options = [
  {label: 'Red', value: 1},
  {label: 'Blue', value: 2},
  {label: 'Orange', value: 3},
  {label: 'Green', value: 4},
  {label: 'Aqua', value: 5},
];

export default function InputContainerScreen() {
  return (
    <SafeView>
      <AppTextInput icon="email" placeholder="Enter Name" />
      <AppPicker
        options={options}
        icon="format-list-bulleted"
        placeholder="Select Color"
        containerStyle={{marginTop: 10}}
      />
    </SafeView>
  );
}
