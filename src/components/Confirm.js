import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Modal, ActivityIndicator, View } from 'react-native';
import { Card, CardSection, Clickable } from './ModalComponents';
import { Button } from './CommonComponents';
import { Footer, Policy } from './DescText';

class Confirm extends Component {

  constructor() {
    super();
   this.state = {
     visible: false,
     loaded: false,
     data: {}
   };
  }
   componentWillMount() {
     console.log('Component will Mount');
     axios.get('https://react-native-sample.herokuapp.com')
     .then(response => {
       this.setState({
          data: response.data,
          visible: !this.state.visible,
          loaded: !this.state.loaded
        });
       console.log(this.state.data);
     });
   }
   render() {
  return (
  <View>
    <ActivityIndicator
        animating={!this.state.loaded}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 300
        }}
        color='#1072B7'
        size="large"
    />
    <Modal
    visible={this.state.visible}
    transparent
    animationType='slide'
    onRequestClose={() => {}}
    >
      <Card>
        <CardSection >
          <Clickable data={this.state.data} />
        </CardSection>
        <CardSection>
            <Policy />
        </CardSection>
        <CardSection>
          <Button
          onPress={() => {
            this.setState({ visible: !this.state.visible });
            Actions.thankYou();
          }}
          >Pay Now</Button>
        </CardSection>
        <CardSection>
            <Footer />
        </CardSection>
      </Card>
    </Modal>
  </View>
  );
  }
}


export default Confirm;
