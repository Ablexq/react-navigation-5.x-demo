import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../components';
import navigationHelper from '../../navigation/navigationHelper';
import { HeaderBackButton } from '@react-navigation/stack';

function Setting({ navigation, route }) {

  // 修改导航栏内容
  // navigation.setOptions({
  //   headerRight: props => (
  //     <HeaderBackButton
  //       {...props}
  //       onPress={() => {
  //         alert('不能再返回了！');
  //       }}
  //     />
  //   ),
  // });

  useEffect(() => {
    navigationHelper.backHandle(() => {
      alert('不给退出,请点下面退出按钮');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Button title={'点我退出'}
        onPress={() => {
          navigationHelper.pop();
        }} />
      <Button title={'返回 mineIndex tab'}
        onPress={() => {
          navigationHelper.navigate('mine');
        }} />
      <Button title={'push test'}
        onPress={() => {
          navigationHelper.push('test');
        }} />
      <Button title={'getParams'}
        onPress={() => {
          alert(JSON.stringify(navigationHelper.getParams()));
        }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Setting;
