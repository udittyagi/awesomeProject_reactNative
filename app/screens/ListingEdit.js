import {StyleSheet} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import SafeView from '../components/Common/SafeView/SafeView';
import AppForm from '../components/Common/Form/AppForm';
import AppFormField from '../components/Common/Form/AppFormField';
import SubmitButton from '../components/Common/Form/SubmitButton';
import AppFormPicker from '../components/Common/Form/AppFormPicker';
import CategoryPicker from '../components/Common/AppPicker/PickerComponents/CategoryPicker';

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().moreThan(1).lessThan(1001).label('Price'),
  category: Yup.object().required().label('Category'),
});

const options = [
  {
    label: 'Furniture',
    value: 'furniture',
    icon: 'floor-lamp',
    iconColor: '#fc5c65',
  },
  {label: 'Cars', value: 'car', icon: 'car', iconColor: '#fd9644'},
  {label: 'Cameras', value: 'camera', icon: 'camera', iconColor: '#fed330'},
  {
    label: 'Movies & Music',
    value: 'movie_music',
    icon: 'headphones',
    iconColor: '#4b7bec',
  },
  {
    label: 'Clothes',
    value: 'clothes',
    icon: 'shoe-heel',
    iconColor: '#2bcbba',
  },
  {label: 'Games', value: 'games', icon: 'cards', iconColor: '#26de81'},
  {
    label: 'Sports',
    value: 'sports',
    icon: 'basketball',
    iconColor: '#45aaf2',
  },
];

export default function ListingEdit() {
  const onSubmit = value => {
    console.log('Value+++', value);
  };

  return (
    <SafeView style={style.container}>
      <AppForm
        initialValues={{title: '', price: '', category: '', description: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" placeholder="Price" width={120} />
        <AppFormPicker
          ItemPickerComponent={CategoryPicker}
          numColumns={3}
          options={options}
          name="category"
          placeholder="Categroy"
          showIconView
          width="50%"
        />
        <AppFormField
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="POST" />
      </AppForm>
    </SafeView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});
