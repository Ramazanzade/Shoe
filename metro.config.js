const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = (async () => {
    const { resolver: { assetExts } } = await getDefaultConfig();
  
    return { resolver: { assetExts: assetExts.concat(['obj', 'dae', 'scn', 'zip']) } };
  })();