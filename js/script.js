
let menu = document.querySelector('#menu-icon');
let navbar2 = document.querySelector('.navbar2');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar2.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navbar2.classList.remove('open');
};


const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});
/*----------------------------------------------------------*/

function searchCar() {

    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('products1');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('container');
    console.log(cards)


    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".container .info-inner span.p-name ");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}

/*--------------------------------------------------*/
window.addEventListener('load', ()=>{
    let allTab = document.querySelectorAll('.catg-btns');
    let allProject = document.querySelectorAll('.container');

    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click', (event)=>{
            removeActive();
            tab.classList.add('tab-active')

            let fillterName = event.target.getAttribute('data-name');

            allProject.forEach(project=>{
                let projectName = project.getAttribute('data-name')
                if((projectName == fillterName) || fillterName == 'All'){
                    project.style.display = '';
                }else{
                    project.style.display = 'none';
                }
            })
        });
    })
});



/*---------------------------------------------------------------------------*/


ScrollReveal().reveal(".c1", {duration: 1500} , { distance: '50px' } , {scale: 0.85} ,  );
ScrollReveal().reveal(".c2", {duration: 1500} , { distance: '50px' } , {scale: 0.85} ,  );
ScrollReveal().reveal(".c3", {duration: 1500} , { distance: '50px' } , {scale: 0.85} ,  );
ScrollReveal().reveal(".c4", {duration: 1500} , { distance: '50px' } , {scale: 0.85} ,   );
ScrollReveal().reveal(".line", {scale: 0.85}  ,  );
ScrollReveal().reveal(".project-header",  {scale: 0.85}  );
ScrollReveal().reveal(".second-title", { distance: '-50px' }  );
ScrollReveal().reveal(".second-title", { delay: 500 }  );

ScrollReveal().reveal(".home", { delay: 600 }  );
ScrollReveal().reveal(".second", { delay: 500 }  );
ScrollReveal().reveal(".Problem", { delay: 500 }  );
ScrollReveal().reveal(".second-container p", { delay: 500 }  );