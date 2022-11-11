let fullDate = document.getElementById("fulldate");

//date
let today = new Date(); 
let day = `${today.getDate() <10?"0": ""} ${today.getDate()}`;
//month
let month = `${(today.getMonth()+ 1)< 10? "0": ""} ${today.getMonth() + 1}`;

let year = today.getFullYear();

fullDate.textContent = `${day}/${month}/${year}`;


//time
class DigitalClock {
    constructor(element){
        this.element = element;
    }

    start(){
        this.update();
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormat = parts.minutes.toString().padStart(2, "0");
        const timeFormat =`${parts.hour}: ${minuteFormat}`
        const clockDesc = parts.isAm? "AM":"PM";

        this.element.querySelector("#clock-time").textContent = timeFormat;
        this.element.querySelector("#clock-desc").textContent= clockDesc
    }

    getTimeParts(){
        const now = new Date();

        return {
            hour: now.getHours()% 12 || 12,
            minutes: now.getMinutes(),
            isAm: now.getHours()<12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObj = new DigitalClock(clockElement);

clockObj.start();

//menu
const menu = document.querySelector(".menu")
const navBar = document.querySelector(".navbar");


menu.addEventListener("click", ()=>{
    if(navBar.classList.contains("show-links")){
        navBar.classList.remove('show-links');
    }
    else{
        navBar.classList.add('show-links');
    }
})
