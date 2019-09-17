function activateGallery() {
	let thumbNails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo > img");

	thumbNails.forEach(function(thumbNail) { 
		thumbNail.addEventListener("click", function() {
			mainImage.setAttribute("src", thumbNail.dataset.largeVersion);
			mainImage.setAttribute("alt", thumbNail.dataset.title);
		});
	});


	// let thumbNails = document.querySelectorAll("#gallery-thumbs > div > img");
 //  let mainImage = document.querySelector("#gallery-photo > img");

 //  thumbNails.forEach(function(thumbNail) {
 //  	thumbNail.addEventListener("click", function() {
 //  		let newImageSource = thumbNail.dataset.largeVersion;
 //  		let newImageAlt = thumbNail.dataset.title;
 //  		mainImage.setAttribute("src", newImageSource);
 //  		mainImage.setAttribute("alt", newImageAlt);
 //  	})
 //  })
}





