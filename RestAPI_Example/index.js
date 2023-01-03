const http = require('http');
const https = require('https');
const qs = require('querystring')
var fs = require('fs');
const search = require('./search')

let url1 = "https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json";
let url2 = "https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json";

//// Uncomment for testing via the Command Prompt console
//let testStateName = "C";
//let testClinicName = "S";
//let testDateFrom = new Date(1776,1,1,9,0,0,0);
//let testDateTo = new Date(1776,1,1,5,0,0,0);

let result1 = null;
let result2 = null;

const server = http.createServer(function(request, response)
{
	console.log('Server Start')

	console.dir(request.param)
	
	console.log(request.method)
	
	if (request.method == 'POST')
	{
		console.log('POST')
		var body = ''
		request.on('data', function(data) {
			console.log('POST request on data: complete')
		  body += data
		})

		request.on('end', function() {
			console.log('POST request on end: complete')
			const post = qs.parse(body)
			const name = post.name
			console.log('post.name = ' + post.name + " and name = " + name)
			const state = post.state
			console.log('post.state = ' + post.state + " and state = " + state)
			const from = post.from
			console.log('post.from = ' + post.from + " and from = " + from)
			const to = post.to
			console.log('post.to = ' + post.to + " and name = " + to)
			
			const promise = new Promise((resolve, reject) => {
				console.log("Promise: First");
				https.get(url1,(res) => {
					let body = "";

					res.on("data", (chunk) => {
						body += chunk;
					});

					res.on("end", () => {
						try {
							console.log('res.on end completed')
							let json = JSON.parse(body);
							
							
							console.log(json)
							
							console.log("Start search");
							
							let searchItems = [];
							
							let searchParameters = ["name", "clinicName", "stateName", "stateCode", "availability", "opening"];
							
							let searchName = "";
							let searchState = "";
							let searchTimeFrom = null;
							let searchTimeTo = null;
							let searchDateRange = null;
							
							
							try 
							{
								if(name !== 'undefined')
								{
									searchName = name;
								}
								else if(testClinicName !== 'undefined')
								{
									searchName = testClinicName;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(state !== 'undefined')
								{
									searchState = state;
								}
								else if(testStateName !== 'undefined')
								{
									searchState = testStateName;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(from !== 'undefined' && from !== null && from !== "")
								{
									searchTimeFrom = from;
								}
								else if(testDateFrom !== 'undefined')
								{
									searchTimeFrom = testDateFrom;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(to !== 'undefined' && to !== null && to !== "")
								{
									searchTimeTo = to;
								}
								else if(testDateTo !== 'undefined')
								{
									searchTimeTo = testDateTo;
								}
							}
							catch(err) {
							}
							
							searchDateRange = [searchTimeFrom, searchTimeTo];
							
							let searchTerms = [searchName, searchState, searchDateRange];
							
							console.log("searchTerms = " + searchTerms)
							
							result1 = search.executeSearch(json, searchItems, searchParameters, searchTerms);
							
							console.log(result1)
							
							resolve(res);

						} catch (error) {
							console.error(error.message);
						};
					});

				}).on("error", (error) => {
					console.error(error.message);
				});
			});

			promise.then((res) => {
				console.log("Promise: Second");
				https.get(url2,(res) => {
					let body = "";

					res.on("data", (chunk) => {
						body += chunk;
					});

					res.on("end", () => {
						try {
							console.log('res.on end completed')
							let json = JSON.parse(body);							
							
							console.log(json)
							
							console.log("Start search");
							
							let searchItems = [];
							
							let searchParameters = ["name", "clinicName", "stateName", "stateCode", "availability", "opening"];
							
							let searchName = "";
							let searchState = "";
							let searchTimeFrom = null;
							let searchTimeTo = null;
							let searchDateRange = null;							
							
							try 
							{
								if(name !== 'undefined')
								{
									searchName = name;
								}
								else if(testClinicName !== 'undefined')
								{
									searchName = testClinicName;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(state !== 'undefined')
								{
									searchState = state;
								}
								else if(testStateName !== 'undefined')
								{
									searchState = testStateName;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(from !== 'undefined' && from !== null && from !== "")
								{
									searchTimeFrom = from;
								}
								else if(testDateFrom !== 'undefined')
								{
									searchTimeFrom = testDateFrom;
								}
							}
							catch(err) {
							}
							
							try 
							{
								if(to !== 'undefined' && to !== null && to !== "")
								{
									searchTimeTo = to;
								}
								else if(testDateTo !== 'undefined')
								{
									searchTimeTo = testDateTo;
								}
							}
							catch(err) {
							}
							
							searchDateRange = [searchTimeFrom, searchTimeTo];
							
							let searchTerms = [searchName, searchState, searchDateRange];
							
							console.log("searchTerms = " + searchTerms)
							
							result2 = search.executeSearch(json, searchItems, searchParameters, searchTerms);
							
							console.log("Final Result")
							console.log(result1)
							console.log(result2)
							response.writeHead(200, {'Content-Type': 'text/html'})
							response.end('Result: ' + JSON.stringify(result1) + JSON.stringify(result2))

						} catch (error) {
							console.error(error.message);
						};
					});

				}).on("error", (error) => {
					console.error(error.message);
				});
			}, (err) => {
				console.log(err);
			});
			promise.catch((err) => {
				console.log(err);
			});
			
		})
	}
	else
	{
		fs.readFile('scratchpayClientSearch.html', function(err, data)
		{
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data);
			response.end();
		});
	}
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
