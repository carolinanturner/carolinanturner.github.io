const showUofSC = () => {
    document.getElementById("UofSC").classList.remove("hide");
};
const hideUofSC = () => {
    document.getElementById("UofSC").classList.add("hide");
};
const buttonAnim = () =>{
    document.getElementById("square").classList.add("move-square") ;
 };
 const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
};
const displayComment = () => {
    const comment = document.getElementById("txt-comment").value;
    console.log("Your feedback: " + comment+ "!");
};
const displayRating = () => {
    const rating = document.getElementById("txt-rating").value;
    console.log("Rating: " + rating + ".");
};
const displayUsername = () => {
    const username = document.getElementById("txt-username").value;
    console.log("Username: " + username + "!");
};
const displayReviews = () => {
    const firstName = document.getElementById("txt-first-name").value;
    const comment = document.getElementById("txt-comment").value;
    const rating = document.getElementById("txt-rating").value;
    const username = document.getElementById("txt-username").value;
    const reviews = document.getElementById("reviews").value;
    reviews.innerHTML="First Name: " + firstName + "Comment: " +comment+ "Rating: " +rating+ "Username: " + username;
};
window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-show").onclick = showUofSC;
    document.getElementById("button-hide").onclick = hideUofSC;
    document.getElementById("button-anim").onclick=buttonAnim;
    document.getElementById("button-show-fn").onclick= displayName;
    document.getElementById("button-show-cmt").onclick= displayComment;
    document.getElementById("button-show-rtg").onclick= displayRating;
    document.getElementById("button-show-un").onclick= displayUsername;
    document.getElementById("button-show-reviews").onclick= displayReviews;
};
 