import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
});
