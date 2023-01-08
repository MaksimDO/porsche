window.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {
        
        if (event.composedPath().includes(document.querySelector('.footer__selector-title__region'))) {
            document.querySelector('.footer__selector-regions').classList.toggle('footer__selector-regions__active')
        } else {
            document.querySelector('.footer__selector-regions').classList.remove('footer__selector-regions__active')
        }

    })

    document.querySelectorAll('.footer__selector-item__region').forEach(function(item) {item.addEventListener('click', function(event) {
        document.querySelector('.footer__selector-text__region').textContent = event.currentTarget.textContent
    })
    })

    document.addEventListener('click', function(event) {
        
        if (event.composedPath().includes(document.querySelector('.footer__selector-title__country'))) {
            document.querySelector('.footer__selector-countries').classList.toggle('footer__selector-countries__active')
        } else {
            document.querySelector('.footer__selector-countries').classList.remove('footer__selector-countries__active')
        }

    })

    document.querySelectorAll('.footer__selector-item__country').forEach(function(item) {item.addEventListener('click', function(event) {
        document.querySelector('.footer__selector-text__country').textContent = event.currentTarget.textContent
    })
    })



    document.addEventListener('click', function(event) {
        
        if (event.composedPath().includes(document.querySelector('.main-nav__burger'))) {
            document.querySelector('.mainscreen-sub').classList.toggle('mainscreen-sub__active')
        } else {
            document.querySelector('.mainscreen-sub').classList.remove('mainscreen-sub__active')
        }

    })


})