function toggleMenu() {
  var mobileMenu = document.getElementById('mobile');
  mobileMenu.style.transform = mobileMenu.style.transform === 'translateX(0)' ? 'translateX(100%)' : 'translateX(0)';
}
function closeMenu(){
  var mobileMenu = document.getElementById('mobile');
  mobileMenu.style.transform = 'translateX(100%)';
}
function emailVerify() {
  let input = document.getElementsByClassName('input-email')[0].value;
  let resultElement = document.getElementById('result');

  // Define and initialize the regex variable
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(input)) {
    resultElement.innerHTML = 'Email address valid. Check your email for the newsletter.';
    resultElement.style.color='green';
  } else {
    resultElement.innerHTML = 'Email address form invalid. Try again.';
    resultElement.style.color='red';
  }
}