// For spacing between components inside a Modal.

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) =>
      <View style={styles.containerStyle}>
        { props.children }
      </View>
      ;


const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 15
  }
};

export default CardSection;
