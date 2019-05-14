
module.exports = {
    elements: {
        searchText: {
            selector: '[class*=gLFyf]'
        },
        clickBtn: {
            selector: '.FPdoLc [name=btnK]',
        },
        link: {
            selector: '.g div div .rc .LC20lb',
        },
        email: {
            selector: '#email',
        },
        pwd: {
            selector: '#pass',
        },
        loginBtn: {
            selector: '#loginbutton'
        }
    },
    commands: {
        facebookLogin: function(){
            this.waitForElementVisible('@email','6000');
            this.sendKeys('@email','loverboy_aneesh@yahoo.com');
            this.sendKeys('@pwd',this.api.globals.password);
            this.click('@loginBtn');
        }
    }
};