document
  .getElementById("grizzlySubscription")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const studentEmail = document.getElementById("studentEmail");

    if (studentEmail.checkValidity()) {
      const emailValue = studentEmail.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        studentEmail.setCustomValidity("Please enter a valid email.");
        studentEmail.reportValidity();
      } else {
        studentEmail.setCustomValidity("");
        console.log("POST REQUEST HERE");
      }
    } else {
      studentEmail.setCustomValidity("Please enter a valid email.");
      studentEmail.reportValidity();
    }
  });

document
  .getElementById("grizzlyQuestionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName");
    const studentEmailQuestion = document.getElementById(
      "studentEmailQuestion"
    );
    const studentMessage = document.getElementById("studentMessage");

    if (
      studentName.checkValidity() &&
      studentEmailQuestion.checkValidity() &&
      studentMessage.checkValidity()
    ) {
      const emailValue = studentEmailQuestion.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        studentEmailQuestion.setCustomValidity("Please enter a valid email.");
        studentEmailQuestion.reportValidity();
      } else {
        studentEmailQuestion.setCustomValidity("");
        console.log("POST REQUEST HERE");
      }
    }
  });
