let candidate = {
    name:"Elizabeth Sanger",
    district: "5th", // Her congressional district (you can use yours here)
    platform: [ // Her platform statements for the following issues.
        
        {
            taxes:"less",
            // Taxes
            jobs:"More",
            // Jobs
            infrastructure:"better",
            // Infrastructure
            healthCare:"better and cheaper",
            // Health care
            crimeEnforcemant:"less crime and compassionate enforcement"// Crime and enforcement
        }
    ],
    donations:"url", // URL for donation form
    eventsDates:"01/01/2018", // Calendar of events
    biography: "Short bio of candidate",// Biography
    
    images:[// Image gallery

{
    headShot:"headshot",// Head shot
    familyPotrait:"family pic",// Picture of family
    picOfConstituents:"Picture of constituents"    // Picture of constituents
}
    ],
    missionStatment:"We can do it if we believe!",// Mission statement
    registerToVote:"url"
    
 }
// Volunteer information
let volunteers = {
    name:"John Snow", // Name
    address:"WinterFel", // Address
    email:"Jsnow@gmail.com",// Email
    phoneNumber:"6155555555",// Phone number
    availability:"3 to 5",// Availability
    activities:[// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
        "phones",
        "polls",
        "sword-fighting"
    ]
}

// updateState = (obj) => {
//     if (obj instance of Object) {
//      this.setState(
//       (prevState) => (Object.assign({}, prevState, obj))
//      );
//     }
//    }
// let key = "";
function changeCandidateInfo(object,key,value){
    object[key]=value;
    // console.log(object[key])
    // console.log(object.district)
    // console.log(key)
    return object[key];
}
changeCandidateInfo(candidate,"district","6th")
console.log(changeCandidateInfo(candidate,"district","6th"))
console.log(candidate.district)
changeVolunteerInfo=(object,key,value)=>
{
    object[key]=value;
    return object[key];
}
console.log(changeVolunteerInfo(volunteers,"name","Arraya Stark"));

// Use document.createElement() to build an <article> element representing Elizabeth. The id property of the element should be her congressional district, and its content should be her platform data. Once the element has been created, insert it into the DOM.
// var element = document.createElement(tagName[, options]);
let article=document.createElement("ARTICLE");
article.setAttribute("id","candidate.district");
document.write("<article> Hello world<article>")
document.getElementById("candidate.district").appendChild("Hello");

// article.appendChild("i am an article")
// var att = document.createAttribute("id");       // Create a "id" attribute

// att.value = "candidate.district";       // Set the value of the id attribute

// article.setAttributeNode(att);      // Add the id attribute to <h1>
// console.log(candidate.district)
// document.getElementById("candidate.district").innerHTML = 5 + 6;