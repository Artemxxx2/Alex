select1 = document.querySelector('#sel1')
select2 = document.querySelector('#sel2')
val1 = document.querySelector('#val1')
val2 = document.querySelector('#val2')
// carouselItems
galleryItemWhite = document.querySelector('.WHITECAROUSEL')
galleryItemBlack = document.querySelector('.BLACKCAROUSEL')
galleryItemGrey = document.querySelector('.GREYCAROUSEL')

select1.addEventListener('change', function(){  
    let getValue = this.value;
    val1.innerHTML = getValue
    console.log(this.value);
    if (this.value === 'BLACK') {
        galleryItemBlack.classList.add('active')
        console.log(galleryItemBlack);
    }
    else if (this.value === 'WHITE') {
        galleryItemWhite.classList.add('active')
    }
    else {
        galleryItemGrey.classList.add('active')
    }
});
select2.addEventListener('change', function(){  
    let getValue = this.value;
    val2.innerHTML = getValue
});