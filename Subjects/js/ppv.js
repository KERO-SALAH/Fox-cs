fetch("../maker_adder/DB/posts.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("mas").innerHTML = data;
  });

  fetch("../maker_adder/DB/summary.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("summaries").innerHTML = data;
  });
  fetch("../maker_adder/DB/Lecture.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("lectures").innerHTML = data;
  });
  fetch("../maker_adder/DB/sections.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("sections").innerHTML = data;
  });
  fetch("../maker_adder/DB/important.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("important").innerHTML = data;
  });
  fetch("../maker_adder/DB/rec.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("rec").innerHTML = data;
  });