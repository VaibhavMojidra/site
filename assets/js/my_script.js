let isProfilePage = false
const darkMode = (isDarkModeOn) => {
	let r = document.querySelector(':root')
	if (isDarkModeOn) {
		r.style.setProperty('--nav_bg', '#000000')
		r.style.setProperty('--page_bg', '#121217')
		r.style.setProperty('--text_color', '#E5E5E5')
		r.style.setProperty('--card_bg', '#262626')
		r.style.setProperty('--tile_bg', '#262626')
		r.style.setProperty('--button_color', '#E5E5E5')
		r.style.setProperty('--button_text_color', '#333333')
		r.style.setProperty('--dim_rev_page_bg', '#ECEFF1')
		r.style.setProperty('--dim_rev_text_color', '#1F1A24')
		r.style.setProperty('--translucent_page_bg', '#1212124D')
		r.style.setProperty('--dropdown_hover_bg', '#F5F5F5')
		r.style.setProperty('--dropdown_hover_text_color', '#121217')
		try {
			document.getElementById("modeInfoText").innerHTML = "Switch to light mode"
		} catch (e) { }
		if (isProfilePage) {
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
			try {
				document.getElementById("closeImageBtn").src = "assets/img/highlights/icons/dark/close.png"
				document.getElementById("prevImageBtn").src = "assets/img/highlights/icons/dark/prev.png"
				document.getElementById("nextImageBtn").src = "assets/img/highlights/icons/dark/next.png"
				document.getElementById("shareImageBtn").src = "assets/img/highlights/icons/dark/share.png"
			}
			catch (e) { }
		} else {
			try {
				document.getElementById("closeImageBtn").src = "assets/img/highlights/icons/dark/close.png"
			}
			catch (e) { }
		}

		try {
			$(".mgithub-icon").attr("src", "assets/img/icons/github_white_icon.png")
		} catch (e) { }
	} else {
		r.style.setProperty('--nav_bg', '#4A148C')
		r.style.setProperty('--page_bg', '#F5F5F5')
		r.style.setProperty('--text_color', '#1A1A1A')
		r.style.setProperty('--card_bg', '#F5F5F5')
		r.style.setProperty('--tile_bg', '#E8EAF6')
		r.style.setProperty('--button_color', '#4A148C')
		r.style.setProperty('--button_text_color', '#F5F5F5')
		r.style.setProperty('--dim_rev_page_bg', '#1F1A24')
		r.style.setProperty('--dim_rev_text_color', '#ECEFF1')
		r.style.setProperty('--translucent_page_bg', '#FDFDFD1A')
		r.style.setProperty('--dropdown_hover_bg', '#4A148C')
		r.style.setProperty('--dropdown_hover_text_color', '#F5F5F5')
		try {
			document.getElementById("modeInfoText").innerHTML = "Switch to dark mode"
		} catch (e) { }
		if (isProfilePage) {
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
			try {
				document.getElementById("closeImageBtn").src = "assets/img/highlights/icons/light/close.png"
				document.getElementById("prevImageBtn").src = "assets/img/highlights/icons/light/prev.png"
				document.getElementById("nextImageBtn").src = "assets/img/highlights/icons/light/next.png"
				document.getElementById("shareImageBtn").src = "assets/img/highlights/icons/light/share.png"
			}
			catch (e) { }
		} else {
			try {
				document.getElementById("closeImageBtn").src = "assets/img/highlights/icons/light/close.png"
			}
			catch (e) { }
		}

		try {
			$(".mgithub-icon").attr("src", "assets/img/icons/github_icon.png")
		} catch (e) {

		}
	}
}

const setViewDarkModeAndHelpOption = () => {
	if (window.innerWidth <= 991) {
		document.getElementById("darkModeLabel").innerHTML = '<a class="nav-link"><span id="modeInfoText">Switch to dark mode</span> <img src="assets/img/nav/off.png" style="margin-left: 5px" width="20" height="20" class="d-inline-block align-center" alt="Vaibhav Mojidra" id="darkModeSwitch" onclick="setDarkModeStatus()" /><span class="sr-only">(current)</span></a>'
		document.getElementById("helpLabel").innerHTML = '<a class="nav-link" onclick="openHelpDialog()" style="cursor: pointer;">Help & Shortcuts <img src="assets/img/nav/help.png" height="19" width="19" style="margin-left: 4px" /> </a>'
	} else {
		document.getElementById("darkModeLabel").innerHTML = '<img src="assets/img/nav/off.png" width="25" height="25" class="align-center" alt="Vaibhav Mojidra" id="darkModeSwitch" onclick="setDarkModeStatus()" />'
		document.getElementById("helpLabel").innerHTML = '<a class="nav-link" onclick="openHelpDialog()" style="cursor: pointer;"><img src="assets/img/nav/help.png" height="23" width="23" /></a>'
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
	setViewDarkModeAndHelpOption()
}

const re = () => {
	window.location.reload()
}

const isPortrait = () => {
	switch (window.orientation) {
		case 0:
			return true;
			break;
		case 90:
			return false;
			break;
		case -90:
			return false;
			break;
		case 180:
			return true;
			break;
		default:
			return false;
			break;
	}
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

const isSafari = () => navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1