module.exports = {

    tags: ['salesForce'],
    disabled:false,

    'salesForce Demo' : function(client) {

        const salesForceHome = client.page.salesForcePage();

        client.url('https://www.salesforce.com/ca/');

        salesForceHome.click('@login');
        salesForceHome.salesForceLogin();

    }
}