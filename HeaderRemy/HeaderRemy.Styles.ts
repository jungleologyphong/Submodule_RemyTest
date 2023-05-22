import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('15%'),
  },
  logo: {
    width: wp('10%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
});
