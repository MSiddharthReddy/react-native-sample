import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Arrow } from '../CommonComponents';
import ClickableDetail from './ClickableDetail';
import Total from './Total';

const Clickable = ({ data }) => {
  const {
    ship,
    pay,
    total
  } = data;

  const {
    container
   } = styles;
  return (
<View>
 <TouchableOpacity>
    <View style={container}>
      <ClickableDetail
      header='Ship to'
      main={ship.name}
      sub={ship.address}
      />
      <Arrow />
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
     <View style={container}>
     <ClickableDetail
     header='Pay with'
     main={pay[0].type + ' ' + pay[0].number}
     sub={pay[1].type + ' ' + pay[1].number + ' (backup)'}
     subColor='#B3B6B8'
     />
       <Arrow />
     </View>
   </TouchableOpacity>
   <TouchableOpacity>
      <Total value={total.value} currency={total.currency} />
    </TouchableOpacity>
  </View>
  );
};
const styles = {
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 15
  }
};
export default Clickable;
