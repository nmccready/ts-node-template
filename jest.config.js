const debug = require('./debug').spawn('jest');

const toNotIgnore = {
  modules: [].join('|'),
};

const toExport = {
  rootDir: __dirname,
  transformIgnorePatterns: ['node_modules', 'tmp'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'css'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/node_modules/@znemz/react-extras-jest/lib/assetsTransformer.js',
    '\\.(css|less|pcss|sass)$':
      '<rootDir>/node_modules/@znemz/react-extras-jest/lib/assetsTransformer.js',
    'our-config': '<rootDir>/config/index.js',
  },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@znemz/react-extras-jest/lib/setup.js'],
  verbose: true,
  preset: 'ts-jest',
};

if (toNotIgnore.modules.length) {
  toExport.transformIgnorePatterns.push(`/node_modules/(?!(${toNotIgnore.modules}))`);
}

debug(() => toExport.transformIgnorePatterns);

module.exports = toExport;
