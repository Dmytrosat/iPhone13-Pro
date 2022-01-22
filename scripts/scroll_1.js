// document.querySelector('.header-menu__logo').style.border = '1px solid red';
// console.dir(document.querySelector('.header-menu__logo'));

// const link = document.querySelector('.header-menu__item a');
const links = document.querySelectorAll('.header-menu__item a');

seamless.polyfill();

// const array = [1,2,3,4,5,6];

// console.log(link);
// console.log(links);
// links.forEach(function(element, index, array) {
// console.log(element);
// console.log(index);
// console.log(array);
// })

links.forEach((element, index, array) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        // const id = element.getAttribute('href').substr(1)
        const id = element.getAttribute('href').substring(1)
        // const section = document.getElementById('present')
        const section = document.getElementById(id)

        if (section) {
            seamless.elementScrollIntoVieww(section, {
                behavior: 'smooth',
                block: 'start'
            })
            // console.log('yes');
        } else {
            // console.log('no');
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }


            // console.log(section);
            // console.log(id);

        // if(id !== '#') {
        //     const section = document.querySelector(id)
        //     console.log(section);
        // } else {
        //     console.log('У элемента в href просто #');
        // }
        
        // const section = document.querySelector(id)
        // console.log(section);
        // console.log(id);
        // console.log(event);
        // console.log('click');
    })
    // element.addEventListener('click', () => {
    //     console.log('click1');
    // })
    // element.onclick = () => {
    //     console.log('click');
    // }
    // element.onclick = () => {
    //     console.log('click1');
    // }
// console.log(element);
// console.dir(element);
// element.style.border = '1px solid green'
})

// for(let i=0; i< array.length; i++) {
// console.log(array[i]);
// }

// array.forEach((elem) => {
//    console.log(elem);
// })