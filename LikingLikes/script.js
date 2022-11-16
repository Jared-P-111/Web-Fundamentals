const currLikes = [0, 0, 0];

const neil_m = document.getElementById('neil-m');
const nichole_k = document.getElementById('nichole-k');
const jim_r = document.getElementById('jim-r');

const addLike = (element, num) => {
  currLikes[num - 1] += 1;

  neil_m.innerText = `${currLikes[0]} like(s)`;
  nichole_k.innerText = `${currLikes[1]} like(s)`;
  jim_r.innerText = `${currLikes[2]} like(s)`;
};
