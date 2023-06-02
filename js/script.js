function remove1() {
    let img = document.getElementById("facebook");
    
    let originalSrc = img.src;
    let newSrc = "style/images/facebook2.png";
    
    img.addEventListener("mouseover", function() {
      img.src = newSrc;
    });
    
    img.addEventListener("mouseout", function() {
      img.src = originalSrc;
    });
  }
  function remove2() {
    let img = document.getElementById("instagram");
    let originalSrc = img.src;
    let newSrc = "style/images/instagram2.png";
    img.addEventListener("mouseover", function() {
      img.src = newSrc;
    });
    
    img.addEventListener("mouseout", function() {
      img.src = originalSrc;
    });
  }
  function remove3() {
    let img = document.getElementById("tiktok");
    
    // Store the original source and the new source
    let originalSrc = img.src;
    let newSrc = "style/images/tiktok2.png";
    
    // Event handler for mouseover event
    img.addEventListener("mouseover", function() {
      img.src = newSrc;
    });
    
    // Event handler for mouseout event
    img.addEventListener("mouseout", function() {
      img.src = originalSrc;
    });
  }

function toggleMenu() {
  var mobileMenu = document.getElementById('mobile');
  mobileMenu.style.transform = mobileMenu.style.transform === 'translateX(0)' ? 'translateX(100%)' : 'translateX(0)';
}
function closeMenu(){
  var mobileMenu = document.getElementById('mobile');
  mobileMenu.style.transform = 'translateX(100%)';
}