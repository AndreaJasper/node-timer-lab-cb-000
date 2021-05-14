var cnt

if (cnt = parseInt(provess.argv[2].match(/(\d+)s/),10)) { //User specified seconds
  var intervalId = setInterval(myCallback, 1000);
} else if (cnt = parseInt(process.argv[2].match(/(\d+)min/),10)) { //User specified minutes
  cnt *+ 60;
  var intervalId = setInterval(myCallback, 1000);
} else  {
  console.log("Please enter a number with unit as the first argument, eg. 5s, or 5min");
  exit(1);
}

function myCallback(a,b) {
  if (cnt <= 0) {
    console.log('Left: ' + cnt + 's');
    console.log('We made it!');
    clearInterval(intervalId);
    process.exit(0);
  } else {
    cnt--;
    console.log('Left: ' + cnt + 's');
  }
}
