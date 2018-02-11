var request = require('request');
request('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,DASH&tsyms=BTC', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
    //console.log(response);
  }
});