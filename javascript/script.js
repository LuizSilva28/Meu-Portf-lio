// BOTÃO/ÍCONE DO MENU 
var icon = document.querySelector(".icon");
var oculto = document.querySelector(".oculto");

icon.onclick = (e) => {
    if (!oculto.classList.contains("asideBar")) {
        oculto.classList.add("asideBar");
    } else {
        oculto.classList.remove("asideBar");
    }
};

// FIM

// BOTÃO/ÍCONE PROJETOS

var iconProject = document.querySelector(".icon-project");
var miniContainerProjetos = document.querySelector(".miniContainer-projetos");

iconProject.onclick = (e) => {
    if (!miniContainerProjetos.classList.contains("mais-projetos")) {
        miniContainerProjetos.classList.add("mais-projetos");
    } else {
        miniContainerProjetos.classList.remove("mais-projetos");
    }
};

// CARROSSEL CARROSSEL CARROSSEL CARROSSEL 

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false ,prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    //showing and hiding prev/next icon according to carousel scroll left value

    //arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  
    //acima, segue uma linha de comando com a mesma função do if abaixo
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting mix scrollable width

    if(carousel.scrollLeft == 0) {
        arrowIcons[0].style.display = "none"
    } else {
        arrowIcons[0].style.display = "block"

    }
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";

    
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        let firstImgWidth = firstImg.clientWidth +16; // getting first img width & adding 14 margin value

        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(),60); //calling showHideIcons after 60ms
        
        

        showHideIcons();
    });
});

const autoSlide = () => {
    // fi there is no image left to scroll then return from here
    if(carousel.scrolling == (carousel.scrollWidth - carousel.clientWidth))return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth +15;
    // getting difference value that needs to add or reduce from carousel left to take middle img center 
    let valDifference = firstImgWidth - positionDiff;
    
    if(carousel.scrollLeft > prevScrollLeft){
        //if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth /3 ? valDifference : -positionDiff ;
    }
    //if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth /3 ? valDifference : -positionDiff ;
    
}

const dragStart = (e) => {
    //updatating global variables value on ,ouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);