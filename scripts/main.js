const container = document.getElementsByClassName('container')[0];
const scrollable = document.getElementsByClassName('scrollable');

container.addEventListener('mouseenter', () => {
    if (!scrollable[scrollable.length - 1].classList.contains('scroll__finished')) {
        for (let i = 0; i < scrollable.length; i++) {
            setTimeout(() => {
                scrollable[i].classList.add('scroll__finished');
            }, i * 200)
        }
    }
})
container.addEventListener('mouseleave', () => {
    if (scrollable[scrollable.length - 1].classList.contains('scroll__finished')) {
        for (let i = 0; i < scrollable.length; i++) {
            scrollable[i].classList.remove('scroll__finished');
        }
    }
})