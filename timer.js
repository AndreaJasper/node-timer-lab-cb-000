var cnt

if (cnt = parseInt(provess.argv[2].match(/(\d+)s/),10)) { //User specified seconds
  var intervalId = setInterval(myCallback, 1000);
} else if (cnt = parseInt(process.argv[2].match))