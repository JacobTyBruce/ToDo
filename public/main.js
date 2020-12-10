const sidebar = document.querySelector('aside')

const openSidebar = document.querySelector('.open-sidebar')

var opened = true;

openSidebar.addEventListener('click', (e) => {
    console.log(e)
    console.log(opened)
    openSidebar.innerHTML = (opened) ? "arrow_right_alt" : "arrow_left";
    anime({
        targets: 'aside',
        translateX: (opened) ? "-40vw" : '0',
        easing: 'linear',
        duration: 250
    })
    anime({
        targets: 'main',
        width: (opened) ? "100vw" : '60vw',
        translateX: (opened) ? "-40vw" : '0',
        easing: 'linear',
        duration: 300
    })
    opened = !opened
    console.log(opened)
})