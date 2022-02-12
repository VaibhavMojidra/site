function darkMode(isDarkModeOn) {
	let r = document.querySelector(':root');
	if (isDarkModeOn) {
		r.style.setProperty('--nav_bg', '#212121');
		r.style.setProperty('--page_bg', '#272B34');
		r.style.setProperty('--text_color', '#FDFDFD');
		r.style.setProperty('--card_bg', '#333333');
		r.style.setProperty('--button_color', '#f5f5f5');
		r.style.setProperty('--button_text_color', '#333333');
		try {
			document.getElementById("insta").src = "assets/img/socials/dark/instagram.png";
			document.getElementById("facebook").src = "assets/img/socials/dark/facebook.png";
			document.getElementById("twitter").src = "assets/img/socials/dark/twitter.png";
			document.getElementById("linkedin").src = "assets/img/socials/dark/linkedin.png";
			document.getElementById("snapchat").src = "assets/img/socials/dark/snapchat.png";
			document.getElementById("playstore").src = "assets/img/socials/dark/playstore.png";
			document.getElementById("youtube").src = "assets/img/socials/dark/youtube.png";
			document.getElementById("github").src = "assets/img/socials/dark/github.png";
			document.getElementById("mail").src = "assets/img/socials/dark/mail.png";
			document.getElementById("stackoverflow").src = "assets/img/socials/dark/stackoverflow.png";
		} catch (e) { }
	} else {
		r.style.setProperty('--nav_bg', '#4a148c');
		r.style.setProperty('--page_bg', '#FDFDFD');
		r.style.setProperty('--text_color', '#1A1A1A');
		r.style.setProperty('--card_bg', '#f5f5f5');
		r.style.setProperty('--button_color', '#4a148c');
		r.style.setProperty('--button_text_color', '#FDFDFD');
		try {
			document.getElementById("insta").src = "assets/img/socials/light/instagram.png";
			document.getElementById("facebook").src = "assets/img/socials/light/facebook.png";
			document.getElementById("twitter").src = "assets/img/socials/light/twitter.png";
			document.getElementById("linkedin").src = "assets/img/socials/light/linkedin.png";
			document.getElementById("snapchat").src = "assets/img/socials/light/snapchat.png";
			document.getElementById("playstore").src = "assets/img/socials/light/playstore.png";
			document.getElementById("youtube").src = "assets/img/socials/light/youtube.png";
			document.getElementById("github").src = "assets/img/socials/light/github.png";
			document.getElementById("mail").src = "assets/img/socials/light/mail.png";
			document.getElementById("stackoverflow").src = "assets/img/socials/light/stackoverflow.png";
		} catch (e) { }
	}
	calcWidth();
}

function calcWidth() {
	if (window.innerWidth > window.innerHeight) {
		if (window.innerWidth < 1400) {
			document.body.style.zoom = 0.78;
		}
	}
}

function getDarkModeStatus() {
	let status = "OFF";
	if (typeof (Storage) !== "undefined") {
		status = localStorage.getItem("VaibhavMojidraDarkMode") === null ? "OFF" : localStorage.getItem("VaibhavMojidraDarkMode");
	} else {
		status = "OFF";
	}
	return status;
}

function setDarkModeStatus() {
	if (typeof (Storage) !== "undefined") {
		if (getDarkModeStatus() === "ON") {
			localStorage.setItem("VaibhavMojidraDarkMode", "OFF");
		} else {
			localStorage.setItem("VaibhavMojidraDarkMode", "ON");
		}
		let status = (getDarkModeStatus() === "ON" ? true : false);
		document.getElementById("darkModeSwitch").src = status ? "assets/img/nav/on.png" : "assets/img/nav/off.png";
		darkMode(status);
	} else {
		alert("Sorry Dark Mode not supported.");
	}
}

function initNav() {
	document.getElementById('apps').innerHTML = "Apps (" + apps.length + ")";
	document.getElementById('github_repo').innerHTML = "GitHub Repositories (" + repos.length + ")";
}

function re() {
	window.location.reload();
}