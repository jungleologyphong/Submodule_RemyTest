import {useState} from 'react';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export interface Menu {
  itemMenu: string;
}
export interface HeaderProps {
  itemFirstMenu: string;
  itemOthersMenu: string;
}

export const HeaderRemyLogics = (props: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {itemFirstMenu, ...itemOthersMenu} = props;
  const headersItemMenu: Menu[] = [
    {
      itemMenu: itemFirstMenu,
    },
    ...Object.values(itemOthersMenu).map(itemMenu => ({itemMenu})),
  ];

  return {headersItemMenu, navigation};
};
