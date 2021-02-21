const search = document.querySelector('.search');
const liElements = document.querySelectorAll('li');

const searchEngine = () => {
    const text = search.value.toLowerCase();

    liElements.forEach(el => {
        if(el.innerHTML.toLowerCase().includes(text)) {  
            el.style.display = 'block';
        }else {
            el.style.display = 'none';
        }
    });
}

search.addEventListener('keyup', searchEngine);




