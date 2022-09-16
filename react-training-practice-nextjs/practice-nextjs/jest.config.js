/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '@components': '<rootDir>/components',
    '@constants': '<rootDir>/constants',
    '@context': '<rootDir>/context',
    '@enums': '<rootDir>/enums',
    '^@helpers/(.*)$': '<rootDir>/helpers/$1',
    '@interface': '<rootDir>/interfaces',
    '@pages': '<rootDir>/pages',
    '@containers': '<rootDir>/containers',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  collectCoverageFrom: [
    '*.{ts,tsx}',
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.{test,stories}.{js,ts,tsx}',
    '!**/*.d.ts',
    '!interfaces/**/*.ts',
    '!constants/**/*.ts',
    '!enums/**/*.ts',
    '!types/**/*.ts',
    '!main.tsx',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
