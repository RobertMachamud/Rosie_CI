function sendMail(contactForm) {
    emailjs.send("yahoo","template_6u0j7po",{
    "from_name": contactForm.name,
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value,
  })
  .then (
      function(response) {
          console.log("SUCCESS", response);
      },
      function(error) {
          console.log("FAILED", error);
      }
  );
  return false;
}