import React from 'react';
import {Pressable, Text, TextProps, View} from 'react-native';
import {styles} from './SubHeaderRemy.Styles';

export interface HeaderProps extends TextProps {
  submenuProps: string[];
}

export const SubHeaderRemy: React.FC<HeaderProps> = props => {
  const {submenuProps} = props;

  return (
    <View style={styles.container}>
      <View style={styles.itemMenu}>
        {submenuProps.map(item => {
          return (
            <Pressable onPress={() => console.log('Item', item)}>
              <Text
                minimumFontScale={5}
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.textItem}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
