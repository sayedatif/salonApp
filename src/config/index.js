import { Text } from 'react-native';

export const DebugSettings = {
  yellowBox: __DEV__,
  reduxLogging: __DEV__
};

export const AppConfig = {
  // font scaling override - RN default is on
  allowTextFontScaling: true
};

export default () => {
  if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    console.disableYellowBox = !DebugSettings.yellowBox;
  }

  // Allow/disallow font-scaling in app
  Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;
};
