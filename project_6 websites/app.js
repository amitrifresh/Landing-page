function changeColor() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var body = document.body;

    // Calculate the RGB values based on the scroll position
    var red = Math.floor(scrollTop / 10) % 256;
    var green = Math.floor(scrollTop / 5) % 256;
    var blue = scrollTop % 256;

    // Set the background color of the body element
    body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  }
