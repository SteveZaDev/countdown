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
    landscapeImg:  './img/2024landscape.png',
    portraitImg:  'https://thumbs.dreamstime.com/b/golden-new-year-numbers-confetti-champagne-bottle-vertical-golden-color-palette-photo-new-year-numbers-surrounded-264564709.jpg',  
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


const backgroundImagesPortrait=[
  // "https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
   "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://cdn.pixabay.com/photo/2017/08/31/11/35/alps-2700403_960_720.jpg",
   "https://images.unsplash.com/photo-1543837173-6c26bc89937b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXV0dW1ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1553114836-026cecec9778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
 //  "https://cdn.pixabay.com/photo/2023/01/22/12/17/flower-7736238__340.jpg"
 ]
 
 const backgroundImagesLandscape=[
   "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600",
   "https://cdn.pixabay.com/photo/2021/01/09/20/23/road-5903402__340.jpg",
   "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://cdn.pixabay.com/photo/2017/08/31/11/35/alps-2700403_960_720.jpg",
   "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1600",
   "https://images.unsplash.com/photo-1566155119454-2b581dd44c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNwcmluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
 ]





const testLink = "I read and agree to the <a href='https://www.mail-signatures.com/articles/direct-link-to-hosted-image/' target='_blank'>Privacy Policy</a>";




let helpText = `COUNTDOWN to any date and time in the future or count up from any date and time in the past. In addition to a small set of default dates, you can add up to 12 custom occasions of your own. Each occasion can be set to a minutes accuracy. Add background images specific to each occasion. These can be direct links to anywhere on the web (find an image you like, right click on it, select "copy image link", then paste that into either the Landscape or Portrait box when adding or editing occasions).  Or you can get links to your own pics on sites like <a href="https://www.mail-signatures.com/articles/direct-link-to-hosted-image/#google-drive" target="_blank">Google Drive</a> or <a href="https://www.mail-signatures.com/articles/direct-link-to-hosted-image/#onedrive" target="_blank">OneDrive</a> or <a href="https://www.mail-signatures.com/articles/direct-link-to-hosted-image/" target="_blank">others</a>. Note - While on a mobile device, getting direct links to images that can then be included on this site can be difficult and confusing. Your mobile browser may give you a link to the site the image is located on but not the exact image. A possible workaround is to grab the direct link while on your computer then email it to yourself and then when back on your mobile device, grab that email link and paste it into this site.   
<br>
\u00A0\u00A0\u00A0When you first enter the site, the default occasion of New Year's will be displayed. 
Select the icon in the upper right to display the default occasions available and any ones that you have added. (Bear in mind that any occasions you add are specific to the device and browser you are using. If you add occasions in Firefox, those will not be available in Chrome). If on mobile, you can also swipe left/right up/down to cycle thru all the occassions. 
<br>
 The default display of the countdown will be shown in white text over a semi-transparent black background box. Click anywhere within the background box to cycle thru the other displays available that may better suit your eye or go better with the image you have chosen for your background.  
 <br>
 Click the "arrow" icon on the top of the screen to cycle thru the 3 sizes of display. The Countdown display can also be dragged to another screen location.   
`
let viewHelpText = `Thanks for checking out COUNTDOWN. Please view the Help "?" icon for useful tips and hints `

let occasions = []

let customOccasions = []

  const landscapeTextEl = document.getElementById("landscape-text")
  const portraitTextEl = document.getElementById("portrait-text")

  const editLandscapeImgEl = document.getElementById("landscape-img")
  const editPortraitImgEl = document.getElementById("portrait-img")




//occasions = []


const displayEl = document.getElementById("display")
const customEditEl = document.getElementById("custom-edit")
const actionButtonsEl = document.getElementById("action-buttons")
const headerLeftEl = document.querySelector(".header-left")

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

let justDragged = false;


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
const bodyAdd = document.getElementById("body-add");
const bodyEdit = document.getElementById("body-edit");
const bodyDel = document.getElementById("body-del");
const resizeEl = document.getElementById("resize");
let resizeCount = 0;

initHelpModal();
initViewHelpModal();
initOccCont();
initBkg();

ham.addEventListener("click", () => {
  navbar.classList.toggle("active");
  actionButtonsEl.classList.toggle("hidden");
  ham.classList.toggle("active");
 /* add.classList.toggle("hidden");*/
});

resizeEl.addEventListener("click", () => {
  resizeCount++;
  changeWidth();
});


/* these are the buttons that show on main screen */
bodyAdd.addEventListener("click", () => {
  occNum++;
  editOccasions('add');
});

bodyDel.addEventListener("click", () => {
  occNum++;
  workIndex = 100;
  editOccasions('del');
});


bodyEdit.addEventListener("click", () => {
  occNum++;
  editOccasions('edit');
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

    /* pinned off on 5/16/23 
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
        */
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
}  //END OF COUNTDOWN FUNCTION

 setInterval(countdown, 1000);

 function isLeapYear(year){
  return (year%4 === 0 && year%100 !==0 || year%400 === 0);
}

function editOccasions(editType){
  
  actionButtonsEl.classList.toggle("hidden");
  if (editType === "add"){
  deleteEl.classList.add("hidden");
  submitEl.classList.add("hidden");
  addEl.classList.remove("hidden");
  let selectEl = document.getElementById("selectOccasion");
  selectEl.classList.add("hidden");
  }

  if (editType === "del"){
    addEl.classList.add("hidden");
    submitEl.classList.add("hidden");
    deleteEl.classList.remove("hidden");
    let selectEl = document.getElementById("selectOccasion");
    selectEl.classList.remove("hidden");
    selectEl.innerHTML = ""
    let el = document.createElement("option");
    el.textContent = "Select Occasion";
    selectEl.appendChild(el);
    for(i = 0; i < customOccasions.length; i++) {
      let opt = customOccasions[i].occ;
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = i;
      selectEl.appendChild(el);
      }
    }


    if (editType === "edit"){
      addEl.classList.add("hidden");
      submitEl.classList.remove("hidden");
      deleteEl.classList.add("hidden");
      let selectEl = document.getElementById("selectOccasion");
      selectEl.classList.remove("hidden");

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

  /*
  landscapeTextEl.addEventListener("keydown", function (event) {
    var key = event.key;
    // If the user has pressed enter
    console.log("key pressed " + landscapeTextEl.value)
    if (key === 'Enter') {
      console.log("enter key pressed " + landscapeTextEl.value)

      editLandscapeImgEl.src = landscapeTextEl.value

       }
  });
*/

  landscapeTextEl.addEventListener("selectionchange", function (event) {
      editLandscapeImgEl.src = landscapeTextEl.value
  });

    portraitTextEl.addEventListener("selectionchange", function (event) {
      editPortraitImgEl.src = portraitTextEl.value
    });


/*
  portraitTextEl.addEventListener("keydown", function (event) {
    var key = event.key;
    // If the user has pressed enter
    console.log("key pressed " + portraitTextEl.value)
    if (key === 'Enter') {
      console.log("enter key pressed " + portraitTextEl.value)

      editPortraitImgEl.src = portraitTextEl.value

       }
  });

*/





 
}



function isDST(d) {
  let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== d.getTimezoneOffset();    
}









function initPreferencesModal() {
// AS OF 5-18-23 THIS FUNCTION IS NOT CALLED

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




    landscapeTextEl.addEventListener("selectionchange", function (event) {
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + landscapeTextEl.value + ")"
      window.localStorage.setItem('background', JSON.stringify(landscapeTextEl.value));
      }
     );

     portraitTextEl.addEventListener("selectionchange", function (event) {
      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + portraitTextEl.value + ")"
      window.localStorage.setItem('background', JSON.stringify(portraitTextEl.value));
      }
     );







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
          actionButtonsEl.classList.toggle("hidden");
          console.log (occasion.occ);
          rNum = 1;
          rNum = occasions.map(x => x.occ).indexOf(occasion.occ)
          navbar.classList.toggle("active");
          ham.classList.toggle("active");
     /*     add.classList.toggle("hidden");*/
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
          actionButtonsEl.classList.toggle("hidden");
          rNum = 1;
          rNum = customOccasions.map(x => x.occ).indexOf(cust.occ) + defaultOccasions.length;
          console.log ("rNum = " + rNum);
          navbar.classList.toggle("active");
          ham.classList.toggle("active");
       /*   add.classList.toggle("hidden");*/
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
      actionButtonsEl.classList.toggle("hidden");
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
            if (landscapeTextEl.value === ""){
              let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
              customObj.landscapeImg = backgroundImagesLandscape[randomImg]; 
            }
            if (landscapeTextEl.value === ""){
              let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
              customObj.portraitImg = backgroundImagesPortrait[randomImg];
            }

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
        displayEl.classList.toggle("hidden");
        customEditEl.classList.toggle("hidden");
        actionButtonsEl.classList.toggle("hidden");

      }); // END OF CANCELEVENT




      deleteEl.addEventListener("click", function (event) {

        if (workIndex === 100){
          return;
        }
        actionButtonsEl.classList.toggle("hidden");
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
        actionButtonsEl.classList.toggle("hidden");
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


/*  let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
  //        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
*/
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
    actionButtonsEl.classList.toggle("hidden");
    modal.style.display = "block";
    helpEl = document.querySelector(".modal-body")
 //   helpEl.innerText = helpText + "\n" + "\n"
    helpEl.innerHTML = helpText
    window.localStorage.setItem('viewedhelpC', "viewed");
    const audio = new Audio ("./auds/stats.mp3");
    audio.play()
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
    actionButtonsEl.classList.toggle("hidden");
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      actionButtonsEl.classList.toggle("hidden");
    }
  });
}



function initViewHelpModal() {
  const modal = document.getElementById("view-help-modal");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-view-help");


  // Open the modal if the user has not read the help
  let timeoutID = setTimeout(function(){
    if (!window.localStorage.getItem("viewedhelpC")){
      modal.style.display = "block";
      viewHelpEl = document.getElementById("view-help")
      viewHelpEl.innerHTML = viewHelpText
    } else {
      return;
    }
}, 2000);




  //  const audio = new Audio ("./auds/stats.mp3");
  //  audio.play()


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




function initOccCont() {
  const occContEl = document.getElementById("occasion-container");
  const leftArrEl = document.getElementById("left-button");
  const rightArrEl = document.getElementById("right-button");

  

  occContEl.addEventListener("click", function (event) {
    event.stopPropagation();
     if (justDragged){
       justDragged = !justDragged
       return;
     }
        console.log("just clicked on occasion container")
     if (occContEl.className === "black-bkg") {
       occContEl.classList.remove("black-bkg");
       occContEl.classList.add("white-bkg");
       leftArrEl.classList.remove("black-bkg");
       leftArrEl.classList.add("white-bkg");
       rightArrEl.classList.remove("black-bkg");
       rightArrEl.classList.add("white-bkg");
       headerLeftEl.classList.remove("black-bkg");
       headerLeftEl.classList.add("white-bkg");
     } else if (occContEl.className === "white-bkg") {
      occContEl.classList.remove("white-bkg");
      occContEl.classList.add("no-bkg-white");
      headerLeftEl.classList.remove("white-bkg");
      headerLeftEl.classList.add("no-bkg-white");
      leftArrEl.classList.remove("white-bkg");
      leftArrEl.classList.add("no-bkg-white");
      rightArrEl.classList.remove("white-bkg");
      rightArrEl.classList.add("no-bkg-white");
    } else if (occContEl.className === "no-bkg-white") {    
      occContEl.classList.remove("no-bkg-white");
      occContEl.classList.add("no-bkg-black");
      headerLeftEl.classList.remove("no-bkg-white");
      headerLeftEl.classList.add("no-bkg-black");
      leftArrEl.classList.remove("no-bkg-white");
      leftArrEl.classList.add("no-bkg-black");
      rightArrEl.classList.remove("no-bkg-white");
      rightArrEl.classList.add("no-bkg-black");
    } else {  
      occContEl.classList.remove("no-bkg-black");
      occContEl.classList.add("black-bkg");
      headerLeftEl.classList.remove("no-bkg-black");
      headerLeftEl.classList.add("black-bkg");
      leftArrEl.classList.remove("no-bkg-black");
      leftArrEl.classList.add("black-bkg");
      rightArrEl.classList.remove("no-bkg-black");
      rightArrEl.classList.add("black-bkg");
    }
    ;
    });


    leftArrEl.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("just clicked on left arrow")
      if (rNum === 0){
        rNum = occasions.length - 1; 
      } else {
        rNum--;
      }
    });


     
    rightArrEl.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("just clicked on right arrow")
      if (rNum === (occasions.length - 1)){
        rNum = 0; 
      } else {
        rNum++;
      }
     });
   

}

function initBkg() {
  const body = document.getElementsByTagName('body')[0];
  body.addEventListener("click", function () {
    console.log("just clicked on body")
    });
}



// NOT USED - PUT HERE AS SAMPLE CODE
function initLook(){
  // Select background image based on portrait or landscape mode but first check for default
  const body = document.getElementsByTagName('body')[0];
  let backgroundImage  = JSON.parse(window.localStorage.getItem('background'));
  console.log("background from localstorage = " + backgroundImage)
//    window.localStorage.setItem('background', JSON.stringify(resultsArray));
  if (backgroundImage === "Random" || !backgroundImage){
    if (window.innerHeight > window.innerWidth){
      let randomImg = Math.floor(Math.random()*backgroundImagesPortrait.length)
//        const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesPortrait[randomImg] + ")";
    } else {  
      let randomImg = Math.floor(Math.random()*backgroundImagesLandscape.length)
//      const body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url(" + backgroundImagesLandscape[randomImg] + ")";
  }
} else {
  body.style.backgroundImage = "url(" + backgroundImage + ")";
}


//  initAudio()
}




// swiped-left
document.addEventListener('swiped-left', function(e) {
  console.log("swiped left")
  if (rNum === (occasions.length - 1)){
    rNum = 0; 
  } else {
    rNum++;
  }
});
// swiped-right
document.addEventListener('swiped-right', function(e) {
  console.log("swiped right")


  if (rNum === 0){
    rNum = occasions.length - 1; 
  } else {
    rNum--;
  }

});
// swiped-up
document.addEventListener('swiped-up', function(e) {
  console.log("swiped up")

  if (rNum === (occasions.length - 1)){
    rNum = 0; 
  } else {
    rNum++;
  }
  
});
// swiped-down
document.addEventListener('swiped-down', function(e) {
  console.log("swiped down")


  if (rNum === 0){
    rNum = occasions.length - 1; 
  } else {
    rNum--;
  }


});





function changeWidth() {


  let change = (resizeCount % 3);
  if (change === 1){
      document.getElementById('occasion-container').style.width = "55vw"
      classArray = document.getElementsByClassName("big-text");
      while (classArray.length) {
        classArray[0].className = "med-text";
      }

      h1Array = document.getElementsByTagName("h1");
      for (i=0; i<h1Array.length; i++) {
        h1Array[i].style.fontSize = "1.6rem";
      }

      timeLiteralsArray = document.getElementsByClassName("time-literals");
      for (i=0; i<timeLiteralsArray.length; i++) {
        timeLiteralsArray[i].style.fontSize = "1.25rem";
      }
    }

    if (change === 2){
      document.getElementById('occasion-container').style.width = "155px"
      classArray = document.getElementsByClassName("med-text");
      while (classArray.length) {
        classArray[0].className = "small-text";
      }

      h1Array = document.getElementsByTagName("h1");
      for (i=0; i<h1Array.length; i++) {
        h1Array[i].style.fontSize = ".95rem";
      }

      timeLiteralsArray = document.getElementsByClassName("time-literals");
      for (i=0; i<timeLiteralsArray.length; i++) {
        timeLiteralsArray[i].style.fontSize = ".75rem";
      }
    }
  

    if (change === 0){
      document.getElementById('occasion-container').style.width = "98vw"
      classArray = document.getElementsByClassName("small-text");
      while (classArray.length) {
        classArray[0].className = "big-text";
      }

      h1Array = document.getElementsByTagName("h1");
      for (i=0; i<h1Array.length; i++) {
        h1Array[i].style.fontSize = "3.5rem";
      }

      timeLiteralsArray = document.getElementsByClassName("time-literals");
      for (i=0; i<timeLiteralsArray.length; i++) {
        timeLiteralsArray[i].style.fontSize = "2.25rem";
      }
    }







}
 


// interact.js code - testing on June 8, 2023

const position = { x: 0, y: 0 }

interact('#occasion-container').draggable({
  listeners: {
    
    start (event) {
      console.log(event.type, event.target)
      justDragged = true;
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})


// trying to get swipe to work
/*
interact('#occasion-container').on('dragend', function (event) {
  console.log('tak wg zyje')
            if (event && event.swipe && event.swipe.left) {
              console.log("poszło w lewo")
            }
            else if (event && event.swipe && event.swipe.right) {
                console.log("poszło w prawo")
            }
        })*/