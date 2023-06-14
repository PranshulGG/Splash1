
  window.addEventListener('load', function() {
    // After 5 seconds, remove the splash screen and redirect to a link
    setTimeout(function() {
      var splashScreen = document.querySelector('.splash-screen');
      splashScreen.parentNode.removeChild(splashScreen);
      window.location.href = "https://example.com"; // Replace with your desired link
    }, 15000); // Change the timeout value (in milliseconds) to your desired duration
  });

