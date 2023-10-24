//Carolina Turner CSCE 242
const showEmailResult = async (e) => {
  e.preventDefault();
  document.getElementById("success").classList.remove("hidden");
  const result = document.getElementById("success");
  let response = await getEmailResult();
  if (response.status == 200) {
    result.innerHTML = "Form succesfully submitted";
  } else {
    result.innerHTML = "Sorry, your email was not sent.";
  }
};


const getEmailResult = async (e) => {
  const form = document.getElementById("contact-me");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  const result = document.getElementById("success");
  result.innerHTML = "Please wait...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    return response;
  } catch (error) {
    console.log(error);
    document.getElementById("success").innerHTML =
      "Sorry your email couldn't be sent";
  }
};

document.getElementById("contact-me").onsubmit = showEmailResult;