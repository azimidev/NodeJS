function grab (flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user     = grab('--user');

if (!user || !greeting) {
	console.log("No user No greeting!");
} else{
	console.log(`Khosh Omadi ${user}, ${greeting}`);
};