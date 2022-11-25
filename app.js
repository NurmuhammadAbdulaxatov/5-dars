let input = +prompt("1-sonni krgizin!");

let nothing = 0;

for (let i = 0; i <= input; i++) {
  nothing = nothing + i;
}

alert(nothing);

let input2 = +prompt("2-sonni kiriting");

for (i = 1; i <= input2; i++) {
  if (i % 2) {
    document.write(i + " ");
  } else {
    continue;
  }
}
