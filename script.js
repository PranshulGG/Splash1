
  window.addEventListener('load', function() {
    // After 5 seconds, remove the splash screen and redirect to a link
    setTimeout(function() {
      var splashScreen = document.querySelector('.splash-screen');
      splashScreen.parentNode.removeChild(splashScreen);
      window.location.href = "https://pranshulgg.github.io/splash2f/"; // Replace with your desired link
    }, 8200); // Change the timeout value (in milliseconds) to your desired duration
  });

