function addHoverAnimation(element) {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale: 1.2, duration: 0.2, ease: "power1.inOut" });
  });
  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.2, ease: "power1.inOut" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //signup animation
  const signLabel = document.getElementById("sign-logo");
  if (signLabel) {
    addHoverAnimation(signLabel);
  }
  const signInputs = document.querySelectorAll(".sign-input");
  signInputs.forEach((input) => addHoverAnimation(input));

  const signupButton = document.getElementById("signup-btn");
  if (signupButton) {
    addHoverAnimation(signupButton);
  }

  //login animation
  const loginLabel = document.getElementById("login-logo");
  if (loginLabel) {
    addHoverAnimation(loginLabel);
  }
  const loginInputs = document.querySelectorAll(".login-input");
  loginInputs.forEach((input) => addHoverAnimation(input));

  const loginButton = document.getElementById("login-btn");
  if (loginButton) {
    addHoverAnimation(loginButton);
  }
});
