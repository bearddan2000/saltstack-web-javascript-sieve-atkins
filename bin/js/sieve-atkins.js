function sieveAtkin(limit) {
  var output = "";

  // 2 and 3 are known to be prime
  if (limit > 2)
    output += 2 + " ";

  if (limit > 3)
    output += 3 + " ";

  // Initialise the sieve array with false values
  var sieve = [];

  for (var i = 0; i < limit; i++)
    sieve.push(false);

  for (var x = 1; x * x < limit; x++) {
    for (var y = 1; y * y < limit; y++) {

      // Main part of Sieve of Atkin
      var n = (4 * x * x) + (y * y);
      if (n <= limit && (n % 12 == 1 || n % 12 == 5))
        sieve[n] = (sieve[n] ^ true);

      n = (3 * x * x) + (y * y);
      if (n <= limit && n % 12 == 7)
        sieve[n] = (sieve[n] ^ true);

      n = (3 * x * x) - (y * y);
      if (x > y && n <= limit && n % 12 == 11)
        sieve[n] = (sieve[n] ^ true);
    }
  }
  // Mark all multiples of squares as
  // non-prime
  for (var r = 5; r * r < limit; r++) {
    if (sieve[r]) {
      for (var i = r * r; i < limit; i += r * r)
        sieve[i] = false;
    }
  }

  output = "[OUTPUT] " + output
  // Print primes using sieve[]
  for (var a = 5; a < limit; a++)
    if (sieve[a])
      output += a + " ";

  return output;
}
