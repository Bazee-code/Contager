import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  loginHeaderSection: {},
  loginHeaderImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  loginHeaderTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
    color: '#000',
  },
  loginHeaderSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  formSection: {
    marginTop: 10,
  },
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
