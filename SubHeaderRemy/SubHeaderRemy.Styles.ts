import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('6%'),
  },
  itemMenu: {
    backgroundColor: '#E2E2E2',
    flexDirection: 'row',
    height: hp('6%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  textItem: {
    fontSize: hp('1.85%'),
    minWidth: hp('5%'),
    maxWidth: hp('25%'),
    marginLeft: hp('7.48%'),
    marginHorizontal: hp('1%'),
  },
});
