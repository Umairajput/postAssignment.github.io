var blue = document.getElementById("text")
var mainDiv = document.getElementById("main")
function blueImg() {
    blue.style.backgroundImage = "url(blue.jpeg)"
    mainDiv.style.backgroundImage = "url(blue.jpeg)"
}
var red = document.getElementById("text")
function redImg() {
    red.style.backgroundImage = "url(red.jpeg)"
    mainDiv.style.backgroundImage = "url(red.jpeg)"
}
var sky = document.getElementById("text")
function skyBlue () {
    sky.style.backgroundImage = "url(sky-blue.jpeg)"
    mainDiv.style.backgroundImage = "url(sky-blue.jpeg)"
}
var green = document.getElementById("text")
function greenClr () {
    green.style.backgroundImage = "url(green.jpeg)"
    mainDiv.style.backgroundImage = "url(green.jpeg)"
}
var peach = document.getElementById("text")
function peachClr () {
    peach.style.backgroundImage = "url(peach.jpeg)"
    mainDiv.style.backgroundImage = "url(peach.jpeg)"
}
var purple = document.getElementById("text")
function purpleClr () {
    purple.style.backgroundImage = "url(purple.jpeg)"
    mainDiv.style.backgroundImage = "url(purple.jpeg)"
}
function call() {
    var text = document.getElementById("text")
    text.style.display = "none"
    var ans = text.value
    var postDiv = document.createElement("div")
    var postText = document.createTextNode(ans)
    postDiv.appendChild(postText)
    var main = document.getElementById("main")
    main.innerHTML = postDiv.innerHTML
    main.style.height = "150px"
    main.style.marginLeft = "12px"
    main.style.borderRadius = "8px"
    main.style.width = "380"
    main.style.color = "white"
    var btn = document.getElementById("btn")
    btn.style.display = "none"
    var head = document.getElementById("head")
    head.style.display = "none"
    var pic = document.getElementById("pics")
    pic.style.display = "none"
    var span = document.createElement("span")
    var likeText = document.createTextNode("thumb_up_off_alt")
    var like = document.createAttribute("class")
    span.setAttributeNode(like)
    span.appendChild(likeText)
    var spn = document.getElementById("spn")
    spn.classList.add("material-icons");
    spn.style.borderRadius = "5px"
    spn.innerHTML = span.innerHTML
    var span_1 = document.createElement("span")
    var commentText = document.createTextNode(" comment")
    var comment = document.createAttribute("class")
    span_1.setAttributeNode(comment)
    span_1.appendChild(commentText)
    var spn_1 = document.getElementById("span-1")
    spn_1.classList.add("material-icons");
    spn_1.style.borderRadius = "5px"
    spn_1.innerHTML = span_1.innerHTML
    var img1 = document.getElementById("img_1") 
    var createSrc = document.createAttribute("src")
    img1.srcList
}
function likeButton() {
    spn.style.color = "blue"
}
function button() {
    alert("Please Add something and try again")
}
var sky = document.getElementById("text")
function skyImg() {
    sky.style.backgroundImage = "url(sky-blue.jpeg)"
}
var green = document.getElementById("text")
function greenImg() {
    green.style.backgroundImage = "url(green.jpeg)"
}
var peach = document.getElementById("text")
function peachImg() {
    peach.style.backgroundImage = "url(peach.jpeg)"
}
var purple = document.getElementById("text")
function purpleImg() {
    purple.style.backgroundImage = "url(purple.jpeg)"
}