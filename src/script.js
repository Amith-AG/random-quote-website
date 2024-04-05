// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.\

console.log("hello");
var currentQuote = "",
  currentAuthor = "";
var colors = [
  "#2ecc71", // Emerald
  "#3498db", // Peter River
  "#34495e", // Wet Asphalt
  "#e67e22", // Carrot
  "#e74c3c", // Alizarin
  "#9b59b6", // Amethyst
  "#FD6A6A", // Pastel Red
  "#8e44ad", // Wisteria
  "#2c3e50", // Midnight Blue
  "#16a085", // Turquoise
  "#2980b9", // Belize Hole
  "#27ae60", // Nephritis
];

function getQuote() {
  $.ajax({
    url: "https://api.quotable.io/random",
    method: "GET",
    success: function (data) {
      console.log(data);
      currentQuote = data.content;
      currentAuthor = data.author;
      $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
          encodeURIComponent('"' + currentQuote + '"  -' + currentAuthor)
      );
      $("#text").html(data.content);
      $("#author").html("- " + data.author);
      var color = Math.floor(Math.random() * colors.length);
      $("body").animate(
        {
          backgroundColor: colors[color],
        },
        1000
      );
      $(".color").animate(
        {
          backgroundColor: colors[color],
        },
        1000
      );
      $("#quote-icon").animate(
        {
          color: colors[color],
        },
        1000
      );
      $("#quote-icon-right").animate(
        {
          color: colors[color],
        },
        1000
      );
    },
    error: function (error) {
      console.log(error);
    },
  });
}
$(document).ready(function () {
  getQuote();
  $("#new-quote").on("click", getQuote);
});
