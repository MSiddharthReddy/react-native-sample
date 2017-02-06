import React from 'react';
import { View, Dimensions } from 'react-native';
import { Content } from '../CommonComponents';

const ClickableDetail = ({ header, main, sub, subColor }) => {
  const { textContainer } = styles;
  return (
    <View style={textContainer}>
      <Content weight='700'> {header} </Content>
      <Content> {main} </Content>
      <Content lines={1} size={11} color={subColor}> {sub} </Content>
    </View>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 25,
    height: 65,
    width: Dimensions.get('window').width - 80
  }
};

export default ClickableDetail;
