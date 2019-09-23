//the interview
function log(x) {
  setTimeout(() => console.log(x), 1000);
}

for (var i = 0; i < 3; i++) {
  log(i);
}
