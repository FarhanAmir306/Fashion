const handleRegister = (event) => {
    event.preventDefault();
  
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
  
    const info = {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      // Add the rest of your properties
    };
  
    if (password === confirm_password) {
      document.getElementById("error").innerText = "";
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        )
      ) {
        fetch("https://fashionstyle-qmo0.onrender.com/accounts/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
  
            if (data.success) {
              document.getElementById("registrationForm").innerHTML="";
            }
          })
          .catch((error) => {
            console.error("Error during registration:", error);
          });
      } else {
        document.getElementById("error").innerText =
          "Password must contain eight characters, at least one letter, one number, and one special character.";
      }
    } else {
      document.getElementById("error").innerText =
        "Password and confirm password do not match";
      alert("Password and confirm password do not match");
    }
  };
  
  const getValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
  };
  


const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
    if ((username, password)) {
      fetch("https://fashionstyle-qmo0.onrender.com/accounts/login/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          if (data.token && data.user_id) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location.href = "index.html";
          }
        });
    }
  };


