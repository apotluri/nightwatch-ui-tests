module.exports = {

    tags: ['google'],
    disabled:false,

    'Demo test Google' : function (client) {
            const googleHome = client.page.googlePage();

            client.url('http://www.google.com');
            googleHome.sendKeys('@searchText', ['facebook', client.Keys.TAB]);
            googleHome.click('@clickBtn');
            googleHome.verify.containsText('#resultStats','About');
            client.end();
    }
};

