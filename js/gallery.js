function activateGallery() {
	let thumbNails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo > img");

	thumbNails.forEach(function(thumbNail) { 
		// Preload large images
		let newImageSrc = thumbNail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbNail.addEventListener("click", function() {
			// Set the clicked image as the display image
			mainImage.setAttribute("src", largeVersion.src);
			mainImage.setAttribute("alt", thumbNail.dataset.title);
			
			// Change which image is current
			document.querySelector(".current").classList.remove("current");
			thumbNail.parentNode.classList.add("current");

			// Update image info
			let galleryInfo = document.querySelector("#gallery-info");
			let title       = galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");

			title.innerHTML = thumbNail.dataset.title;
			description.innerHTML = thumbNail.dataset.description;

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





