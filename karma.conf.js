var webpackConfig = require('./build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // 测试浏览器，可以一起测试多个浏览器下情况，比如 Chrome、 Safari 、Firefox等
    browsers: ['Chrome'],
    // 测试框架，全局引入mocha和chai
    frameworks: ['mocha','sinon-chai'],
    // 匹配测试文件
    files: [
      // 'test/**/*.spec.js'
      // JavaScript模块测试\
      'test/mochaDemo/**/*.spec.js',
      // 'test/sinonDemo/**/*.spec.js',
      // 'test/unit/specs/axios/axiosTest.spec.js'
      // 'test/unit/specs/demo1/**/*.spec.js',
      // 'test/unit/specs/demo2/**/*.spec.js'
    ],
    // 预处理器
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    // webpack配置
    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],
    client: {
      mocha: {
        timeout:10000
      }
    },
    // 要将代码覆盖率设置为Karma，我们可以使用karma-coverage插件
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }

  })
}
