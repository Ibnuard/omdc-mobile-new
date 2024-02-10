import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Touchable from '../../../touchable';

const ModalPopUp = ({onButtonPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMessage}>Halo ini pesan popup</Text>
      <Touchable
        style={styles.buttonOk}
        onPress={onButtonPress ? onButtonPress : null}>
        <Text style={styles.textButton}>Ok</Text>
      </Touchable>
    </View>
  );
};

export default ModalPopUp;