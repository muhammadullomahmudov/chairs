const elList = document.querySelector('.list')

function renderList(array) {
    elList.innerHTML = ''
    chairs.forEach((el) => {
        elList.innerHTML +=
            `               
          <li class="list__item">
          <a href="./new.html?id=${el.id}"  class="item__link">
              <img src="${el.image}" alt="this is chair img" class="item__img">
              <p class="item__name">${el.name}</p>
              <p class="item__price">$${el.price}</p>
          </a>
      </li>`;
    })
}

renderList()