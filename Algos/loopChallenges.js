const odds = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      continue;
    }
  }
};

// odds()

const checkForDivisor = (num) => {
  for (let i = 100; i !== 0; i--) {
    if (i % num === 0) {
      console.log(i);
      continue;
    }
  }
};

// checkForDivisor(3);
let seq = [4, 2.5, 1, -0.5, -2, -3.5];

const printTheSequence = (seq) => {
  for (let i = 0; i < seq.length; i++) {
    console.log(seq[i]);
  }
};

// printTheSequence(seq);

const findSigma = (num) => {
  let sigma = 0;
  for (let i = 0; i <= num; i++) {
    sigma += i;
  }
  console.log(sigma);
};

// findSigma(100);

const findFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

findFactorial(12);
