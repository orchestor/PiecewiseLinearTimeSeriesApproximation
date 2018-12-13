var express = require('express')
var app = express(),
		sys = require('sys'),
		spawn = require("child_process").spawn;
var moment = require('moment-timezone');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		  extended: true
}));

app.listen(3333, function() {
	console.log('Server is running on port 3333!')
})


app.get('/api/seg', function(req, res) {
  var segments = req.query.num;

  res.send("segments number is " + segments);
});


app.post('/api/:view', function(req, res) {
  var checkin_pst = req.query.checkin;
	var checkout_pst = req.query.checkout;
	var segments = req.query.segments;

	var checkin_utc = moment.tz(checkin_pst, "US/Pacific");
	var checkin = checkin_utc.utc().format()

	var checkout_utc = moment.tz(checkout_pst, "US/Pacific");
	var checkout = checkin_utc.utc().format()

  res.send("checkin time is " + checkin + '\n' + " checkout time is " + checkout + "(UTC)");
// need write a function to query the data and turn into a csv file.

	const { exec } = require('child_process');
	exec('influx -database 'mmwave_radar_db' -host 'localhost' -execute 'SELECT /tid([0-9])+y/ FROM "mmwave_radar_db"."autogen"."radar_sensor" WHERE time > '\''2018-10-18T17:54:52Z'\'' AND time < '\''2018-10-18T18:00:35.000000000Z'\'' ' -format 'csv' > temp.csv')


});



app.post('/api/seg', segment);


function segment(req, res) {
	var process = spawn('python', ["segmentandplot_tv.py",
											"tv.txt",
											parseInt(req.query.num)
										])
	process.stdout.on('data', function(data){
		console.log("Start to output screen: ")
	  console.log(data.toString().split(/\r?\n/))
		res.send(data.toString().split(/\r?\n/).slice(-3, -2))
	})
}

function computeTime(req,res){

}
