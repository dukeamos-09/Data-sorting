document.getElementById("demo").innerHTML = "Home Page";

function myFunction() {
  let text = document.getElementById("demo2").innerHTML;
  document.getElementById("demo2").innerHTML = text.replace(
    "Click Me Now!",
    "Loading... (Yes, I Have Been Clicked)"
  );
}

const physics_Scores = [
  100, 45, 56, 100, 78, 98, 90, 39, 40, 27, 21, 15, 66, 42, 50, 71, 89,
];
document.getElementById("demo3").innerHTML =
  "Scores in Physics Exams: " + physics_Scores;

function myFunction4() {
  const Randomly = physics_Scores.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("demo4").innerHTML =
    "Sort Randomly (Scores in Physics Exams): " + Randomly;
}

function myFunction5() {
  physics_Scores.sort();
  document.getElementById("demo5").innerHTML =
    "Sort Alphabetically (Scores in Physics Exams): " + physics_Scores;
}

function myFunction6() {
  physics_Scores.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("demo6").innerHTML =
    "Sort Numerically 'Ascending Order' (Scores in Physics Exams): " +
    physics_Scores;
}

function myFunction7() {
  physics_Scores.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("demo7").innerHTML =
    "Sort Numerically 'Descending Order' (Scores in Physics Exams): " +
    physics_Scores;
}

function myFunction8() {
  physics_Scores.sort();
  physics_Scores.reverse();
  document.getElementById("demo8").innerHTML =
    "Sort Reverse Order (Scores in Physics Exams): " + physics_Scores;
}
