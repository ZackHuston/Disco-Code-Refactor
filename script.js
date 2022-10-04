var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
var currentHour = date.getHours();


hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var container = document.querySelector('.container')

for (let index = 0; index < hours.length; index++) {
    var outerDiv = document.createElement('div')
    outerDiv.classList.add('row', 'time-block')
    outerDiv.innerHTML = `<div class="col-md-1 hour">${getTimeLabel(hours[index])}</div>
    <textarea class="col-md-10 description ${getColorClass(hours[index])}"></textarea>
    <button class="col-md-1 saveBtn btns" data-hour=${hours[index]}>
      <i class="fas fa-save"></i>
    </button>`
    container.append(outerDiv)
}

var buttonsArray = document.querySelectorAll('.btns')
buttonsArray.forEach(function(button){
    button.addEventListener('click', function(event){
        var hour = event.currentTarget.dataset.hour
        var text = event.currentTarget.parentElement.children[1].value
        localStorage.setItem(hour, text)
    })
})

function getColorClass(hour){
    if (hour < currentHour) return "past"
    else if (hour == currentHour) return "present"
    else return "future"
}

function getTimeLabel(hour) {
   
    switch (hour) {
        case 9:
            return '9 AM'
        case 10:
            return "10 AM"
        case 11:
            return "11 AM"
        case 12:
            return "12 PM"
        case 13:
            return "1 PM"
        case 14:
            return "2 PM"
        case 15:
            return "3 PM"
        case 16:
            return "4 PM"
        case 17:
            return "5 PM"
        default:
            return 'default'
    }
}

// if (hours >=  )  { 
//       document.querySelector('.nine').style.backgroundColor = 'red' 
// } 
// if (time >= 1, 10 )  { 
//     document.querySelector(".ten").style.backgroundColor = 'red' 
// } 
// if (time >= 2, 11 )  { 
//     document.querySelector('.eleven').style.backgroundColor = 'red' 
// } 
// if (time >= 3, 12 )  { 
//     document.querySelector('.twelve').style.backgroundColor = 'red' 
// } 
// if (time >= 4, 13 )  { 
//     document.querySelector('.one').style.backgroundColor = 'red' 
// } 
// if (time >= 5, 14)  { 
//     document.querySelector('.two').style.backgroundColor = 'red' 
// } 
// if (time >= 6, 15 )  { 
//     document.querySelector('.three').style.backgroundColor = 'red' 
// } 
// if (time >= 7, 16)  { 
//     document.querySelector('.four').style.backgroundColor = 'red' 
// } 
// if (time >= 8, 17 )  { 
//     document.querySelector('.five').style.backgroundColor = 'red' 
// } 
00


// var input = document.getElementById('first').value;
// localStorage.setItem('server', input);

// document.getElementById('first').value = localStorage.getItem('server');




// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist