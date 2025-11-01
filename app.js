
var data = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[3]

var card1 = data.childNodes[1]
var card2 = data.childNodes[3]
var card3 = data.childNodes[5]
var card4 = data.childNodes[7]
function DataGeneration (title,matchNumber,date,flags,teams,scores,result,thumnail){
    this.title = title;
    this.matchNumber = matchNumber;
    this.date = date;
    this.flags = flags;
    this.teams = teams;
    this.scores = scores;
    this.result = result;
    this.thumnail = thumnail
} 


var matches = [
    new DataGeneration("Final",55,"29 Jun 24",["images/india.png","images/south.png"],["India","South Africa"],["176/7 (20)","169/8 (20)"],"IND won by 7 runs","images/v1.jfif"),
    new DataGeneration("Semi-Final",54,"27 Jun 24",["images/india.png","images/england.png"],["India","England"],["171/7 (20)","103 (16.4)"],"IND won by 68 runs","images/v02.jfif"),
    new DataGeneration("Semi-Final",53,"27 Jun 24",["images/afghan.png","images/south.png"],["Afghanistan","South Africa"],["56 (11.5)","60/1 (8.5)"],"SA won by 9 wickets (67 balls left)","images/v3.jfif"),
    new DataGeneration("Super Eight",52,"25 Jun 24",["images/afghan.png","images/bangladesh.png"],["Afghanistan","Bangladesh"],["176/7 (20)","169/8 (20)"],"AFG won by 8 runs(DLS method)","images/v1.jfif")
]


// var match = {
//     title:"Final",
//     matchNumber:55,
//     date:"29 Jun 24",
//     flags:["images/india.png","images/south.png"],
//     teams:["India","South Africa"],
//     scores:["176/7 (20)","169/8 (20)"],
//     result:"IND won by 7 runs",
//     thumnail:"images/v1.jfif"
// }

// console.log(match.flags[1])

card1.innerHTML = ` <div class="d1">
                        <span class="s1"> <br>${matches[0].title}</span>
                        <span>T20 55 of 55</span>
                        <span class="s3"> ${matches[0].date} </span>
                    </div>
                    <div class="d2">
                        <span class="s02"> <br><img src="${matches[0].flags[0]}" alt="" width="" height=""></span>
                        <span>${matches[0].teams[0]}</span>
                        <span class="s03"> ${matches[0].scores[0]} </span>
                    </div>
                    <div class="d3">
                        <span class="s02"> <br><img src="images/south.png" alt="" width="" height=""></span>
                        <span>${matches[0].teams[1]}</span>
                        <span class="s03">${matches[0].scores[1]}</span>
                    </div>
                    <div class="d4">
                        <h3 style="display: inline-block;">${matches[0].result}</h3>
                        <img src="${matches[0].thumnail}" alt="" width="" height="">
                    </div>`

card2.innerHTML =  `<div class="d1">
                        <span class="s1"> <br>${matches[1].title}</span>
                        <span>T20 55 of 55</span>
                        <span class="s3"> ${matches[1].date} </span>
                    </div>
                    <div class="d2">
                        <span class="s02"> <br><img src="${matches[1].flags[0]}" alt="" width="" height=""></span>
                        <span>${matches[1].teams[0]}</span>
                        <span class="s03"> ${matches[1].scores[0]} </span>
                    </div>
                    <div class="d3">
                        <span class="s02"> <br><img src="images/south.png" alt="" width="" height=""></span>
                        <span>${matches[1].teams[1]}</span>
                        <span class="s03">${matches[1].scores[1]}</span>
                    </div>
                    <div class="d4">
                        <h3 style="display: inline-block;">${matches[1].result}</h3>
                        <img src="${matches[1].thumnail}" alt="" width="" height="">
                    </div>`






card3.innerHTML =  `<div class="d1">
                        <span class="s1"> <br>${matches[2].title}</span>
                        <span>T20 55 of 55</span>
                        <span class="s3"> ${matches[2].date} </span>
                    </div>
                    <div class="d2">
                        <span class="s02"> <br><img src="${matches[2].flags[0]}" alt="" width="" height=""></span>
                        <span>${matches[2].teams[0]}</span>
                        <span class="s03"> ${matches[2].scores[0]} </span>
                    </div>
                    <div class="d3">
                        <span class="s02"> <br><img src="images/south.png" alt="" width="" height=""></span>
                        <span>${matches[2].teams[1]}</span>
                        <span class="s03">${matches[2].scores[1]}</span>
                    </div>
                    <div class="d4">
                        <h3 style="display: inline-block;">${matches[2].result}</h3>
                        <img src="${matches[2].thumnail}" alt="" width="" height="">
                    </div>`


card4.innerHTML =  `<div class="d1">
                        <span class="s1"> <br>${matches[3].title}</span>
                        <span>T20 55 of 55</span>
                        <span class="s3"> ${matches[3].date} </span>
                    </div>
                    <div class="d2">
                        <span class="s02"> <br><img src="${matches[3].flags[0]}" alt="" width="" height=""></span>
                        <span>${matches[3].teams[0]}</span>
                        <span class="s03"> ${matches[3].scores[0]} </span>
                    </div>
                    <div class="d3">
                        <span class="s02"> <br><img src="images/south.png" alt="" width="" height=""></span>
                        <span>${matches[3].teams[1]}</span>
                        <span class="s03">${matches[3].scores[1]}</span>
                    </div>
                    <div class="d4">
                        <h3 style="display: inline-block;">${matches[3].result}</h3>
                        <img src="${matches[3].thumnail}" alt="" width="" height="">
                    </div>`