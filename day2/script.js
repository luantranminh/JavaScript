function everySecond () {
	const secondHand = document.querySelector('.hand.second-hand');
	const minHand = document.querySelector('.hand.min-hand');
	const hourHand = document.querySelector('.hand.hour-hand');

	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegrees = seconds*6 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = now.getMinutes();
	const minDegrees = mins*6 + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = hours*30 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	
}

setInterval(everySecond, 1000);

