let carousel = document.querySelector(".carousel-inner")
let modalDialog = document.querySelector('.modal-dialog')



const sendEmail = (params)=>{
    var tmp = {
        from_email: document.getElementById("from_email").value,
        to_name: document.getElementById("to_name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_5v6ok9f","template_z82hvvs",tmp).then((res)=>window.location.reload())
}

const getType = (type)=>{
    if(type==="mealdeal"){
        modalDialog.classList.remove("modal-update")
        carousel.innerHTML = `<div class="carousel-item active">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal1.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal3.jpg" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal4.jpg" alt="Fourth slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal5.jpg" alt="Fifth slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal6.jpg" alt="Sixth slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal7.jpg" alt="Seventh slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/mealdeal/mealdeal8.jpg" alt="Eight slide">
            </div>
            `
    }else if(type==="gossip"){
        modalDialog.classList.add("modal-update")
        carousel.innerHTML = `
        <div class="carousel-item active">
        <img   class="d-block w-100" src="./html/images/prettyPhotoImages/gossip/gossip1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/gossip/gossip2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/gossip/gossip3.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/gossip/gossip4.jpg" alt="Fourth slide">
        </div>
        `
    }else if(type==="technest"){
        modalDialog.classList.add("modal-update")
        carousel.innerHTML = `
        <div class="carousel-item active">
        <img   class="d-block w-100" src="./html/images/prettyPhotoImages/technest/technest1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/technest/technest2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/technest/technest3.jpg" alt="Third slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/technest/technest4.jpg" alt="Fourth slide">
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="./html/images/prettyPhotoImages/technest/technest5.jpg" alt="Fourth slide">
    </div>
        `
    }else if(type==="tetris"){
        modalDialog.classList.add("modal-update")
        carousel.innerHTML = `
        <div class="carousel-item active">
            <img   class="d-block w-100" src="./html/images/prettyPhotoImages/tetris/tetris1.png" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/tetris/tetris2.png" alt="Second slide">
            </div>
        `
    }else if(type==="travel"){
        modalDialog.classList.add("modal-update")
        carousel.innerHTML = `
        <div class="carousel-item active">
            <img   class="d-block w-100" src="./html/images/prettyPhotoImages/travel/travel1.png" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/travel/travel2.png" alt="Second slide">
            </div>
        `
    }else if(type==="bite"){
        modalDialog.classList.add("modal-update")
        carousel.innerHTML = `
        <div class="carousel-item active">
        <img   class="d-block w-100" src="./html/images/prettyPhotoImages/bitehome/bitehome1.png" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/bitehome/bitehome2.png" alt="Second slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/bitehome/bitehome3.png" alt="Third slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/bitehome/bitehome4.png" alt="Fourth slide">
        </div>
        `
    }else if(type==="pedometer"){
        modalDialog.classList.remove("modal-update")
        carousel.innerHTML = `<div class="carousel-item active">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/1.png" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/2.png" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/3.png" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/4.png" alt="Fourth slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/5.png" alt="Fifth slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/6.png" alt="Sixth slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/7.png" alt="Seventh slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/8.png" alt="Eight slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/9.png" alt="n slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/10.png" alt="n slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/11.png" alt="n slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/12.png" alt="n slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/13.png" alt="n slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./html/images/prettyPhotoImages/pedometer/14.png" alt="n slide">
            </div>
            `
    }
}

const addAnimation = (type)=>{
    let items = document.querySelectorAll('.grid-item')
    for(let i of items){
        if(i.classList.contains(type)){
            i.style.position = "relative"
            i.style.opacity = 1
            i.classList.add("animate-item-start")
        }else if(type==="all"){
            i.style.position = "relative"
            i.style.opacity = 1
            i.classList.add("animate-item-start")
        }
        else{
            i.style.position = "absolute"
            i.style.opacity = 0
            i.classList.remove("animate-item-start")
        }
        
    }
}
const x = ()=>{
    let items = document.querySelectorAll('.grid-item')
    for(let i of items){
        i.classList.add("animate-item-start")
    }
}
x()