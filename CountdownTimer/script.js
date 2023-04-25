const noOfDays = document.querySelector('#days');
const noOfHours = document.querySelector('#hours')
const noOfMinutes = document.querySelector('#minutes');
const nofOfSeconds = document.querySelector('#seconds');


const Target = "24 May 2023"

const Timer = ()=>{
    const TargetDate = new Date(Target)
    const CurrentDate  = new Date()
    const TotalSeconds = Math.floor(TargetDate - CurrentDate) / 1000
    const days = Math.floor(TotalSeconds/3600/24)
    const hours = Math.floor(TotalSeconds/3600) % 24
    const minutes = Math.floor(TotalSeconds / 3600) % 60
    const seconds = Math.floor(TotalSeconds) % 60
    noOfDays.innerHTML = `${days} Days`
    noOfHours.innerHTML = `${hours} Hours`
    noOfMinutes.innerHTML =`${minutes} Minutes`
    nofOfSeconds.innerHTML = `${seconds} seconds` 

}
setInterval(Timer , 1000)


