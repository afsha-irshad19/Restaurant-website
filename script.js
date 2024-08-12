let reviewCard=document.querySelectorAll(".review-card");
let count=0;
let foodCard=document.querySelectorAll(".food-card");
let submitReview=document.querySelector(".submit");

reviewCard.forEach(function(card,index){
    card.style.left=`${index*100}%`
})

function myFun(){
    reviewCard.forEach(function(currCard){
        currCard.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
count++;
if(count==reviewCard.length){
    count=0;
}
myFun();
},3000)

foodCard.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);
        let div=document.createElement("div");
        div.classList.add("cardDetails");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${cards.firstElementChild.src} alt="">
        <p> East best and Eat Delicious</p>
        <p>Eat Best and delicious food at very low prizes</p>`
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
    })
})
})
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("feed-review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("feed-reviews");

stars.forEach((star) => {
	star.addEventListener("click", () => {
		const value = parseInt(star.getAttribute("data-value"));
		rating.innerText = value;

		// Remove all existing classes from stars
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five"));

		// Add the appropriate class to 
		// each star based on the selected star's value
		stars.forEach((s, index) => {
			if (index < value) {
				s.classList.add(getStarColorClass(value));
			}
		});

		// Remove "selected" class from all stars
		stars.forEach((s) => s.classList.remove("selected"));
		// Add "selected" class to the clicked star
		star.classList.add("selected");
	});
});

submitBtn.addEventListener("click", () => {
	const review = reviewText.value;
	const userRating = parseInt(rating.innerText);

	if (!userRating || !review) {
		alert(
"Please select a rating and provide a review before submitting."
			);
		return;
	}

	if (userRating > 0) {
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = 
`<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
		reviewsContainer.appendChild(reviewElement);

		// Reset styles after submitting
		reviewText.value = "";
		rating.innerText = "0";
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five", 
												"selected"));
	}
});

function getStarColorClass(value) {
	switch (value) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		default:
			return "";
	}
}
