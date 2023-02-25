function getRecentBlogPosts(){
	return [
		{ "name" : "Surfing Keys",
			"link" : "https://wiry-letter-f1f.notion.site/Surfing-keys-Closest-thing-to-a-keyboard-only-browser-experience-7f3be3c0b6394c72a24cc5ec5a3005b8"
		}
	]
}

const links = getRecentBlogPosts()
links.forEach(
	link => document.querySelector(
