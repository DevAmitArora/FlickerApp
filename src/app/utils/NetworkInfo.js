import NetInfo from '@react-native-community/netinfo';
import {useState} from 'react';

const NetworkInfo = async () => {
  const [isNetworkConnected, setIsNetworkConnected] = useState(false);

  await NetInfo.fetch().then(state => {
    setIsNetworkConnected(state.isConnected);
  });
  return isNetworkConnected;
};

export default NetworkInfo;
