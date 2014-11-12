var b = new Buffer([0x48, 0x33, 0x35]);
var sub = b.slice(1);
sub[0] = 0x66;
console.log(b);