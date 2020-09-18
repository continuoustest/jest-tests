function isUniversalResponse(a, b) {
  const res = a + b;
  if (res !== 42) {
  	return 1;
  }
  return 0;
}
module.exports = isUniversalResponse;
