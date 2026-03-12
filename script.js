const container = document.querySelector('main');

    container.addEventListener('wheel', (event) => {
        // Si el usuario scrollea verticalmente, lo convertimos en horizontal
        if (event.deltaY !== 0) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        }
    });