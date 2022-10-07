let homeScore = 0
let homeScoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-one")
let homeScoreBtnTwo = document.getElementById("home-score-btn-two")
let homeScoreBtnThree = document.getElementById("home-score-btn-three")


function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent= homeScore
    
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent= homeScore
    
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent= homeScore
    
}

let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScoreBtnOne = document.getElementById("guest-score-btn-one")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-two")
let guestScoreBtnThree = document.getElementById("guest-score-btn-three")


function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent= guestScore
    
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent= guestScore
    
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent= guestScore
    
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}