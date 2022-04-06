window.addEventListener('load', slide)

function slide() {
    var img = ['display: block', 'display: none']
    var img1 = document.querySelector('.primeira')
    var img2 = document.querySelector('.segunda')
    var img3 = document.querySelector('.terceira')

    if (img1.style.display == 'none') {
        img3.style = img[1]
        img1.style = img[0]
        img2.style = img[1]
    } else if (img2.style.display == 'none') {
        img3.style = img[1]
        img2.style = img[0]
        img1.style = img[1]
    } else if  (img3.style.display == 'none') {
        img3.style = img[0]
        img2.style = img[1]
        img1.style = img[1]
    }
}

setInterval(slide, 10000)