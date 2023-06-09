import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('15%'),
    flexDirection: 'column',
  },
  coverLogo: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('8%'),
  },
  logo: {
    width: wp('8%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },
  itemMenu: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: hp('8%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: hp('1.85%'),
    minWidth: hp('5%'),
    maxWidth: hp('25%'),
    marginLeft: hp('2.75%'),
    marginHorizontal: hp('8%'),
  },
});
