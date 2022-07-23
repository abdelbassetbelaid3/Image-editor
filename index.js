let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");
let button = document.querySelector(".control-panel__editor__preview label")
let filter_title = document.getElementsByClassName("span")
let rang = document.getElementById("range")

let brightness = 100,
    invert = 0,
    sepia = 0,
    Contrast = 100,
    grayscale = 0,
    saturate = 100;


function reset(){
    image.style = `
    filter: brightness(100%) 
            invert(0%) 
            sepia(0%) 
            Contrast(100%) 
            grayscale(0%) 
            saturate(100%)
`
}

function filter(event){
    var a = event.target;
    console.log(a)
    console.log(filter_title)
    filter_title[0].innerHTML = a.textContent 
}
rang.addEventListener("change",function(event){
    value = filter_title[1].innerHTML = event.target.value + "%"
    image.style.filter = `${filter_title[0].innerHTML}(${value})`
},false)


uploadButton.onchange = () => {
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
        button.style.display = "none"
    }
}
