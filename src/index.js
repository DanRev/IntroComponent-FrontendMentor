var campos = (element) => {
  return document.getElementById(element);
};
var campo = ["FirstName", "LastName", "Email", "Password"];
var camp = new Array(4);
campo.forEach((value, index) => {
  camp[index] = campos(value);
});
var camposReview = new Array(4);

function checkFields() {
  for (var i = 0; i < camp.length; i++) {
    camp[i].value === "" ? (camposReview[i] = true) : (camposReview[i] = false);
  }
  console.log(camp, camposReview);
  camposReview.forEach((value, index) => {
    if (value) {
      camp[index].className = "input";
    }
  });
}
