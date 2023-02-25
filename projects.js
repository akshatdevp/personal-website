const link = "github.com/akshatdevp/"

const projectsList = [
	{
		"name" : "Volunteer easy",
		"description" : "This app was created using ionic and aws lambda. Serves for providing volunteering opportunities for interested volunteers, and for admins, a dashboard showing stats as graphs for data and other useful features.",
		"link" : link + "volunteeringIonic"
	},
	{
		"name" : "CP Ninja",
		"description" : "This is a coding contest tracker built in Flask. It scrapes data from codeforces, codechef, hacker-rank etc and shows when the contest starts. ",
		"link" : link + "CodingContestTracker"
	},
	{
		"name" : "Just food",
		"description" : "This is a JavaFX application to compare food prices from zomato, swiggy and other delivery services.",
		"link" : link + "JustFood"
	},
	{
		"name" : "Post and Display",
		"description" : "Simplified twitter clone. Vanilla JS front-end + Node/MongoDB/Express",
		"link" : link + "PostnDisplay-"
	},
	{
		"name" : "Sorting visualizer",
		"description" : "React-ts + tailwind to visualize a sorting algorithm.",
		"link" : link + "visualize-sort-react-ts"
	},
	{
		"name" : "WriterForAll",
		"description" : "WORK IN PROGRESS : A Flutter + Flask app that is a 1 stop shop for writers.",
		"link" : "NA"
	}

]

let s = "";
const name = (i) => { return "Project" + i } 
for(let p of projectsList){
	s+=
		`<div class = "card">`+
		`<h2>` + p.name + `</h2>` + 
		// `<a href ="http://`+ p.link + `"><h4>` + "" + `</h4></a> ` + 
	`<span>` + p.description + `</span><br>` +
		`<a href ="https://`+ p.link + `"target="_blank" rel="noopener noreferrer">`+
		`<i class="fa fa-github fa-2xl icon"></i>`+
		`</a>` + 
		`</div>`
}



document.querySelector(".cards").innerHTML = s; 
