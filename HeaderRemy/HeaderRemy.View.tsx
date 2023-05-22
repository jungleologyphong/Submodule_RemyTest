import React from 'react';
import {Text, TextProps, View, Pressable} from 'react-native';
import {Image} from 'react-native-animatable';
import {styles} from './HeaderRemy.Styles';
import {TextView} from '~components';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {HeaderRemyLogics} from './HeaderRemy.Logics';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface HeaderProps extends TextProps {
  itemFirstMenu: string;
  itemOthersMenu: string;
  sourceImg?: any;
}

export const HeaderRemy: React.FC<any> = props => {
  const {sourceImg, itemFirstMenu, ...itemOthersMenu} = props;
  const {headersItemMenu} = HeaderRemyLogics({
    itemFirstMenu,
    ...itemOthersMenu,
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: heightPercentageToDP('8%'),
        }}>
        <Image source={sourceImg} style={styles.logo} />
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: widthPercentageToDP('3%'),
          height: heightPercentageToDP('8%'),
          width: widthPercentageToDP('100%'),
        }}>
        {headersItemMenu.map((item, index) => {
          return (
            <Pressable
              onPress={() => console.log(item.itemMenu)}
              style={{padding: 10}}>
              <Text style={{fontSize: heightPercentageToDP('1.85%')}}>
                {item.itemMenu}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
