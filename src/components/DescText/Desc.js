import React from 'react';
import { View } from 'react-native';
import { Content, Link } from '../CommonComponents';


const Footer = () => {
  const { containerStyle } = styles;
return (
   <View style={containerStyle}>
      <Content
      size={9}
      color='#92979A'
      >If money is added to your PayPal balance before
      this transaction completes, the additional balance may be used
      to complete your payment.
      <Link>Learn More.</Link>
      </Content>
  </View>
);
};

const Policy = () => {
  const { containerStyle } = styles;
  return (
  <View style={containerStyle}>
      <Content size={10}>View
      <Link>PayPal Policies</Link>
         and your payment method
      rights.</Content>
  </View>
);
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 25
  }
};

export { Policy, Footer };
