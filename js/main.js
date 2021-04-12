window.onscroll = function() {StickyNav()};

const navbar = document.querySelector("nav");
const navOffset = navbar.offsetTop;

const guestList = document.querySelector(".guestList");
const numGuests = 0;

// Add behavior for add guest button.
document.getElementById("NewGuestBtn").addEventListener("click", AddGuest);

// Add behavior for RSVP submit
const rsvpForm = document.getElementById("rsvpForm");
rsvpForm.addEventListener("submit", SubmitRsvp);

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

lightbox.addEventListener("click", e => {
    if(e.target != e.currentTarget) return;
    lightbox.classList.remove("active");
})

galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        if(lightbox.firstChild)
        {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img);
    });
});

function StickyNav() {
    if(window.pageYOffset > navOffset) {
        navbar.classList.add("sticky");
        navbar.style.animation="fadeIn 1s";
    }
    else if(navbar.classList.contains("sticky")){
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
    rmBtn.setAttribute("value", "Remove  Guest");
    rmBtn.classList.add("rmbtn");
    rmBtn.setAttribute("data-guest", numGuests);
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
    console.log(document.querySelectorAll("#rsvpForm input[type=text]"));
    console.log(document.querySelectorAll("#rsvpForm input[type=radio]"));
    
}