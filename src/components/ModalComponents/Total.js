import React from 'react';
import { View, Dimensions } from 'react-native';
import { Content, Arrow } from '../CommonComponents';
// import Arrow from './Arrow';

const Total = ({ value, currency }) => {
  const {
    containerStyle,
    textContainer,
    total
  } = styles;
  return (
    <View style={containerStyle}>
      <View style={textContainer}>
        <Content weight='700'> Total </Content>
      </View>
      <View style={total}>
      <Content weight='700'>{currency}{value}</Content>
      </View>
    <Arrow />
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F7F9FA',
    height: 40
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 25,
    width: Dimensions.get('window').width - 175
  },
  total: {
   justifyContent: 'center',
   alignItems: 'flex-end',
   width: Dimensions.get('window').width - 280
  }
};
export default Total;
