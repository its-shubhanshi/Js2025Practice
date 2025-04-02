"use strict";

for (let i = 1; i <= 20; i++) {
  document.write("<br>", i);
  console.log(i);
}

for (let i = 10; i > 0; i = i - 3) {
  document.write("<br>", i);
  console.log(i);
}

console.log("even number");
document.write("<h2>Print all even numbers </h2>");

for (let i = 0; i <= 10; i = i + 2) {
  document.write(`<p>${i}</p>`);
}
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    document.write(`<p>${i}</p>`);
    console.log("even number ", i);
  }
}

/*
        let n= prompt("write your number")
        n=parseInt(n)
        document.write(`<h2>Print the multiplication table for ${n} </h2>`)
        for(let i=n; i<=n*10;i=i+n){
            document.write(`<p>${i}</p>`)
            console.log(i);
        }
        */

document.writeln(`<h2 style="color:orangered;">Nested Loop</h2>`);

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    document.writeln(`<h2 style="color:red;">${j}</h2>`);
    console.log(j);
  }
}
