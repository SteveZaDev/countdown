const occasions = [
  { occ: "New Years",
    date: "Jan 1 2023",  
    time: 0, 
    img:  'url(./img/newyears.jpg)',
    color: 'black'},
    {occ: "Olga's Birthday",
    date: "Dec 27 2022",
    time: 0, 
    img:  'url(./img/newyears.jpg)',
    color: 'orange'},
    {occ: "Alex's Birthday",
    date: "Nov 30 2023",
    time: 0, 
    img:  'url(./img/lexi1196.bmp)',
    color: 'orange'},
    {occ: "Christmas",
    date: "Dec 25 2022",
    time: 0, 
    img:  'url(./img/christmas.jpg)',
    color: 'white'},
    {occ: "Uke Christmas Eve Dinner",
    date: "Jan 6 2023",
    time: 17, 
    img:  'url(./img/uke.jpg)',
    color: 'white'}
]

const ham = document.getElementById("ham");
const navbar = document.getElementById("navbar");

ham.addEventListener("click", () => {
  navbar.classList.toggle("active");
  ham.classList.toggle("active");
});

  let rNum = 0;
  let nav = document.getElementById('navbar');

  occasions.forEach((occasion) => {
    console.log(occasion.occ);
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = occasion.occ;
    nav.append(btn);
    console.log(nav);
 
  

    
    btn.addEventListener("click", () => {
      console.log (occasion.occ);
      rNum = 1;
      rNum = occasions.map(x => x.occ).indexOf(occasion.occ)
      navbar.classList.toggle("active");
      ham.classList.toggle("active");
      setInterval(countdown, 1000);
    });

 //   document.body.appendChild(btn);
  });



function countdown(){
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");
    const occEl = document.getElementById("occasion");

    // rNum = Math.floor(Math.random() * occasions.length)


    const countdownDate = occasions[rNum].date;
    const body = document.getElementsByTagName('body')[0];
    const spans = document.getElementsByTagName('span');

    body.style.backgroundImage = occasions[rNum].img;



      occEl.style.color = occasions[rNum].color;
      daysEl.style.color = occasions[rNum].color;
      minsEl.style.color = occasions[rNum].color;
      hoursEl.style.color = occasions[rNum].color;
      secondsEl.style.color = occasions[rNum].color;

      for(i=0;i<spans.length;i++)
        {
          spans[i].style.color = occasions[rNum].color;
        }

    // function countdown() {
        const occasionDate = new Date(countdownDate); 
        occasionDate.setHours(occasions[rNum].time);
        const currentDate = new Date();

        let totalSeconds = (occasionDate - currentDate) / 1000;

        if(totalSeconds<0){
          occEl.textContent="Since " + occasions[rNum].occ;
          totalSeconds = Math.abs(totalSeconds); 
          } else {
          occEl.textContent= occasions[rNum].occ + " in";
        }

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
}

// initial call
//countdown();

 setInterval(countdown, 1000);




 /*
 var BLOCKS_PER_CHART = 10;

function generateChart(chartContainer) {
  var container = document.createElement("div");
  var text = "Hello World!";
  var blockDiv, textSpan;  // used in the for loop

  container.className = "container2";
  document.getElementById(chartContainer.replace("#", "")).appendChild(container);

  for(var i = 0; i < BLOCKS_PER_CHART; i++) {
    blockDiv = document.createElement("div");
    blockDiv.className = "block";
    textSpan = document.createElement("span");
    textSpan.append(text);  // see note about browser compatibility
    blockDiv.append(textSpan);
    container.append(blockDiv);
  }
}
 




Try below code.

var allBlues = document.querySelectorAll(".blue");
var divWrapper = document.createElement("div");
divWrapper.className = "wrapper";
for(var i = 0; i < allBlues.length; i++){
  // Iterate through all the siblings.
  var tempEle;
  while(tempEle = allBlues[i].nextElementSibling){
    divWrapper.appendChild(tempEle);
  }
}

main.appendChild(divWrapper);





 */
