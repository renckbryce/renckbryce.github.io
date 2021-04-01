window.onscroll = function() {StickyNav()};

let navbar = document.querySelector("nav");
let navOffset = navbar.offsetTop;

let guestList = document.querySelector("#guests");
let numGuests = 0;

// Add behavior for add guest button.
document.getElementById("NewGuestBtn").addEventListener("click", AddGuest);

// Add behavior for RSVP submit
let rsvpForm = document.getElementById("rsvpForm")
rsvpForm.addEventListener("submit", SubmitRsvp)

function StickyNav() {
    if(window.pageYOffset > navOffset) {
        navbar.classList.add("sticky");
        navbar.style.animation="fadeIn 1s";
    }
    else {
        navbar.classList.remove("sticky");
        navbar.style.animation="fadeOut 1s";
    }
}

function AddGuest() {

    let guest = document.createElement("input");
    guest.setAttribute("type", "text");
    guest.setAttribute("id", "guest");
    guest.setAttribute("placeholder", "Guest Name")
    guest.setAttribute("data-guest", numGuests);
    guestList.appendChild(guest);

    let rmBtn = document.createElement("input");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.setAttribute("class", "rmbtn");
    rmBtn.setAttribute("data-guest", numGuests)
    guestList.appendChild(rmBtn);

    rmBtn.addEventListener("click", RemoveGuest);
    
    numGuests++
}

function RemoveGuest(event) {

    let guestNum = event.target.getAttribute("data-guest");
    let guests = document.querySelectorAll("#guest");

    // remove the selected guest
    guests.forEach(item => {
        if(item.getAttribute("data-guest") == guestNum)
        item.remove();
        event.target.remove();
    });
}

function SubmitRsvp(event) {
    
    event.preventDefault();

    // Get all input information from the form
    
}