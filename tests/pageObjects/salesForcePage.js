
module.exports = {
    elements: {
        login: {
            selector: '.global-login .disabled'
        },
        username: {
            selector: '#username',
        },
        password: {
            selector: '#password',
        },
        email: {
            selector: '#email',
        },
        logo: {
            selector: '#logo',
        },
        loginBtn: {
            selector: '#Login'
        }
    },
    commands: {
        salesForceLogin: function(){
            this.waitForElementVisible('@logo','6000');
            this.sendKeys('@username','aneesh.sunny91-lfft@force.com');
            this.sendKeys('@password',this.api.globals.password);
            this.click('@loginBtn');
        }
    }
};