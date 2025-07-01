export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/test/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
}
