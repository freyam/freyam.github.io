var key = 0;
function CycleImages(img) {
  key = (key + 1) % 5;
  var next_img = "../img/doggo" + key + ".jpg";
  console.log("Cuurent -> " + img)
  console.log("Next -> " + next_img)
  document.getElementById("carousel").src = next_img;
}