import React from 'react';
import {Text, TextProps, View, Pressable, Button} from 'react-native';
import {Image} from 'react-native-animatable';
import {styles} from './HeaderRemy.Styles';
import {HeaderRemyLogics} from './HeaderRemy.Logics';
export interface HeaderProps extends TextProps {
  itemFirstMenu: string;
  itemOthersMenu: string;
  sourceImg?: any;
}

export const HeaderRemy: React.FC<any> = props => {
  const {sourceImg, itemFirstMenu, ...itemOthersMenu} = props;
  const {headersItemMenu, navigation} = HeaderRemyLogics({
    itemFirstMenu,
    ...itemOthersMenu,
  });

  return (
    <View style={styles.container}>
      <View style={styles.coverLogo}>
        <Image source={sourceImg} style={styles.logo} />
      </View>
      <View style={styles.itemMenu}>
        {headersItemMenu.map((item, index) => {
          return (
            <Pressable onPress={() => navigation.navigate(item.itemMenu)}>
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                key={index}
                style={styles.textItem}>
                {item.itemMenu}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
