const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro'); // 'utils' nahi, 'metro' likhna hai

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });