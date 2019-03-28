const HtmlReporter = require('nightwatch-html-reporter');


const reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports/',
    reportFilename: 'report.html',
    themeName: 'default',
    hideSuccess: false,
    uniqueFilename: false,
    relativeScreenshots: true
});

module.exports = {
    abortOnAssertionFailure: true,
    checkBrowserForError: true,
    waitForConditionPollInterval: 500,
    waitForConditionTimeout: 10000,
    retryAssertionTimeout: 10000,
    waitForPageLoadTimeout: 20000,

    reporter: reporter.fn,
    write: function (results, options, done) {

        console.log(results);
        reporter.fn(results, done);
    },
    afterEach: function (client, done) {
        client.end();
        setTimeout(function () {
            done();
        }, 200);
    },
    beforeEach: function (client, done) {

        setTimeout(function () {
            done();
        }, 200);
    },
    rootAppSelector: '#react-app-hook',
};
