let se7Names = document.querySelectorAll(".se7-name");

se7Names.forEach(se7Name => {
    se7Name.addEventListener('mouseover', () => {
        se7Name.style.backgroundColor = "#000";
        se7Name.style.opacity = "0.6";
    });

    se7Name.addEventListener('mouseout', () => {
        se7Name.style.opacity = "0";
    });
});

let size = document.querySelectorAll(".size");


size.forEach(size => {
    size.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let BoxWidth = size.clientWidth;
        let BoxHeight = size.clientHeight;
        let moveX = (x - BoxWidth / 2);
        let moveY = (y - BoxHeight / 2);

        size.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    })

    size.addEventListener('mouseout', (e) => {
        size.style.transform = ``;
    });
});
