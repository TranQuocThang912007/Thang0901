const buttons = document.querySelectorAll("#button");
for (const button of buttons) {
  button.addEventListener("click", function () {
    alert("Success");
  });
}
