function createFeedBack(votes, title, description, category, comments) {
	const divElem = document.createElement("div");
	const divElemVote = document.createElement("div");
	const svgElem = document.createElement("svg");
	const pathElem = document.createElement("path");
	const spanElem = document.createElement("span");
	const divElemText = document.createElement("div");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");
	const divElemChip = document.createElement("div");
	const divElemComments = document.createElement("div");
	const svgElem2 = document.createElement("svg");
	const pathElem2 = document.createElement("path");
	const spanElem2 = document.createElement("span");

	divElem.classList.add("feedback-item");
	divElemVote.classList.add("feedback-item-vote");
	spanElem.classList.add("text-regular-3");
	divElemText.classList.add("feedback-item-text");
	h3.classList.add("heading-3");
	divElemChip.classList.add("feedback-chip", "text-regular-3");
	divElemComments.classList.add("feedback-item-comments");
	svgElem2.classList.add("grey-lighten-1-text");
	spanElem2.classList.add("bold");

	svgElem.setAttribute("viewBox", "0 0 24 24");
	svgElem2.setAttribute("viexBox", "0 0 24 24");

	spanElem.textContent = votes;
	h3.textContent = title;
	p.textContent = description;
	divElemChip.textContent = category;
	spanElem2.textContent = comments;

	divElem.appendChild(divElemVote);
	divElem.appendChild(divElemText);
	divElem.appendChild(divElemComments);
	divElemVote.appendChild(svgElem);
	divElemVote.appendChild(pathElem);
	divElemVote.appendChild(spanElem);
	divElemText.appendChild(h3);
	divElemText.appendChild(p);
	divElemText.appendChild(divElemChip);
	divElemComments.appendChild(svgElem2);
	divElemComments.appendChild(pathElem2);
	divElemComments.appendChild(spanElem2);
	svgElem.appendChild(pathElem);
	svgElem2.appendChild(pathElem2);

	return divElem;
}

const section = document.querySelector(".feedback-wrapper");

document.addEventListener("DOMContentLoaded", async () => {
	const reponse = await fetch("http://51.38.232.174:3002/v1/feedbacks");
	const FeedBacks = await reponse.json();
	console.log(FeedBacks);

	for (let i = 0; i < FeedBacks.length; i++) {
		const feedbackElem = createFeedBack(FeedBacks.votes, FeedBacks.title, FeedBacks.description, FeedBacks.category, FeedBacks.comments);

		section.appendChild(feedbackElem);
	}
});

// votes, title, description, category, comments