import React from 'react';
import { View } from 'react-native';
import Content from './Content';

const Arrow = () => {
const { arrowContainer } = styles;
return (
  <View style={arrowContainer}>
    <Content
    color='#1072B7'
    size={21}
    weight='500'
    > >
      </Content>
   </View>
  );
};
const styles = {
   arrowContainer: {
  paddingRight: 35,
  justifyContent: 'center',
  alignItems: 'center'
  }
};
export default Arrow;
