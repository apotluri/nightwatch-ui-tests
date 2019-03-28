const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const nightwatch_config = {
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        selenium_host: '127.0.0.1',
        selenium_port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
        }
    }, test_workers: {
        "enabled": false,
        "workers": "auto"
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost',
            silent: true,
            disable_colors: false,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'screenshots/'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: [
                        'disable-web-security',
                        '--disable-web-security', // DISABLE CORS
                        // '--no-sandbox',           // AVOID DOCKER ERROR
                        '--disable-gpu',          // AVOID CHROME HEADLESS ERROR
                        '--ssl-version-max=tls1', // AVOID CREDENTIALS ERROR
                        // '--no-proxy-server',      // UNCOMMENT FOR LOCAL TESTING
                        '--disable-extensions',
                        // '--headless',             // RUN CHROME HEADLESS (!),
                    ]
                }
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                screenshots: {
                    enabled: true,
                    on_failure: true,
                    on_error: true,
                    path: 'screenshots/'
                },
                chromeOptions: {
                    args: [
                        'disable-web-security',
                        '--disable-web-security', // DISABLE CORS
                        // '--no-sandbox',           // AVOID DOCKER ERROR
                        '--disable-gpu',          // AVOID CHROME HEADLESS ERROR
                        '--ssl-version-max=tls1', // AVOID CREDENTIALS ERROR
                        '--no-proxy-server',      // UNCOMMENT FOR LOCAL TESTING
                        '--disable-extensions',
                        //'--headless'              // RUN CHROME HEADLESS (!)
                    ],
                    mobileEmulation: {
                        deviceMetrics: {
                            touch: false,
                            pixelRatio: 1
                        }
                    }
                }
            }
        },
        ie: {
            desiredCapabilities: {
                browserName: "internet explorer",
                javascriptEnabled: true,
                acceptSslCerts: true,
                trustAllSSLCerficates: true,
                ignoreProtectedModeSettings: true,
                acceptInsecureCerts: true,
                platformName: "WINDOWS",
            }
        },
        safari: {
            desiredCapabilities : {
                browserName : "safari",
                javascriptEnabled : true,
                acceptSslCerts : true
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true
            }
        },
        ios: {
            selenium_start_process: false,
            selenium_port: 4723,
            selenium_host: "127.0.0.1",
            silent: true,
            desiredCapabilities: {
                browserName: "Safari",
                platformName: "iOS",
                platformVersion: "10.3",
                deviceName: "iPhone 6s Plus"
            }
        },
        android: {
            launch_url: "http://localhost:4723/wd/hub",
            selenium_port: 4723,
            selenium_host: "localhost",
            silent: true,
            desiredCapabilities: {
                browserName: 'Chrome',
                appiumVersion: '1.6.4',
                platformName: 'android',
                platformVersion: '6.0',
                deviceName: 'Android Emulator',
                avd: 'Samsung_S7_Edge_API_23',
                avdArgs: '-dns-server 8.8.8.8',
            }
        },
        s7: {
            launch_url: "http://localhost:4723/wd/hub",
            selenium_port: 4723,
            selenium_host: "localhost",
            silent: true,
            desiredCapabilities: {
                browserName: 'Chrome',
                appiumVersion: '1.6.4',
                platformName: 'android',
                platformVersion: '7.0',
                deviceName: 'Android'
            }
        },
        mocha: {
            test_runner: {
                type: 'mocha',
                options: {
                    ui: 'bdd',
                    reporter: 'list'
                }
            }
        }
    }
};

module.exports = nightwatch_config;
