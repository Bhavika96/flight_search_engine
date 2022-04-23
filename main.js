function rangeSlide(value) {
    document.getElementById('amount').innerHTML = value;
}

function returntrip() {
    if (document.getElementById('return').checked) {
        document.getElementById('roundtrip').style.display = 'block';

    } else {
        document.getElementById('roundtrip').style.display = 'none';
    }

    // return check();
}

function validateform() {
        var flying_from = document.forms["travel_form"]["flying_from"];
        var flying_to = document.forms["travel_form"]["flying_to"];
        var ondate = document.forms["travel_form"]["ondate"];
        var returndate = document.forms["travel_form"]["returndate"];
        var passengers = document.forms["travel_form"]["passengers"];
        console.log("Form Validation");
  
        if (flying_from.value == "") {
            window.alert("Please enter your origin city (Flying from).");
            flying_from.focus();
            return false;
        }
  
        if (flying_to.value == "") {
            window.alert(
              "Please enter your destination city (Flying to).");
            flying_to.focus();
            return false;
        }
  
        if (ondate.value == "") {
            window.alert(
              "Please enter a valid departure date.");
            ondate.focus();
            return false;
        }

        if (document.getElementById("roundtrip").style.display != "none" && returndate.value==""){
           window.alert(
                        "Please enter a valid return date.");
                      returndate.focus();
           return false;
        }
          
        // if (returndate.value == "") {
        //     window.alert("Please enter your return date");
        //     returndate.focus();
        //     return false;
        // }
  
        if (passengers.selectedIndex < 1) {
            alert("Please select a valid number of passengers.");
            passengers.focus();
            return false;
        }
  
        return check();
    }


    function check() {
        document.getElementById("departure_city").innerHTML = document.travel_form.flying_from.value;
        document.getElementById("return_city").innerHTML = document.travel_form.flying_to.value;
        document.getElementById("departure_date").innerHTML = document.travel_form.ondate.value;
        document.getElementById("return_date").innerHTML = document.travel_form.returndate.value;
        document.getElementById("return_place").innerHTML = document.travel_form.flying_to.value;
        document.getElementById("departure_place").innerHTML = document.travel_form.flying_from.value;
        document.getElementById("pass").innerHTML = document.travel_form.passengers.value;
        return true;
    }


    function currdate() {
        var today = new Date().toISOString().split('T')[0];
        console.log(today);
        document.getElementsByName("ondate")[0].setAttribute('min', today);
        document.getElementsByName("returndate")[0].setAttribute('min', today);
    }