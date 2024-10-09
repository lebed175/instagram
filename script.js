const galleryItem = document.querySelectorAll('.gallery__item')
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].onclick = function () {
        galleryItem[i].classList.toggle('modal')
        if (galleryItem[i].classList.contains('modal')) {
            document.querySelector('.body').classList.add('no-scroll')
        }
        if (!galleryItem[i].classList.contains('modal')) {
            document.querySelector('.body').classList.remove('no-scroll')
        }
    }
}

document.querySelector('.account__button').onclick = function () {
    if (document.querySelector('.account__button').classList.contains('account__button')) {
        document.querySelector('.account__button').classList.toggle('account__button-active')
        document.querySelector('.account__button').innerHTML = 'Follow'

        if ( document.querySelector('.account__button').classList.contains('account__button-active')) {
            document.querySelector('.account__button').innerHTML = 'Unfollow'
        }
    }
}
