// eslint-disable-next-line no-undef
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    'plugins': [
        [
            'module-resolver',
            {
                'root': ['./src'],
                'alias': {
                    '@components': './src/components',
                    '@assets': './src/assets',
                    '@constants': './src/constants',
                    '@hooks': './src/hooks',
                    '@routes': './src/routes',
                    '@screens': './src/screens',
                    '@services': './src/services',
                    '@store': './src/store',
                    '@themes': './src/themes',
                    '@types': './src/types',
                    '@util': './src/util',
                    '@helpers': './src/helpers',
                }
            }]
    ]
}

