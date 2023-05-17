const products = [
    {
        src: 'images/burger.jpg',
        alt: 'Гамбургер міні',
        description: 'Гамбургер мині',
        price: 220
    },
    {
        src: 'images/burger.jpg',
        alt: 'Гамбургер міні',
        description: 'Гамбургер мині',
        price: 220
    },
    {
        src: 'images/burger.jpg',
        alt: 'Гамбургер міні',
        description: 'Гамбургер мині',
        price: 220
    }
]

const productsContainer = document.getElementById('products-container');
const showproductsBtn = document.getElementById('show-products-btn');
function addImageToContainer(image) {
    const imageCol = document.createElement('div');
    imageCol.classList.add('col-md-4', 'my-5', 'float-left', 'box');
    imageCol.classList.add(image.classname);

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add('w-100');

    const description = document.createElement('h10');
    description.textContent = image.description;
    description.classList.add('d-none');

    const buy = document.createElement('button');
    buy.innerHTML = 'Купити зараз';
    buy.classList.add("btn");
    buy.classList.add("btn-success");

    const price = document.createElement('h5');
    price.innerHTML = image.price + ' ₴';

    imageCol.appendChild(img);
    imageCol.appendChild(description);
    imageCol.appendChild(price);
    imageCol.appendChild(buy);
    productsContainer.appendChild(imageCol);

    // Додамо обробник події на клік для опису
    description.addEventListener('click', function () {
        description.classList.toggle('d-none');
    });

    // Додамо обробник події на клік для зображення
    img.addEventListener('click', function () {
        description.classList.toggle('d-none');
    });
}

// Додамо обробник події на клік для кнопки
showproductsBtn.addEventListener('click', function () {
    // Приховуємо кнопку
    showproductsBtn.classList.add('d-none');

    // Додаємо кожне зображення до контейнеру
    products.forEach(function (image) {
        addImageToContainer(image);
    });
});
