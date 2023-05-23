import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface Content {
  itemContent?: string;
}
export interface ContentProps {
  itemFirstContent?: string;
  itemOtherContent?: string;
}

export const TextBoxLogics = (props: ContentProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {itemFirstContent, ...itemOtherContent} = props;
  const contentItem: Content[] = [
    {
      itemContent: itemFirstContent,
    },
    ...Object.values(itemOtherContent).map(itemContent => ({itemContent})),
  ];

  return {contentItem, navigation};
};
