var numLetters = function(letter) {
return new function('times',
  "if (times < 0) return ''; \
  var result = '' \
  times = Math.round(times); \
  while (times--) {result += '" + letter + "';} \
  return result;"
  );
