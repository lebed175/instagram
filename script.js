// Создаём посты при помощи массива
const arrayOfPictures = []
for (let i = 0; i < 6; i++) {
    const image = new Image()
    image.src = `./pictures/section-posts-${i + 1}.png`
    arrayOfPictures.unshift(image)
};

function showPictures() {
    arrayOfPictures.map(el => document.querySelector('.gallery').insertAdjacentElement('afterbegin', el));
    Array.from(document.querySelector('.gallery').children).forEach(el => {
        el.classList.add('gallery__item')
    });
}

showPictures()

// Клик по фотографии (посту)
for (let element of arrayOfPictures) {
    element.onclick = function (click) {
        document.querySelector('.modal').classList.remove('visually-hidden')
        document.querySelector('.modal-content').insertAdjacentElement('afterbegin', element)
        document.querySelector('.modal-content').firstChild.classList.add('try')

        if (!document.querySelector('.modal').classList.contains('visually-hidden')) {
            document.getElementById('body').style.overflow = 'hidden'
        }
    }
}

document.querySelector('.modal').onclick = function (click) {
    if (click.target.classList.contains('modal') && !click.target.classList.contains('modal-content')) {
        document.querySelector('.modal').classList.add('visually-hidden')
        document.querySelector('.modal-content').firstChild.classList.remove('try')

        if (document.querySelector('.modal').classList.contains('visually-hidden')) {
            document.getElementById('body').style.overflow = 'visible'
        }

        showPictures()
    }
}

document.querySelector('.back').onclick = function (click) {
    document.querySelector('.modal').classList.add('visually-hidden')
    document.querySelector('.modal-content').firstChild.classList.remove('try')

    if (document.querySelector('.modal').classList.contains('visually-hidden')) {
        document.getElementById('body').style.overflow = 'visible'
    }

    showPictures()
}

//Кнопка FOLLOW
document.querySelector('.account__button').onclick = function () {
    if (document.querySelector('.account__button').classList.contains('account__button')) {
        document.querySelector('.account__button').classList.toggle('account__button-active')
        document.querySelector('.account__button').innerHTML = 'Follow'

        if (document.querySelector('.account__button').classList.contains('account__button-active')) {
            document.querySelector('.account__button').innerHTML = 'Unfollow'
        }
    }
};





