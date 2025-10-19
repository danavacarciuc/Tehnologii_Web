Number.prototype.times = function (callback) {
  const n = Math.floor(this);
  for (let i = 0; i < n; i++) {
    callback(i);
  }
};

(3).times((i) => {
  console.log(`Executie #${i + 1}`);
});
