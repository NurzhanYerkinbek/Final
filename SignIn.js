function checkForm(form)
  {
    if(form.email.value == "") {
      alert("Error: Email address cannot be empty!");
      form.email.focus();
      return false;
    }
 
    re = /^[A-Za-z0-9]{5,15}@gmail\.com|[A-Za-z0-9]{5,15}@mail\.ru|[A-Za-z0-9]{5,15}@yandex\.com|[A-Za-z0-9]{5,15}@yahoo.com$/
    if(!re.test(form.email.value)) {
      alert("Error: Email must be in format example@gmail.com,@mail.ru,@yandex.com,@yahoo.com!");
      form.email.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 8) {
        alert("Error: Password must contain at least 8 characters!");
        form.pwd1.focus();
        return false;
      }

      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password: " + form.pwd1.value);
    return true;
  }
  
  
    var form = document.getElementById("form");

	form.addEventListener('submit',function(e) {
	  e.preventDefault()
	  var email = document.getElementById("EmailForm");
	  var password = document.getElementById("PasswordForm");

      console.log("Input Data: " + EmailForm + " " + PasswordForm);

      fetch('http://my-json-server.typicode.com/NurzhanYerkinbek/Final/user', {
          method: 'POST',
          body: JSON.stringify({
			  Email: EmailForm,
			  Password: PasswordForm
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
        })
    })
    