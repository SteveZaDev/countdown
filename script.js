/*Putting all of these rules together, you can see that a year is a leap year not only if it is divisible by 4 -- it also has to be divisible by 400 if it is a centurial year. So 1700, 1800 and 1900 were not leap years, but 2000 was. This is related to the Year 2000 problem, because many computer programs would have calculated the leap year ...*/


let defaultOccasions = [
  { occ: "New Years",
    date: "Jan 1 2023",  
    time: 0, 
    mins: 0, 
    landscapeImg:  './img/newyears.jpg',
    portraitImg: './img/newyears.jpg',
    color: 'white'},
    { occ: "New Years 2024",
    date: "Jan 1 2024",  
    time: 0, 
    mins: 0, 
    landscapeImg:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-ENfd9HLN6TQ%2FVlTxbngarBI%2FAAAAAAAAAbU%2FvG7pUa3p1WQ%2Fs1600%2F2024%252Bervev.jpg&f=1&nofb=1&ipt=2dd65f79a12782682ccc791b7442d9ca463ff6b5b1092710518a20285bfe3278&ipo=images',
    portraitImg:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-ENfd9HLN6TQ%2FVlTxbngarBI%2FAAAAAAAAAbU%2FvG7pUa3p1WQ%2Fs1600%2F2024%252Bervev.jpg&f=1&nofb=1&ipt=2dd65f79a12782682ccc791b7442d9ca463ff6b5b1092710518a20285bfe3278&ipo=images',  
    color: 'white'},   
    {occ: "Christmas",
    date: "Dec 25 2023",
    time: 0,
    mins: 0, 
    landscapeImg:  './img/christmas.jpg',
    portraitImg:  './img/christmas.jpg',
    color: 'white'},
    {occ: "Vernal Equinox 2023",
    date: "Mar 20, 2023",
    time: 16,
    mins: 24, 
    landscapeImg:  './img/equinox.jpg',
    portraitImg:  './img/equinox.jpg',
    color: 'white'},
    {occ: "Summer Solstice 2023",
    date: "Jun 21, 2023",
    time: 10,
    mins: 57, 
    landscapeImg:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.nbcchicago.com%2F2022%2F06%2FGettyImages-1198079326.jpg%3Fquality%3D85%26strip%3Dall%26fit%3D1200%252C675&f=1&nofb=1&ipt=932286eb3dc8b32ec3d52b0adf6ec7fa8f5c716b4dda213fa19944c99af53444&ipo=images',
    portraitImg:  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.nbcchicago.com%2F2022%2F06%2FGettyImages-1198079326.jpg%3Fquality%3D85%26strip%3Dall%26fit%3D1200%252C675&f=1&nofb=1&ipt=932286eb3dc8b32ec3d52b0adf6ec7fa8f5c716b4dda213fa19944c99af53444&ipo=images',
    color: 'white'}    
]


let helpText = `This version of WORDLE, plays like a cross between Wordle and Wheel of Fortune. Instead of solving for a 5 letter word, you will be trying to figure out an item belonging to a particular category. The answer can be anywhere from 4 to 20+ characters and can include spaces. The default category is US Presidents, but you can select your own by clicking on the 2nd icon from the right. All available categories will be displayed along with the number of items in that category. The active ones will be in black, the inactive in gray. Click to toggle each category. As in the original WORDLE, stats are provided. Click on the bar-graph icon for a summary, then i, for more info. 
TIPS - As far as game play goes, here a few differences from the original and some suggestions. First off, for any response over 10 characters, you will get 8 guesses. The game does not check for valid words, names, or places, so gibberish is allowed. In fact, it may be your best strategy. Long solutions will likely be multi-word solutions, and you may want to find those word breaks by entering all spaces for your first guess. (Click the duplicate icon and spaces will be filled in from your current position in the row). Green spaces will indicate the word breaks. If you select multiple categories and are flummoxed, click on the mag glass icon to display the random category chosen by the game.      <a id="link-help" href="https://www.mail-signatures.com/articles/direct-link-to-hosted-image/" target="_blank">?</a>
***Solving tip - On especially long wordles, after several guesses have been made, the game board can look quite busy. Click or tap the title 'WORLDLE' and the current row will be filled with all of the letters that you have correctly guessed. This often results in an a-ha moment when the solution jumps out at you. Then backup thru the word via the delete key and then fill in the blanks with your solution. 
--Note - on narrow screens, wordles over 21 letters will be cut off at 21.
***Customize - You can customize your WORLDLE experience to some degree by selecting the gear shaped icon. 
--Choose your background - The top icon (with 6 little pics inside), will select a random background pic for each session. Below that are 6 photos, choose any one of them and that will be your background. There is also an input field where you can paste a link to any image on the web that you can get a direct link to. Paste in the link, press enter and your background will change. This works well on desktops but is hit or miss on mobile. 
--If you prefer shorter WORLDLES to solve, you can limit the maximum number of characters to anything 5 and over, the lower you go, available categories will be limited.
--Set your background audio to any of those listed. You can always turn off your background audio via the audio icon (third from the right.)
--Chameleon Mode offers an additional twist to your play. Instead of the traditional Wordle tile colors of dark gray, yellow and green, Chameleon Mode will set random colors for those tiles that are usually yellow and green. Dark gray for 'incorrect' will remain as usual, but the tile color for correctly placed letters and those that are contained within the word but not correctly placed will vary, and you have to figure that out.
--Free Spaces Reveal - Selecting this option will let you reveal all spaces in the wordle without using up a guess.
----------------
----------------
`


let occasions = []

let customOccasions = []

  const landscapeTextEl = document.getElementById("landscape-text")
  const portraitTextEl = document.getElementById("portrait-text")

  const editLandscapeImgEl = document.getElementById("landscape-img")
  const editPortraitImgEl = document.getElementById("portrait-img")




//occasions = []


const displayEl = document.getElementById("display")
const customEditEl = document.getElementById("custom-edit")

const occasionArray = []
localStorage.removeItem("testsession");


let testOccasions = JSON.parse(localStorage.getItem("customOccasions"))
if (testOccasions){
  console.log("FOUND CUSTOM OCCASIONS XXXXXXXXXXXXXXXXXXXXXXXXXX")
customOccasions = JSON.parse(localStorage.getItem("customOccasions"));
}


const addEl = document.getElementById("add-btn")
const cancelEl = document.getElementById("cancel-btn")
const deleteEl = document.getElementById("del-btn")
const submitEl = document.getElementById("sub-btn")



/*
console.log(occasions);*/

/*
class Occasion {
  constructor() {
    this.occ = "Occasion";
    this.date = "Jan 1 2023";
    this.img = "";
  }
}*/

let occNum = 0;

let workIndex = 0;



const ham = document.getElementById("ham");
const navbar = document.getElementById("navbar");
const add = document.getElementById("add");
const edit = document.getElementById("edit");
const del = document.getElementById("del");

initHelpModal();

ham.addEventListener("click", () => {
  navbar.classList.toggle("active");
  ham.classList.toggle("active");
  add.classList.toggle("hidden");
});

add.addEventListener("click", () => {
  occNum++;
  editOccasions('add');
});

del.addEventListener("click", () => {
  occNum++;
  editOccasions('del');
});


edit.addEventListener("click", () => {
  occNum++;
  editOccasions('submit');
});



  addButtonListeners();

  let rNum = 0;
  let nav = document.getElementById('navbar');
  let datePicked = document.getElementById('date');
  let customEl = document.getElementById('custom');
  let hourEl = document.getElementById('hour');
  let minuteEl = document.getElementById('minute');


  nav.innerText = "";
  createDefOccasionButtons()
  createCustOccasionButtons()
//  nav.innerText = "";
//  createDefOccasionButtons()
 



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


    
    body.style.backgroundImage = "url(" + occasions[rNum].landscapeImg + ")";
    if (window.innerHeight > window.innerWidth){
      body.style.backgroundImage = "url(" + occasions[rNum].portraitImg + ")";
    }


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
    //    console.log("current date = " + currentDate)




        let oYear = occasionDate.getFullYear();
        let cYear = currentDate.getFullYear();
       // console.log("occasion year = " + oYear);
       // console.log("current year = " + cYear);

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
       // console.log("days = " + days + " " + "Years = " + years);

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

function editOccasions(editType){
  if (editType === "add"){
  deleteEl.classList.add("hidden");
  submitEl.classList.add("hidden");
  addEl.classList.remove("hidden")
  }

  if (editType === "del"){
    addEl.classList.add("hidden");
    submitEl.classList.add("hidden");
    deleteEl.classList.remove("hidden");
    let selectEl = document.getElementById("selectOccasion");
     selectEl.innerHTML = ""
    let el = document.createElement("option");
    el.textContent = "Select Occasion";
  //  el.value = i;
    selectEl.appendChild(el);
    for(i = 0; i < customOccasions.length; i++) {
      let opt = customOccasions[i].occ;
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = i;
      selectEl.appendChild(el);
      }
    }


    if (editType === "submit"){
      addEl.classList.add("hidden");
      submitEl.classList.remove("hidden");
      deleteEl.classList.add("hidden");
      let selectEl = document.getElementById("selectOccasion");
       selectEl.innerHTML = ""
      let el = document.createElement("option");
      el.textContent = "Select Occasion";
    //  el.value = i;
      selectEl.appendChild(el);
      for(i = 0; i < customOccasions.length; i++) {
        let opt = customOccasions[i].occ;
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = i;
        selectEl.appendChild(el);
        }
      }
  


 /* const testOccassion = new Occasion;
  testOccassion.occ = "occassion number " + occNum;
  occasionArray.push(testOccassion);
  console.log(occasionArray)
  console.log("array date = " + occasionArray[0].date)
  sessionStorage.setItem("testsession", JSON.stringify(occasionArray));*/
 // localStorage.setItem("occasionsArray", JSON.stringify(occasions));
 // const myLocalData2 = JSON.parse(localStorage.getItem("testsession"));
 // console.log(myLocalData2);
  const allOccasionsEl = document.getElementById("custom-occasions")
  const customOccasionsContainerEl = document.getElementById("custom-occasions-container")
 /* allOccasionsEl.classList.toggle("hidden");*/
 // const displayEl = document.getElementById("display")
  displayEl.classList.toggle("hidden");
 /* const sectionEl = document.getElementById("edit-content")
  sectionEl.classList.toggle("hidden");*/
 // const customEditEl = document.getElementById("custom-edit")
  customEditEl.classList.toggle("hidden");
  /*
  for (i=1; i<6; i++){
    const custOccEl = document.createElement("div");
    custOccEl.classList.add("occasion");
    custOccEl.innerHTML = `
 //   <img src="./img/pearl.jpg" width=150, height=100, alt="">
    <div class="occ-info cust-occ-info">
    <h2>Name of Custom Occasion ${i}</h2>
    <h2>Date ${i}</h2>
    <h2>Time ${i}</h2>
  </div>
    ` ;
    customOccasionsContainerEl.appendChild(custOccEl);
  }




  let customOccEl = document.querySelectorAll('.occasion');



  customOccEl.forEach(function (i, ndx) {
    i.addEventListener('click', function() {
      console.log(ndx);
      let h2s = customOccEl[ndx].getElementsByTagName("h2");
      let text = customOccEl[ndx].innerText;
      console.log("div text = " + text)
      let h2Text = h2s[1].innerText;
      console.log("h2text = " + h2Text)
    });
  });
*/
// ABOVE LOGIC NOT IN USE - IT DISPLAYED TEST CUSTOM OCCASIONS INTENDED TO BE CLICKED UPON FOR EDIT
// DONt THINK I WILL DO IT THAT WAY


  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let  yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  datePicked.value = today;
  customEl.value = "";
  hourEl.value = 0;
  minuteEl.value = 0;
  landscapeTextEl.value = ""
  portraitTextEl.value = ""

  editLandscapeImgEl.src = ''
  editPortraitImgEl.src = ''
  editLandscapeImgEl.style.width = '96px'
  editLandscapeImgEl.style.height = '54px'
  editPortraitImgEl.style.width = '54px'
  editPortraitImgEl.style.height = '96px'
  landscapeTextEl.addEventListener("keydown", function (event) {
    var key = event.key;
    // If the user has pressed enter
    console.log("key pressed " + landscapeTextEl.value)
    if (key === 'Enter') {
      console.log("enter key pressed " + landscapeTextEl.value)

      editLandscapeImgEl.src = landscapeTextEl.value

       }
  });


  landscapeTextEl.addEventListener("selectionchange", function (event) {
      editLandscapeImgEl.src = landscapeTextEl.value

    });

    portraitTextEl.addEventListener("selectionchange", function (event) {
      editPortraitImgEl.src = portraitTextEl.value

    });



  portraitTextEl.addEventListener("keydown", function (event) {
    var key = event.key;
    // If the user has pressed enter
    console.log("key pressed " + portraitTextEl.value)
    if (key === 'Enter') {
      console.log("enter key pressed " + portraitTextEl.value)

      editPortraitImgEl.src = portraitTextEl.value

       }
  });







 
}



function isDST(d) {
  let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== d.getTimezoneOffset();    
}









function initPreferencesModal() {


  const modal = document.getElementById("preferences-modal");
  // Get the button that opens the preferences modal
  const btn = document.getElementById("preferences");
  const rndLandscapeEl = document.getElementById("random-bg-container");
  const rndPortraitEl = document.getElementById("portrait-random-bg-container");
  maxCharEl = document.getElementById("max-char")
  maxCharacters = window.localStorage.getItem("maxChars") || 35;
  maxCharEl.value = maxCharacters;

  // Get the <span> element that closes the modal 
  const span = document.getElementById("close-preferences");


  const preferencesContainerEl = document.getElementById("preferences-body")
  const portraitPreferencesContainerEl = document.getElementById("portrait-preferences-body")

  const textAreaEl = document.querySelector("textarea");
 // preferencesContainerEl.style.display="none"
  portraitPreferencesContainerEl.style.display="none"

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on preferences button")
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
    modal.style.display = "block";
    helpEl = document.getElementById("preferences-modal")
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    maxCharEl = document.getElementById("max-char")
    console.log("max-char value = " + maxCharEl.value + " max-char is " + typeof(maxCharEl.value))
    maxCharacters = Number(maxCharEl.value);
    if (maxCharacters < 5){
      maxCharacters = 5;
      maxCharEl.value = 5;
    }
    initCategories();
    initCategoriesModal();
    console.log("maxCharacters converted to number = " + maxCharacters)
    window.localStorage.setItem("maxChars", Number(maxCharacters));
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

    textAreaEl.addEventListener("keydown", function (event) {
      var key = event.key;
      // If the user has pressed enter
      if (key === 'Enter') {
        console.log("enter key pressed " + textAreaEl.value)
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + textAreaEl.value + ")"
        window.localStorage.setItem('background', JSON.stringify(textAreaEl.value));
      }
    });


    // When the user clicks on the random landscpape - randomly change the background
    rndLandscapeEl.addEventListener("click", function (event) {
      console.log("add code to randomly change background")
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
      window.localStorage.setItem('background', JSON.stringify("Random"));
    });

        // When the user clicks on the random portrait - randomly change the background
        rndPortraitEl.addEventListener("click", function (event) {
          console.log("add code to randomly change background")
          let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
          const body = document.getElementsByTagName('body')[0];
          body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")"
          window.localStorage.setItem('background', JSON.stringify("Random"));
        });
    


    const bgs = document.querySelectorAll(".maxi-img");
    for (let i = 0; i < bgs.length; i++) {
      bgs[i].addEventListener("click", ({ target }) => {

        let bg = target.getAttribute("src");
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + bg + ")"
        window.localStorage.setItem('background', JSON.stringify(bg));

      });
      }


      initBgAudios();
      initChameleon();
      initFreeSpaces();
    }




function createDefOccasionButtons(){
      console.log("nav innerHTML = " + nav.innerHTML)
      occasions = [];
      for (i=0; i<defaultOccasions.length; i++){
         occasions[i] = defaultOccasions[i];
      }
      occasions.forEach((occasion) => {
        console.log(occasion.occ);
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = occasion.occ;
        nav.append(btn);

        
        btn.addEventListener("click", () => {
          console.log (occasion.occ);
          rNum = 1;
          rNum = occasions.map(x => x.occ).indexOf(occasion.occ)
          navbar.classList.toggle("active");
          ham.classList.toggle("active");
          add.classList.toggle("hidden");
          setInterval(countdown, 1000);
        });
    
     //   document.body.appendChild(btn);
      });  // END OF forEach (occasion)
      console.log("length of defaultoccasions2 = " + defaultOccasions.length)
      if (customEditEl.classList.contains("hidden")){
        console.log("4-customEditEl class contains hidden")
      } else {
        console.log("4-customEditEl class does not contain hidden")
      }
    }



    function createCustOccasionButtons(){
      if (customEditEl.classList.contains("hidden")){
        console.log("5-customEditEl class contains hidden")
      } else {
        console.log("5-customEditEl class does not contain hidden")
      }
      console.log("about to perform foreach")
      console.log("length of defaultoccasions3 = " + defaultOccasions.length)
      customOccasions.forEach((cust) => {
        console.log("in foreach")
        console.log(cust.occ);
        console.log("length of defaultoccasions3a = " + defaultOccasions.length)
        console.log("length of occasions3a = " + occasions.length)
        occasions.push(cust);
        console.log("length of occasions3b = " + occasions.length)
        console.log("length of defaultoccasions3b = " + defaultOccasions.length)
        console.log("length of defaultoccasions3c = " + defaultOccasions.length)
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = cust.occ;
        console.log("length of defaultoccasions4 = " + defaultOccasions.length)
        nav.append(btn);
        console.log(nav);
        console.log("length of defaultoccasions5 = " + defaultOccasions.length)
     
      
    
        
        btn.addEventListener("click", () => {
          console.log ("custom eventlistener " + cust.occ);
          rNum = 1;
          rNum = customOccasions.map(x => x.occ).indexOf(cust.occ) + defaultOccasions.length;
          console.log ("rNum = " + rNum);
          navbar.classList.toggle("active");
          ham.classList.toggle("active");
          add.classList.toggle("hidden");
          setInterval(countdown, 1000);
        });
    

        if (customEditEl.classList.contains("hidden")){
          console.log("6-customEditEl class contains hidden")
        } else {
          console.log("6-customEditEl class does not contain hidden")
        }
     //   document.body.appendChild(btn);
      });  // END OF forEach (customoccasionsx)
    }


    function addButtonListeners(){
   

    addEl.addEventListener("click", function (event) {
        console.log("add button clicked XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        let customObj = 
        { occ: "Custom Occasion 1",
            date: "May 12 2023",  
            time: 0, 
            mins: 0, 
            landscapeImg:  './img/newyears.jpg',
            portraitImg:  './img/newyears.jpg',
            color: 'white'
            }
            let customEl = document.getElementById("custom")
            customObj.landscapeImg = landscapeTextEl.value;
            customObj.portraitImg = portraitTextEl.value;
            customObj.date = datePicked.value.replace(/-/g, '\/');
            customObj.occ = customEl.value
            customObj.time = hourEl.value
            customObj.mins = minuteEl.value
            console.log("Datepicked = " + datePicked.value)
            customOccasions.push(customObj);  

            nav.innerText = "";
  
     
        displayEl.classList.toggle("hidden");
        customEditEl.classList.toggle("hidden");

        
        createDefOccasionButtons()
        createCustOccasionButtons()
        window.localStorage.setItem('customOccasions', JSON.stringify(customOccasions));
      }); // END OF ADDEVENT



      cancelEl.addEventListener("click", function (event) {
        console.log("cancel button clicked XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
 



        displayEl.classList.toggle("hidden");
        customEditEl.classList.toggle("hidden");

      }); // END OF CANCELEVENT




      deleteEl.addEventListener("click", function (event) {
        console.log("delete button clicked XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
 
        customOccasions.splice(workIndex, 1); // 2nd parameter means remove one item only
        
        nav.innerText = "";
        createDefOccasionButtons()
        createCustOccasionButtons()
        window.localStorage.setItem('customOccasions', JSON.stringify(customOccasions));
        displayEl.classList.toggle("hidden");
        customEditEl.classList.toggle("hidden");
        rNum = 0;

      }); // END OF DELETELEVENT






      submitEl.addEventListener("click", function (event) {
        console.log("submit button clicked XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        let customObj = 
        { occ: "Custom Occasion 1",
            date: "May 12 2023",  
            time: 0, 
            mins: 0, 
            landscapeImg:  './img/newyears.jpg',
            portraitImg:  './img/newyears.jpg',
            color: 'white'
            }
            let customEl = document.getElementById("custom")
            customObj.landscapeImg = landscapeTextEl.value;
            customObj.portraitImg = portraitTextEl.value;
            customObj.date = datePicked.value.replace(/-/g, '\/');
            customObj.occ = customEl.value
            customObj.time = hourEl.value
            customObj.mins = minuteEl.value
            console.log("Datepicked = " + datePicked.value)
            customOccasions[workIndex] = customObj;  

            nav.innerText = "";
  
     
        displayEl.classList.toggle("hidden");
        customEditEl.classList.toggle("hidden");

        
        createDefOccasionButtons()
        createCustOccasionButtons()
        window.localStorage.setItem('customOccasions', JSON.stringify(customOccasions));
      }); // END OF EDITEVENT




  }

  function occSelected(){
    let occSelectedEl = document.getElementById("selectOccasion")
    console.log("Occasion selected = " + customOccasions[occSelectedEl.value].occ)
    fillForm(occSelectedEl.value)
  }
       
  
 
function fillForm(workItem){

  workIndex = workItem;
//  datePicked.value = new Date(customOccasions[workIndex].date);
 // datePicked.value = customOccasions[workIndex].date.replace(/-/g, '\/');
  datePicked.value = customOccasions[workIndex].date.replace(/\//g, "-");
  console.log("datepicked val = " + datePicked.value)
  console.log("customOccasions date = " + customOccasions[workIndex].date)
  customEl.value = customOccasions[workIndex].occ;

  hourEl.value = customOccasions[workIndex].time;
  minuteEl.value = customOccasions[workIndex].mins;
  landscapeTextEl.value = customOccasions[workIndex].landscapeImg;
  portraitTextEl.value = customOccasions[workIndex].portraitImg;
  const editLandscapeImgEl = document.getElementById("landscape-img")
  const editPortraitImgEl = document.getElementById("portrait-img")
  editLandscapeImgEl.src = ''
  editPortraitImgEl.src = ''
  editLandscapeImgEl.style.width = '96px'
  editLandscapeImgEl.style.height = '54px'
  editPortraitImgEl.style.width = '54px'
  editPortraitImgEl.style.height = '96px'

  editLandscapeImgEl.src = customOccasions[workIndex].landscapeImg;
  editPortraitImgEl.src = customOccasions[workIndex].portraitImg;

}











function initHelpModal() {
  const modal = document.getElementById("help-modal");
 // modal.textContent = "Explanation of this version of WORDLE"
  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");


  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    console.log("just clicked on help button")
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
    helpEl.innerText = helpText + "\n" + "\n"
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}





