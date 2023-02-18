var easyinvoice = require('easyinvoice');
let fs = require('fs')
var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "USD",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://cdn.shopify.com/s/files/1/0566/3182/0333/files/LOGO-color.png?v=1647674394", //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
        "company": "DEPO SOLUTION PRIVATE LIMITED",
        "address": "77/1/A, Christopher,Topsia",
        "zip": "700046",
        "city": "Kolkata",
        "state":"West Bengal",
        "country": "India"
        
    },
    "client": {
        "company": "DEPO SOLUTION PRIVATE LIMITED",
        "address": "77/1/A, Christopher,Topsia",
        "zip": "700046",
        "city": "Kolkata",
        "state":"West Bengal",
        "country": "India"
        
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 15 days."
};

easyinvoice.createInvoice(data, async function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);
    await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});