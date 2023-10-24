
const displayForm = () =>{
    const firstName=document.getElementById("txt-name").value;
    const email=document.getElementById("txt-em").value;
    const phoneNumber=document.getElementById("txt-pn").value;
    const subjectMatter=document.getElementById("txt-sm").value;
    const messageB=document.getElementById("txt-message").value;
    const messageP=document.getElementById("messageP");
    messageP.innerHTML = "Your contact form=\n" 
                        + "Name: " +firstName + 
                        "Email : "+email  + "Phone Number: " +phoneNumber +"Reason for Contacting Us: " +subjectMatter+ "Your Message: " +messageB;
}

window.onload = () =>{
    document.getElementById("submit").onclick=displayForm;
}