import React from 'react';
import {Text, TextProps, View} from 'react-native';
import {styles} from './TextBox.Styles';
import {TextBoxLogics} from './TextBox.Logics';

export interface TextBoxProps extends TextProps {
  title?: string;
  itemFirstContent?: string;
  itemOtherContent?: string;
  typeTextBox?: 'Normal' | 'MoreContents';
}

export const TextBox: React.FC<TextBoxProps> = props => {
  const {typeTextBox, itemFirstContent, title, ...itemOtherContent} = {
    ...props,
  };
  const {contentItem} = TextBoxLogics({itemFirstContent, ...itemOtherContent});

  if (typeTextBox === 'Normal') {
    return (
      <View style={styles.txtContent}>
        <Text style={{fontSize: 15, letterSpacing: 2.5, lineHeight: 25}}>
          {title}
        </Text>
        <Text style={{fontSize: 13, letterSpacing: 1, lineHeight: 25}}>
          {itemFirstContent}
        </Text>
      </View>
    );
  } else if (typeTextBox === 'MoreContents') {
    return (
      <View style={styles.txtContent}>
        <Text style={{fontSize: 15, letterSpacing: 2.5, lineHeight: 25}}>
          {title}
        </Text>

        {contentItem.map((item, index) => {
          return (
            <Text
              key={index}
              style={{fontSize: 13, letterSpacing: 1, lineHeight: 25}}>
              {item.itemContent}
            </Text>
          );
        })}
      </View>
    );
  }

  return <TextBox {...props} />;
};
