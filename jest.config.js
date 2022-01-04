module.exports = {
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {},
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageDirectory: '.reports',
  collectCoverageFrom: ['src/app/**/*.(component|directive|pipe|service).ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
