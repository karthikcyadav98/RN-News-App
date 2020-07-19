import React from 'react';
import {Text} from 'native-base';
import moment from 'moment';

const Time = ({time}) => {
  return <Text note>{moment(time || moment.now()).fromNow()}</Text>;
};

export default Time;
