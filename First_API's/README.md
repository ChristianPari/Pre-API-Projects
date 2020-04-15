This is a folder containing my progress and development as I learn about API's.

MAJOR STEPS WHEN USING AN API:
1) CREATE THE XHR OBJECT
* this consists of creating a variable (I usually use `xhr`) and then assigning to it a `new` instance of XMLHttpRequest(): let xhr = new XMLHttpRequest();
2) OPEN THE CHANNEL FOR THE REQUEST
* this is when you create the open() function call, params used are REQUEST METHOD, ENDPOINT, ASYNC true or false.
* I usualy create varaibles to store this info first and then pass them in as params: <br> let reqMeth = 'GET', ep = 'apiURL.here', async = true; <br> xhr.open(reqMeth, ep, async);
3) A FUNCTION RUNS WHEN THE RESPONSE HAS BEEN RECIEVED FROM THE SERVER
* create the onload() function
4) FINALIZES THE 'OPEN' METHOD AND SENDS DATA ALONG WITH THE REQUEST WHEN NEEDED
* never forget to create the send() function