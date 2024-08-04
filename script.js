const images = document.querySelectorAll('.img')

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        remove_class(images)
        img.classList.add('show-img1')
    })
})

function remove_class (images) {
    images.forEach(img => {
        img.classList.remove('show-img1')
    })
}