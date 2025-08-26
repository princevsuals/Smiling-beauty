const page_ = document.getElementById("page-up")
console.log(page_)
const happy_ = document.querySelector(".happy")
console.log(happy_)

setTimeout(() => {
    pageIn()
}, 3000);

function pageIn() {
    page_.classList.add("translate")
    happy_.classList.add("transformer")
}
const paragraph = document.querySelector(".para-one")
console.log(paragraph)
setTimeout(() => {
    paragraph.classList.add("transformer")
}, 6000)

const button = document.querySelector(".butt")
console.log(button)
setTimeout(() => {
    button.classList.add("transformer")
}, 12000)

const array = [
    "Ujunwa, you are the kind of person who makes the world a better place just by being in it. Your smile can light up a room, your kindness touches hearts, and your strength inspires everyone who knows you. You’ve been a source of joy, laughter, and comfort in ways words can barely explain. I feel so lucky to have you in my life, not just as a friend, but as family.",
    "As you step into this new year of your life, I pray that it brings you closer to your dreams, fills your heart with peace, and surrounds you with blessings beyond measure. May every challenge you face turn into a stepping stone toward greatness. May happiness never be far from you, and may love always find its way to your heart.",
    "You deserve nothing but the very best — success that surprises you, laughter that never ends, and memories so sweet they last a lifetime. Never stop believing in yourself, because you are capable of achieving anything you set your mind to. Keep shining bright, because the world truly needs more of your light.",
    "So today, celebrate yourself, dance like no one is watching, laugh until your cheeks hurt, and make the kind of memories that will warm your heart for years to come. Cheers to you, Ujunwa! to your health, your happiness, and the amazing journey ahead of you. 🥂🎂✨",
    "Once again, Happy Birthday, May this year be the most beautiful one yet.",
    "With love and best wishes  Gabriel 💕, and your second husband Ife!",
    "Today is all about celebrating you — a rare gem, a true companion, and a beautiful soul who brightens the lives of everyone around you. On your special day, I just want to take a moment to tell you how much you mean to me and how grateful I am for your friendship."
]
let read = 0;




button.addEventListener("click", clickMe)
function clickMe() {
    read++;
    if (read >= array.length) {
        read = 0
    }
    paragraph.textContent = array[read]
}

document.body.addEventListener("click", () => {
    document.getElementById('music').play();
}, { once: true });