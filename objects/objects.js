// JavaScript Document

function sayhello(){
	alert("It's Working");
}

var friend = {
	//properties
	fname	: "Jeff",
	lname	: "Hackett",
	age		: "24"
	
	
	//methods
};

document.getElementById('demo').innerHTML ="Name: " + friend.fname + " " + friend.lname + " " + "Age: " + friend.age;

var netflixSeries = {
	//properties
	showName		: "Houise of Cards",
	episodeCount	: "91210",
	description		: "CHRISTOPHER ROBIN MILLER CHRISTOPHER ROBIN MILLER!"
	
	//methods
};

document.getElementById('name').innerHTML = netflixSeries.showName;
document.getElementById('epCount').innerHTML = netflixSeries.episodeCount;
document.getElementById('description').innerHTML = netflixSeries.description;

var nextflixShow = {
	//properties
	showName		: "",
	epNumber		:1,
	epDescription 	: "",
	
	//method
	watchNow:function(){
			alert("You are now watching " + this.showName + " " + this.epNumber);
		}
		
}

var starTrek = Object.create(nextflixShow);
starTrek.showName = "Star Trek";
starTrek.epNumber = 101;
starTrek.epDescription = "The Enterprise encounters the entity Q at far point station.";

document.getElementById('showName').innerHTML = starTrek.showName;
document.getElementById('epNumber').innerHTML = starTrek.epNumber;
document.getElementById('epDescription').innerHTML = starTrek.epDescription;


// object literals
var amazonPrimeShow = {
	showID			:1,
	showName		:"Chris's Happy Happy Fun Time, GO!",
	showDescription : "This is the happiest show on the planet.",
	seasonInfo		:{
			seasonNumber	:1,
		
	
	
	printDetails : function(){
		doccument.write(showDescription);
		
	},
	
	episode : [
	{episodeNumber:1, episodeName: "Happy Times Forever"},
	{episodeNumber:2, episodeName: "The Real Happy Story of Paul"},
	{episodeNumber:3, episodeName: "Even Happier than Before"}
	]
	},
};
	
for (info in amazonPrimeShow.seasonInfo.episode){
		document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episode[info].episodeName + "<br>");
	}
