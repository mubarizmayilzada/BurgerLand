const counter = document.querySelectorAll('.counter');

counter.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 30);
        }
        else{
            counter.innerText = target;
        }
    };
    updateCounter();
}); 