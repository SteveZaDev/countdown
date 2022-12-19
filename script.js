/*Putting all of these rules together, you can see that a year is a leap year not only if it is divisible by 4 -- it also has to be divisible by 400 if it is a centurial year. So 1700, 1800 and 1900 were not leap years, but 2000 was. This is related to the Year 2000 problem, because many computer programs would have calculated the leap year ...*/


const occasions = [
  { occ: "New Years",
    date: "Jan 1 2023",  
    time: 0, 
    mins: 0, 
    img:  'url(./img/newyears.jpg)',
    color: 'black'},
    {occ: "Olga's Birthday",
    date: "Dec 27 2022",
    time: 0,
    mins: 0, 
    img:  'url(./img/olga.bmp)',
    color: 'orange'},
    {occ: "Alex's Birthday",
    date: "Nov 30 2023",
    time: 0,
    mins: 0, 
    img:  'url(./img/lexi1196.bmp)',
    color: 'orange'},
    {occ: "Christmas",
    date: "Dec 25 2022",
    time: 0,
    mins: 0, 
    img:  'url(./img/christmas.jpg)',
    color: 'white'},
    {occ: "Uke Christmas Eve Dinner",
    date: "Jan 6 2023",
    time: 17,
    mins: 30, 
    img:  'url(./img/uke.jpg)',
    color: 'white'},
    {occ: "Pearl Harbor",
    date: "Dec 7 1941",
    time: 13,
    mins: 0, 
    img:  'url(./img/pearl.jpg)',
    color: 'white'},
    {occ: "Alex's Birth",
    date: "Nov 30 1992",
    time: 0,
    mins: 0,
    img:  'url(./img/lexi1196.bmp)',
    color: 'orange'},
    {occ: "My Birth",
    date: "Dec 27, 1953",
    time: 11,
    mins: 0, 
    img:  'url(./img/olga.bmp)',
    color: 'lightblue'},
    {occ: "Winter Solstice 2022",
    date: "Dec 21, 2022",
    time: 16,
    mins: 48, 
    img:  'url(./img/solstice.jpg)',
    color: 'lightblue'},  
    {occ: "Vernal Equinox 2023",
    date: "Mar 20, 2023",
    time: 16,
    mins: 24, 
    img:  'url(./img/equinox.jpg)',
    color: 'yellow'}
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
    const yearsEl = document.getElementById("years");
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
      yearsEl.style.color = occasions[rNum].color;
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
        occasionDate.setMinutes(occasions[rNum].mins);
        const currentDate = new Date();
        let oYear = occasionDate.getFullYear();
        let cYear = currentDate.getFullYear();
        console.log("occasion year = " + oYear);
        console.log("current year = " + cYear);

        let totalSeconds = (occasionDate - currentDate) / 1000;

        if(totalSeconds<0){
          occEl.textContent="Since " + occasions[rNum].occ;
          totalSeconds = Math.abs(totalSeconds); 
          } else {
          occEl.textContent= occasions[rNum].occ + " in";
        }

        
        let days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
        const years = (Math.floor(days / 365.2425)) 
        console.log("days = " + days + " " + "Years = " + years);

        let leapYear = false;
        let startYear = 0;
        let endYear = 0;

        document.querySelector(".days-c").hidden = false
        if (days === 0){
           document.querySelector(".days-c").hidden = true
            }

        document.querySelector(".hours-c").hidden = false
        if (hours === 0){
            document.querySelector(".hours-c").hidden = true
            }    
  
        document.querySelector(".years-c").hidden = true
        if(years!=0){

          document.querySelector(".years-c").hidden = false

          if(oYear<cYear){
            startYear = oYear;
            endYear = cYear;  
          } else {
            startYear = cYear;
            endYear = oYear;
          }
          days = days - (365 * years);
          for (i=startYear; i<endYear; i++){
            /* if any year in the range is a leap year subtract 1 from the days */
            console.log(i);
            leapYear = isLeapYear(i);
            if (leapYear){
              console.log("leap year");
              days--;
            }
          }
          leapYear = isLeapYear(startYear);
          if (leapYear){
            days++;
          }

        } 


        yearsEl.innerHTML = years;
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

 function isLeapYear(year){
  return (year%4 === 0 && year%100 !==0 || year%400 === 0);
}





