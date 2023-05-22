import {useState} from 'react';
export interface Menu {
  itemMenu: string;
}

export interface HeaderProps {
  itemFirstMenu: string;
  itemOthersMenu: string;
}
export const HeaderRemyLogics = (props: HeaderProps) => {
  const {itemFirstMenu, ...itemOthersMenu} = props;
  const headersItemMenu: Menu[] = [
    {
      itemMenu: itemFirstMenu,
    },
    ...Object.values(itemOthersMenu).map(itemMenu => ({itemMenu})),
  ];

  return {headersItemMenu};
};
