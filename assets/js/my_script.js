const darkMode = (isDarkModeOn) => {
	let r = document.querySelector(':root')
	if (isDarkModeOn) {
		r.style.setProperty('--nav_bg', '#212121')
		r.style.setProperty('--page_bg', '#272B34')
		r.style.setProperty('--text_color', '#FDFDFD')
		r.style.setProperty('--card_bg', '#333333')
		r.style.setProperty('--button_color', '#f5f5f5')
		r.style.setProperty('--button_text_color', '#333333')
		try {
			document.getElementById("modeInfoText").innerHTML = "Switch to light mode"
		} catch (e) { }
		try {
			document.getElementById("insta").src = "assets/img/socials/dark/instagram.png"
			document.getElementById("facebook").src = "assets/img/socials/dark/facebook.png"
			document.getElementById("twitter").src = "assets/img/socials/dark/twitter.png"
			document.getElementById("linkedin").src = "assets/img/socials/dark/linkedin.png"
			document.getElementById("snapchat").src = "assets/img/socials/dark/snapchat.png"
			document.getElementById("playstore").src = "assets/img/socials/dark/playstore.png"
			document.getElementById("youtube").src = "assets/img/socials/dark/youtube.png"
			document.getElementById("github").src = "assets/img/socials/dark/github.png"
			document.getElementById("mail").src = "assets/img/socials/dark/mail.png"
			document.getElementById("stackoverflow").src = "assets/img/socials/dark/stackoverflow.png"
		} catch (e) { }
	} else {
		r.style.setProperty('--nav_bg', '#4a148c')
		r.style.setProperty('--page_bg', '#FDFDFD')
		r.style.setProperty('--text_color', '#1A1A1A')
		r.style.setProperty('--card_bg', '#f5f5f5')
		r.style.setProperty('--button_color', '#4a148c')
		r.style.setProperty('--button_text_color', '#FDFDFD')
		try {
			document.getElementById("modeInfoText").innerHTML = "Switch to dark mode"
		} catch (e) { }
		try {
			document.getElementById("insta").src = "assets/img/socials/light/instagram.png"
			document.getElementById("facebook").src = "assets/img/socials/light/facebook.png"
			document.getElementById("twitter").src = "assets/img/socials/light/twitter.png"
			document.getElementById("linkedin").src = "assets/img/socials/light/linkedin.png"
			document.getElementById("snapchat").src = "assets/img/socials/light/snapchat.png"
			document.getElementById("playstore").src = "assets/img/socials/light/playstore.png"
			document.getElementById("youtube").src = "assets/img/socials/light/youtube.png"
			document.getElementById("github").src = "assets/img/socials/light/github.png"
			document.getElementById("mail").src = "assets/img/socials/light/mail.png"
			document.getElementById("stackoverflow").src = "assets/img/socials/light/stackoverflow.png"
		} catch (e) { }
	}
}

const setViewDarkModeOption = () => {
	if (window.innerWidth <= 991) {
		document.getElementById("darkModeLabel").innerHTML = '<a class="nav-link"><span id="modeInfoText">Switch to dark mode</span> <img src="assets/img/nav/off.png" style="margin-left: 5px" width="20" height="20" class="d-inline-block align-center" alt="Vaibhav Mojidra" id="darkModeSwitch" onclick="setDarkModeStatus()" /><span class="sr-only">(current)</span></a>'
	} else {
		document.getElementById("darkModeLabel").innerHTML = '<img src="assets/img/nav/off.png" width="25" height="25" class="align-center" alt="Vaibhav Mojidra" id="darkModeSwitch" onclick="setDarkModeStatus()" />'
	}
}

const isMobile = () => {
	const toMatch = [
		/Android/i,
		/webOS/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i
	]

	return toMatch.some((toMatchItem) => {
		return navigator.userAgent.match(toMatchItem)
	})
}
const getDarkModeStatus = () => {
	let status = "OFF"
	if (typeof (Storage) !== "undefined") {
		status = localStorage.getItem("VaibhavMojidraDarkMode") === null ? "OFF" : localStorage.getItem("VaibhavMojidraDarkMode")
	} else {
		status = "OFF"
	}
	return status
}

const setDarkModeStatus = () => {
	if (typeof (Storage) !== "undefined") {
		if (getDarkModeStatus() === "ON") {
			localStorage.setItem("VaibhavMojidraDarkMode", "OFF")
		} else {
			localStorage.setItem("VaibhavMojidraDarkMode", "ON")
		}
		let status = (getDarkModeStatus() === "ON" ? true : false)
		document.getElementById("darkModeSwitch").src = status ? "assets/img/nav/on.png" : "assets/img/nav/off.png"
		darkMode(status)
	} else {
		alert("Sorry Dark Mode not supported.")
	}
}

const initNav = () => {
	document.getElementById('apps').innerHTML = "Apps (" + apps.length + ")"
	document.getElementById('github_repo').innerHTML = "GitHub Repositories (" + repos.length + ")"
	setViewDarkModeOption()
}

const re = () => {
	window.location.reload()
}

const calculateTime = (startDate, endDate) => {
	let startingDate = moment(startDate)
	let endingDate = moment(endDate)
	let monthsDiff = endingDate.diff(startingDate, 'months')
	let yearsDiff = endingDate.diff(startingDate, 'years')
	if (yearsDiff != 0) {
		let yearsDifferenceInMonths = yearsDiff * 12
		monthsDiff -= yearsDifferenceInMonths
	}

	if (monthsDiff == 0) {
		if (yearsDiff == 0) {
			return ""
		} else {
			if (yearsDiff == 1) {
				return yearsDiff + " year"
			} else {
				return yearsDiff + " years"
			}
		}
	} else {
		if (yearsDiff == 0) {
			if (monthsDiff == 1) {
				return monthsDiff + " month"
			} else {
				return monthsDiff + " months"
			}
		} else {
			if (yearsDiff == 1) {
				if (monthsDiff == 1) {
					return yearsDiff + " year " + monthsDiff + " month"
				} else {
					return yearsDiff + " year " + monthsDiff + " months"
				}
			} else {
				if (monthsDiff == 1) {
					return yearsDiff + " years " + monthsDiff + " month"
				} else {
					return yearsDiff + " years " + monthsDiff + " months"
				}
			}
		}
	}
}