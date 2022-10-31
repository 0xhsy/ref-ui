module.exports = {
  preset: 'ts-jest',
  transform: {
    '@aurora-is-near[/\\\\].+\\.(js|jsx|ts|tsx)$':
      './babelTransformImportExport.js',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transformIgnorePatterns: [
    'node_modules[/\\\\](?!@aurora-is-near[/\\\\]engine[/\\\\])',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  setupFiles: ['<rootDir>/jest-shim.js'],
};
