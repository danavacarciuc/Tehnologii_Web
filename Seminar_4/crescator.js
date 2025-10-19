class EvenSequence {
  constructor(start) {
    this.current = start % 2 === 0 ? start : start + 1;
  }

  next() {
    const value = this.current;
    this.current += 2;
    return value;
  }
}

const seq = new EvenSequence(3);

for (let i = 0; i < 10; i++) {
  console.log(seq.next());
}
