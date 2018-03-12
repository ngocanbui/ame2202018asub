var allImages = [
  'http://anneten.nl/ivise/eyJwaXBlbGluZSI6W1siYXV0b19vcmllbnQiLHt9XSxbInNyZ2IiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMTAyNHgifV1dLCJzcmNfdXJsIjoibWFwcGVwaWM6Ly9zaXRlcy9hbm5ldGVuL3VwbG9hZHMvZWIxMi85ZTZlLzc3OWYvOTkwZC8zZGFkL2RlMzAvODQyMC8yNTIwLzgwMGYvOWQ1ZC5qcGcifQ/33dd0a87fa00eb7ede4514be8d15d01e779ba9d9294f7d735eb9bdd3499db2c5',
  'http://anneten.nl/ivise/eyJwaXBlbGluZSI6W1siYXV0b19vcmllbnQiLHt9XSxbInNyZ2IiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMTAyNHgifV1dLCJzcmNfdXJsIjoibWFwcGVwaWM6Ly9zaXRlcy9hbm5ldGVuL3VwbG9hZHMvYjczYS82ZjVlLzZkYmMvZDhjYy80MWRjLzc1ZTgvYTY3MS9jZThmLzQ0N2IvZjdiNi5qcGcifQ/d279cd6e1c50e190d881cd241cc231783c29d6c0810a4352bd02d6ed75337199',
  'http://anneten.nl/ivise/eyJwaXBlbGluZSI6W1siYXV0b19vcmllbnQiLHt9XSxbInNyZ2IiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMTAyNHgifV1dLCJzcmNfdXJsIjoibWFwcGVwaWM6Ly9zaXRlcy9hbm5ldGVuL3VwbG9hZHMvOGEwMS9iMzVlL2UzZjEvODgzOS83NDc1L2Y3Y2MvMTUxNi80OTIwL2YyMjgvYmY1OC5qcGcifQ/30dd3ed3073340c5e0d8b5fb9d36a0ff67cacc4cde4123bf3771549d8e152adb',
  'http://anneten.nl/ivise/eyJwaXBlbGluZSI6W1siYXV0b19vcmllbnQiLHt9XSxbInNyZ2IiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMTAyNHgifV1dLCJzcmNfdXJsIjoibWFwcGVwaWM6Ly9zaXRlcy9hbm5ldGVuL3VwbG9hZHMvMzlmOS84Y2U1L2RiOGQvYmIwYS9jMGYxLzBkY2UvMjc2ZC9hMTRmLzUxNzEvYTkxNS5qcGcifQ/39182837d0b17a8823e2dbebe471f23fce982620bb719bf6848b1df30526369b'
];

var currentSlide = 0;

var start = function()
{
  var markup = "";
  for(var i = 0; i < allImages.length; i++){
    var imgURL = allImages[i];
    markup = markup + "<div class='slide' style='background-image:url(" + imgURL + ")'></div>";
  }

  $("#ssContainer").html(markup);

  var markup1 = "";
  for(var i = 0; i < allImages.length; i++){
    markup1 = markup1 + '<button onclick="goToSlide(' + (i + 1) + ',1000)">' + (i + 1) + '</button>';
  }
  $("#numContainer").html(markup1);
  


  goToSlide(1, 0);
}

var ani = "asb";

var goToSlide = function(n, d)
{
  d = d || 0;
  if (ani == "fade") {
    $("#ssContainer .slide").stop().fadeOut(d);
    $("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(d);


  }
  else {
    if(n > currentSlide) {
      $("#ssContainer .slide").stop().animate({"margin-left": "-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + currentSlide + ")").stop().animate({"margin-left": "-100%"}, d);
      $("#ssContainer .slide:nth-of-type(" + n + ")").stop().css({"margin-left": "100%"}).animate({"margin-left": "0%"}, d);
    }
    else {
      
    }
  }
  
  
  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n + ")").addClass("active");

  
  
  //$("#ssContainer .slide").stop().fadeIn(d);
  //$("#ssContainer .slide:nth-of-type(" + n + ")").stop().animate({"margin-left": "-100%"}, 1500);
  //$("#ssContainer .slide").stop().fadeOut(d);

  
  /*
  $("#ssContainer .slide").stop().animate(d);
  $("#ssContainer .slide:nth-of-type(" + n + ")").stop().animate({"margin-left": "-100%"}, 1000);
  $("#ssContainer .slide:nth-of-type(" + n + ")").stop().fadeIn(d);

  $("#numContainer button").removeClass("active");
  $("#numContainer button:nth-of-type(" + n + ")").addClass("active");
*/
  currentSlide = n;
}


var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  } 
  goToSlide(n, 1000);
}

var goPrev = function()
{
  var n = currentSlide - 1;
  if (n < 1){
    n = allImages.length;
  } 
  goToSlide(n, 1000);
}