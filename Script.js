$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

function validationForm() {
  var x = document.forms["form"]["usname"].value;
  var y = document.forms["form"]["pwd"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if(y == ""){
	  alert("Enter PASSWORD");
	  return false;
  }
}


function validateForm() {
  var x = document.forms["form"]["usname"].value;
  var z = document.forms["form"]["email"].value;
  var y = document.forms["form"]["pwd"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if(z == ""){
	alert("Enter EMAIL");
	return false;
  }
  if(y == ""){
	  alert("Enter PASSWORD");
	  return false;
  }
}

