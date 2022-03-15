import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  loginHeaderSection: {},
  loginHeaderImage: {},
  loginHeaderTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
  },
  loginHeaderSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'grey',
  },
  formSection: {},
  infoSection: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  infoText: {
    fontSize: 15,
    fontWeight: '600',
    paddingRight: 10,
  },
  infoLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
