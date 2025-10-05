const interleave = (a, b) => {
  const n = a.length;
  const out = new Array(n * 2);
  for (let i = 0; i < n; i++) {
    const j = i * 2;
    out[j] = a[i];
    out[j + 1] = b[i];
  }
  return out;
};

console.log(interleave([1, 3, 5], [2, 4, 6]));
