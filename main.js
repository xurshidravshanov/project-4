function myFunction() {
  const icon = document.querySelector(".icon-mobile");
  const headMobile = document.querySelector(".head-mobile");
  const close = document.querySelector(".span-close");
  const darck = document.querySelector(".darck");
  icon.addEventListener("click", () => {
    headMobile.style.left = "0";
  });
  close.addEventListener("click", () => {
    headMobile.style.left = "-120%";
  });
}
myFunction();
