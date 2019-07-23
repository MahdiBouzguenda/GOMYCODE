function bold() {
    var x = document.getElementById('textareaa')
    console.log(x)
    if (x.style.fontWeight == "normal") {
        console.log('normal')
        x.style.fontWeight = "1000"
    } else {
        console.log('bold')
        x.style.fontWeight = "normal"
    }
}

function italyi() {
    var a = document.getElementById('textareaa')
    if (a.style.fontStyle == "normal") {

        a.style.fontStyle = "italic";
    } else {
        a.style.fontStyle = "normal";
    }
}

function underline() {
    console.log('working')
    var b = document.getElementById('textareaa')
    if (!(b.style.textDecoration == "underline")) {
        b.style.textDecoration = "underline";
    } else {
        b.style.textDecoration = "none"
    }
}

function sizey() {
    console.log('working')
    let a = document.getElementById('textareaa')
    let b = document.getElementById('selectsize').value;
    console.log(a)
    console.log(b)
    a.style.fontSize = b

}

function font() {
    console.log('working')
    let a = document.getElementById('textareaa')
    let b = document.getElementById('selectfont').value;
    console.log(a)
    console.log(b)
    a.style.fontFamily = b

}
$('.carousel').carousel()