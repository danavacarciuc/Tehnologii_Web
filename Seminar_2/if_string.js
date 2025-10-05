function countDiff(a, b) {
  if (a.length !== b.length) return -1;
  let cnt = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) cnt++;
  return cnt;
}

console.log(countDiff("abcd", "abXf"));
