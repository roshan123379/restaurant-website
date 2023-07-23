export function home(){
    const homeHeader = document.querySelector('.homeHeader')
    const logo = document.createElement('div')
    logo.classList.add('logo')
    logo.textContent="HOTEL"
    homeHeader.appendChild(logo)

    

    const home = document.createElement('button')
    home.classList.add('home')
    home.textContent="Home"
    home.style.width="3cm"
    homeHeader.appendChild(home)

    

}


export function homeContent(){
    const homeContent = document.createElement("div")
    homeContent.classList.add("homeContent")
    container.appendChild(homeContent)
}

export function banner1(){
    const homeContent =document.querySelector('.homeContent')
    const banner = document.createElement('div')
    banner.classList.add('banner')
    homeContent.appendChild(banner)

    const baner = document.querySelector(".banner")
    const bannerDiv1 = document.createElement('div')
    bannerDiv1.classList.add('bannerDiv1')
    baner.appendChild(bannerDiv1)

    const bannerdiv1 = document.querySelector('.bannerDiv1')
    const bannerHeading = document.createElement('p')
    bannerHeading.classList.add('bannerHeading')
    bannerHeading.textContent="Welcome to our best restourant food "
    bannerdiv1.appendChild(bannerHeading)

    
    const bannerPara = document.createElement('p')
    bannerPara.classList.add('bannerPara')
    bannerPara.textContent=" In our restourant best food aur surve to customer. The speciality of our restorant is pav bhaji , whenever you eat you loved it. So come to our restourant with your family, i give you  gareentee to your family that is love our food. Our restourant is under the best area and best parking service we are provided.  "
    bannerdiv1.appendChild(bannerPara)

    const bannerDiv2 = document.createElement('div')
    bannerDiv2.classList.add('bannerDiv2')
    baner.appendChild(bannerDiv2)

    const bannerdiv2 = document.querySelector('.bannerDiv2')
    const bannerImg = document.createElement('img')
    bannerImg.classList.add('bannerImg')
    bannerImg.src="https://img.freepik.com/premium-vector/bruschetta-with-various-vegetable-round-plate-isolated_1639-24656.jpg?w=2000"
    bannerdiv2.appendChild(bannerImg)

    const bookButton = document.createElement('button')
    bookButton.classList.add("bookButton")
    bookButton.textContent="Book a table"
    bannerdiv1.appendChild(bookButton)
}

export function homeMainContent(){
    const homeContent =document.querySelector('.homeContent')
    const content = document.createElement('div')
    content.classList.add('content')
    homeContent.appendChild(content)

    const contentt = document.querySelector('.content')
    const contentHeading = document.createElement('p')
    contentHeading.classList.add('contentHeading')
    contentHeading.textContent="Some special food in our Restourant"
    
    contentt.appendChild(contentHeading)

    const divs = document.createElement('div')
    divs.classList.add('divs')
    contentt.appendChild(divs)

    const div1 = document.createElement('div')
    div1.classList.add('div1')
    divs.appendChild(div1)

    const div2 = document.createElement('div')
    div2.classList.add('div2')
    divs.appendChild(div2)

    const div3 = document.createElement('div')
    div3.classList.add('div3')
    divs.appendChild(div3)

    const div4 = document.createElement('div')
    div4.classList.add('div4')
    divs.appendChild(div4)

    const div5 = document.createElement('div')
    div5.classList.add('div5')
    divs.appendChild(div5)

    const div6 = document.createElement('div')
    div6.classList.add('div6')
    divs.appendChild(div6)

    const Div1 = document.querySelector('.div1')
    const img1= document.createElement('img')
    img1.classList.add('img1')
    img1.src="https://holycowvegan.net/wp-content/uploads/2009/06/pav-bhaji-12.jpg"
    Div1.appendChild(img1)

    const name1 = document.createElement('p')
    name1.classList.add('name1')
    name1.textContent='Pav Bhaji'
    Div1.appendChild(name1)

    const rate1 = document.createElement('p')
    rate1.classList.add('rate1')
    rate1.textContent='140 Rs'
    Div1.appendChild(rate1)

    const add1 = document.createElement('button')
    add1.classList.add('menuAdd1')
    add1.textContent='Add'
    Div1.appendChild(add1)

    const remove34 = document.createElement("div")
    remove34.classList.add("remove34")
    remove34.textContent="Remove"
    remove34.style.display="none"
    Div1.appendChild(remove34)

    
    const Div2 = document.querySelector('.div2')
    const img2= document.createElement('img')
    img2.classList.add('img2')
    img2.src="https://i.pinimg.com/736x/0a/77/4f/0a774f8291e10f7caf519347483eb2c3.jpg"
    Div2.appendChild(img2)

    const name2 = document.createElement('p')
    name2.classList.add('name2')
    name2.textContent='Chhole Bhature'
    Div2.appendChild(name2)

    const rate2 = document.createElement('p')
    rate2.classList.add('rate2')
    rate2.textContent="90 Rs"
    Div2.appendChild(rate2)

    const add2 = document.createElement('button')
    add2.classList.add('menuAdd2')
    add2.textContent='Add'
    Div2.appendChild(add2)

    const remove35 = document.createElement("div")
    remove35.classList.add("remove35")
    remove35.textContent="Remove"
    remove35.style.display="none"
    Div2.appendChild(remove35)


    const Div3 = document.querySelector('.div3')
    const img3= document.createElement('img')
    img3.classList.add('img3')
    img3.src="https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail.jpg"
    Div3.appendChild(img3)

    const name3 = document.createElement('p')
    name3.classList.add('name3')
    name3.textContent='Gulab jamun'
    Div3.appendChild(name3)

    const rate3 = document.createElement('p')
    rate3.classList.add('rate3')
    rate3.textContent='70 Rs'
    Div3.appendChild(rate3)

    const add3 = document.createElement('button')
    add3.classList.add('menuAdd3')
    add3.textContent='Add'
    Div3.appendChild(add3)

    const remove36 = document.createElement("div")
    remove36.classList.add("remove36")
    remove36.textContent="Remove"
    remove36.style.display="none"
    Div3.appendChild(remove36)


    const Div4 = document.querySelector('.div4')
    const img4= document.createElement('img')
    img4.classList.add('img4')
    img4.src="https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"
    Div4.appendChild(img4)

    const name4 = document.createElement('p')
    name4.classList.add('name4')
    name4.textContent='Lassi'
    Div4.appendChild(name4)

    const rate4 = document.createElement('p')
    rate4.classList.add('rate4')
    rate4.textContent='70 Rs'
    Div4.appendChild(rate4)

    const add4 = document.createElement('button')
    add4.classList.add('menuAdd4')
    add4.textContent='Add'
    Div4.appendChild(add4)

    const remove37 = document.createElement("div")
    remove37.classList.add("remove37")
    remove37.textContent="Remove"
    remove37.style.display="none"
    Div4.appendChild(remove37)


    const Div5 = document.querySelector('.div5')
    const img5= document.createElement('img')
    img5.classList.add('img5')
    img5.src="https://smithakalluraya.com/wp-content/uploads/2019/06/aloo-sandwich-recipe.jpg"
    Div5.appendChild(img5)

    const name5 = document.createElement('p')
    name5.classList.add('name5')
    name5.textContent='Aloo Sandwich'
    Div5.appendChild(name5)

    const rate5 = document.createElement('p')
    rate5.classList.add('rate5')
    rate5.textContent='90 Rs'
    Div5.appendChild(rate5)

    const add5 = document.createElement('button')
    add5.classList.add('menuAdd5')
    add5.textContent='Add'
    Div5.appendChild(add5)

    const remove38 = document.createElement("div")
    remove38.classList.add("remove38")
    remove38.textContent="Remove"
    remove38.style.display="none"
    Div5.appendChild(remove38)



    const Div6 = document.querySelector('.div6')
    const img6= document.createElement('img')
    img6.classList.add('img6')
    img6.src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/06/15162526/best-misal-pav-in-pune.jpg?tr=w-1200,h-900"
    Div6.appendChild(img6)

    const name6 = document.createElement('p')
    name6.classList.add('name6')
    name6.textContent='Misal Pav'
    Div6.appendChild(name6)

    const rate6 = document.createElement('p')
    rate6.classList.add('rate6')
    rate6.textContent='100 Rs'
    Div6.appendChild(rate6)

    const add6 = document.createElement('button')
    add6.classList.add('menuAdd6')
    add6.textContent='Add'
    Div6.appendChild(add6)

    const remove39 = document.createElement("div")
    remove39.classList.add("remove39")
    remove39.textContent="Remove"
    remove39.style.display="none"
    Div6.appendChild(remove39)
    
}
export function tiffin(){
    const cart =document.querySelector(".cart")

    /*-------CART-1--------*/
   
    const cartList1 = document.createElement('nav')
    cartList1.classList.add('cartList1')
    cartList1.style.display="none"
    cart.appendChild(cartList1)

    const cartlist1 = document.querySelector('.cartList1')
    
    const nameCart1 = document.createElement('div')
    nameCart1.classList.add('nameCart1')
    cartlist1.appendChild(nameCart1)

    const priceCart1 = document.createElement('div')
    priceCart1.classList.add('priceCart1')
    cartlist1.appendChild(priceCart1)

    
    
    /*-------CART-2--------*/

    const cartList2 = document.createElement('div')
    cartList2.classList.add('cartList2')
    cartList2.style.display="none"
    cart.appendChild(cartList2)

    const cartlist2 = document.querySelector('.cartList2')

    const nameCart2 = document.createElement('div')
    nameCart2.classList.add('nameCart2')
    cartlist2.appendChild(nameCart2)

    const priceCart2 = document.createElement('div')
    priceCart2.classList.add('priceCart2')
    cartList2.appendChild(priceCart2)

    /*-------CART-3--------*/

    const cartList3 = document.createElement('div')
    cartList3.classList.add('cartList3')
    cartList3.style.display="none"
    cart.appendChild(cartList3)

    const cartlist3 = document.querySelector('.cartList3')

    const nameCart3 = document.createElement('div')
    nameCart3.classList.add('nameCart3')
    
    cartlist3.appendChild(nameCart3)

    const priceCart3 = document.createElement('div')
    priceCart3.classList.add('priceCart3')
    cartList3.appendChild(priceCart3)

    /*-------CART-4--------*/

    const cartList4 = document.createElement('div')
    cartList4.classList.add('cartList4')
    cartList4.style.display="none"
    cart.appendChild(cartList4)

    const cartlist4 = document.querySelector('.cartList4')

    const nameCart4 = document.createElement('div')
    nameCart4.classList.add('nameCart4')
    cartlist4.appendChild(nameCart4)

    const priceCart4 = document.createElement('div')
    priceCart4.classList.add('priceCart4')
    cartList4.appendChild(priceCart4)

    /*-------CART-5--------*/

    const cartList5 = document.createElement('div')
    cartList5.classList.add('cartList5')
    cartList5.style.display="none"
    cart.appendChild(cartList5)

    const cartlist5 = document.querySelector('.cartList5')

    const nameCart5 = document.createElement('div')
    nameCart5.classList.add('nameCart5')
    cartlist5.appendChild(nameCart5)

    const priceCart5 = document.createElement('div')
    priceCart5.classList.add('priceCart5')
    cartList5.appendChild(priceCart5)

    /*-------CART-6--------*/

    const cartList6 = document.createElement('div')
    cartList6.classList.add('cartList6')
    cartList6.style.display="none"
    cart.appendChild(cartList6)

    const cartlist6 = document.querySelector('.cartList6')

    const nameCart6 = document.createElement('div')
    nameCart6.classList.add('nameCart6')
    cartlist6.appendChild(nameCart6)

    const priceCart6 = document.createElement('div')
    priceCart6.classList.add('priceCart6')
    cartList6.appendChild(priceCart6)

    /*-------CART-7--------*/

    const cartList7 = document.createElement('div')
    cartList7.classList.add('cartList7')
    cartList7.style.display="none"
    cart.appendChild(cartList7)

    const cartlist7 = document.querySelector('.cartList7')

    const nameCart7 = document.createElement('div')
    nameCart7.classList.add('nameCart7')
    cartlist7.appendChild(nameCart7)

    const priceCart7 = document.createElement('div')
    priceCart7.classList.add('priceCart7')
    cartList7.appendChild(priceCart7)

    /*-------CART-8--------*/

    const cartList8 = document.createElement('div')
    cartList8.classList.add('cartList8')
    cartList8.style.display="none"
    cart.appendChild(cartList8)

    const cartlist8 = document.querySelector('.cartList8')

    const nameCart8 = document.createElement('div')
    nameCart8.classList.add('nameCart8')
    cartlist8.appendChild(nameCart8)

    const priceCart8 = document.createElement('div')
    priceCart8.classList.add('priceCart8')
    cartList8.appendChild(priceCart8)

    /*-------CART-9--------*/

    const cartList9 = document.createElement('div')
    cartList9.classList.add('cartList9')
    cartList9.style.display="none"
    cart.appendChild(cartList9)

    const cartlist9 = document.querySelector('.cartList9')

    const nameCart9 = document.createElement('div')
    nameCart9.classList.add('nameCart9')
    cartlist9.appendChild(nameCart9)

    const priceCart9 = document.createElement('div')
    priceCart9.classList.add('priceCart9')
    cartList9.appendChild(priceCart9)

    /*-------CART-10--------*/

    const cartList10 = document.createElement('div')
    cartList10.classList.add('cartList10')
    cartList10.style.display="none"
    cart.appendChild(cartList10)

    const cartlist10 = document.querySelector('.cartList10')
    const nameCart10 = document.createElement('div')
    nameCart10.classList.add('nameCart10')
    
    cartlist10.appendChild(nameCart10)
    const priceCart10 = document.createElement('div')
    priceCart10.classList.add('priceCart10')
    
    cartList10.appendChild(priceCart10)

    /*-------CART-11--------*/

    const cartList11 = document.createElement('div')
    cartList11.classList.add('cartList11')
    cartList11.style.display="none"
    cart.appendChild(cartList11)

    const cartlist11 = document.querySelector('.cartList11')

    const nameCart11 = document.createElement('div')
    nameCart11.classList.add('nameCart11')
    cartlist11.appendChild(nameCart11)

    const priceCart11 = document.createElement('div')
    priceCart11.classList.add('priceCart11')
    cartList11.appendChild(priceCart11)

    /*-------CART-12--------*/

    const cartList12 = document.createElement('div')
    cartList12.classList.add('cartList12')
    cartList12.style.display="none"
    cart.appendChild(cartList12)

    const cartlist12 = document.querySelector('.cartList12')

    const nameCart12 = document.createElement('div')
    nameCart12.classList.add('nameCart12')
    cartlist12.appendChild(nameCart12)

    const priceCart12 = document.createElement('div')
    priceCart12.classList.add('priceCart12')
    cartList12.appendChild(priceCart12)

    /*-------CART-13--------*/

    const cartList13 = document.createElement('div')
    cartList13.classList.add('cartList13')
    cartList13.style.display="none"
    cart.appendChild(cartList13)

    const cartlist13 = document.querySelector('.cartList13')

    const nameCart13 = document.createElement('div')
    nameCart13.classList.add('nameCart13')
    cartlist13.appendChild(nameCart13)

    const priceCart13 = document.createElement('div')
    priceCart13.classList.add('priceCart13')
    cartList13.appendChild(priceCart13)

    /*-------CART-14--------*/

    const cartList14 = document.createElement('div')
    cartList14.classList.add('cartList14')
    cartList14.style.display="none"
    cart.appendChild(cartList14)

    const cartlist14 = document.querySelector('.cartList14')

    const nameCart14 = document.createElement('div')
    nameCart14.classList.add('nameCart14')
    cartlist14.appendChild(nameCart14)

    const priceCart14 = document.createElement('div')
    priceCart14.classList.add('priceCart14')
    cartList14.appendChild(priceCart14)

    /*-------CART-15--------*/

    const cartList15 = document.createElement('div')
    cartList15.classList.add('cartList15')
    cartList15.style.display="none"
    cart.appendChild(cartList15)

    const cartlist15 = document.querySelector('.cartList15')

    const nameCart15 = document.createElement('div')
    nameCart15.classList.add('nameCart15')
    cartlist15.appendChild(nameCart15)

    const priceCart15 = document.createElement('div')
    priceCart15.classList.add('priceCart15')
    cartList15.appendChild(priceCart15)

    /*-------CART-16--------*/

    const cartList16 = document.createElement('div')
    cartList16.classList.add('cartList16')
    cartList16.style.display="none"
    cart.appendChild(cartList16)

    const cartlist16 = document.querySelector('.cartList16')

    const nameCart16 = document.createElement('div')
    nameCart16.classList.add('nameCart16')
    cartlist16.appendChild(nameCart16)

    const priceCart16 = document.createElement('div')
    priceCart16.classList.add('priceCart16')
    cartlist16.appendChild(priceCart16)

    /*-------CART-17--------*/

    const cartList17 = document.createElement('div')
    cartList17.classList.add('cartList17')
    cartList17.style.display="none"
    cart.appendChild(cartList17)

    const cartlist17 = document.querySelector('.cartList17')

    const nameCart17 = document.createElement('div')
    nameCart17.classList.add('nameCart17')
    cartlist17.appendChild(nameCart17)

    const priceCart17 = document.createElement('div')
    priceCart17.classList.add('priceCart17')
    cartList17.appendChild(priceCart17)

    /*-------CART-18--------*/

    const cartList18 = document.createElement('div')
    cartList18.classList.add('cartList18')
    cartList18.style.display="none"
    cart.appendChild(cartList18)

    const cartlist18 = document.querySelector('.cartList18')

    const nameCart18 = document.createElement('div')
    nameCart18.classList.add('nameCart18')
    cartlist18.appendChild(nameCart18)

    const priceCart18 = document.createElement('div')
    priceCart18.classList.add('priceCart18')
    cartList18.appendChild(priceCart18)

    /*-------CART-19--------*/

    const cartList19 = document.createElement('div')
    cartList19.classList.add('cartList19')
    cartList19.style.display="none"
    cart.appendChild(cartList19)

    const cartlist19 = document.querySelector('.cartList19')

    const nameCart19 = document.createElement('div')
    nameCart19.classList.add('nameCart19')
    cartlist19.appendChild(nameCart19)

    const priceCart19 = document.createElement('div')
    priceCart19.classList.add('priceCart19')
    cartList19.appendChild(priceCart19)

    /*-------CART-20--------*/

    const cartList20 = document.createElement('div')
    cartList20.classList.add('cartList20')
    cartList20.style.display="none"
    cart.appendChild(cartList20)

    const cartlist20 = document.querySelector('.cartList20')

    const nameCart20 = document.createElement('div')
    nameCart20.classList.add('nameCart20')
    cartlist20.appendChild(nameCart20)

    const priceCart20 = document.createElement('div')
    priceCart20.classList.add('priceCart20')
    cartList20.appendChild(priceCart20)

    /*-------CART-21--------*/

    const cartList21 = document.createElement('div')
    cartList21.classList.add('cartList21')
    cartList21.style.display="none"
    cart.appendChild(cartList21)

    const cartlist21 = document.querySelector('.cartList21')

    const nameCart21 = document.createElement('div')
    nameCart21.classList.add('nameCart21')
    cartlist21.appendChild(nameCart21)

    const priceCart21 = document.createElement('div')
    priceCart21.classList.add('priceCart21')
    cartList21.appendChild(priceCart21)

    /*-------CART-22--------*/

    const cartList22 = document.createElement('div')
    cartList22.classList.add('cartList22')
    cartList22.style.display="none"
    cart.appendChild(cartList22)

    const cartlist22 = document.querySelector('.cartList22')

    const nameCart22 = document.createElement('div')
    nameCart22.classList.add('nameCart22')
    cartlist22.appendChild(nameCart22)

    const priceCart22 = document.createElement('div')
    priceCart22.classList.add('priceCart22')
    cartList22.appendChild(priceCart22)

    /*-------CART-23--------*/

    const cartList23 = document.createElement('div')
    cartList23.classList.add('cartList23')
    cartList23.style.display="none"
    cart.appendChild(cartList23)

    const cartlist23 = document.querySelector('.cartList23')

    const nameCart23 = document.createElement('div')
    nameCart23.classList.add('nameCart23')
    cartlist23.appendChild(nameCart23)

    const priceCart23 = document.createElement('div')
    priceCart23.classList.add('priceCart23')
    cartList23.appendChild(priceCart23)

    /*-------CART-24--------*/

    const cartList24 = document.createElement('div')
    cartList24.classList.add('cartList24')
    cartList24.style.display="none"
    cart.appendChild(cartList24)

    const cartlist24 = document.querySelector('.cartList24')

    const nameCart24 = document.createElement('div')
    nameCart24.classList.add('nameCart24')
    cartlist24.appendChild(nameCart24)

    const priceCart24 = document.createElement('div')
    priceCart24.classList.add('priceCart24')
    cartList24.appendChild(priceCart24)

    /*-------CART-25--------*/

    const cartList25 = document.createElement('div')
    cartList25.classList.add('cartList25')
    cartList25.style.display="none"
    cart.appendChild(cartList25)

    const cartlist25 = document.querySelector('.cartList25')

    const nameCart25 = document.createElement('div')
    nameCart25.classList.add('nameCart25')
    cartlist25.appendChild(nameCart25)

    const priceCart25 = document.createElement('div')
    priceCart25.classList.add('priceCart25')
    cartList25.appendChild(priceCart25)

    /*-------CART-26--------*/

    const cartList26 = document.createElement('div')
    cartList26.classList.add('cartList26')
    cartList26.style.display="none"
    cart.appendChild(cartList26)

    const cartlist26 = document.querySelector('.cartList26')

    const nameCart26 = document.createElement('div')
    nameCart26.classList.add('nameCart26')
    cartlist26.appendChild(nameCart26)

    const priceCart26 = document.createElement('div')
    priceCart26.classList.add('priceCart26')
    cartList26.appendChild(priceCart26)

    /*-------CART-27--------*/

    const cartList27 = document.createElement('div')
    cartList27.classList.add('cartList27')
    cartList27.style.display="none"
    cart.appendChild(cartList27)

    const cartlist27 = document.querySelector('.cartList27')

    const nameCart27 = document.createElement('div')
    nameCart27.classList.add('nameCart27')
    cartlist27.appendChild(nameCart27)

    const priceCart27 = document.createElement('div')
    priceCart27.classList.add('priceCart27')
    cartList27.appendChild(priceCart27)

    /*-------CART-28--------*/

    const cartList28 = document.createElement('div')
    cartList28.classList.add('cartList28')
    cartList28.style.display="none"
    cart.appendChild(cartList28)

    const cartlist28 = document.querySelector('.cartList28')

    const nameCart28 = document.createElement('div')
    nameCart28.classList.add('nameCart28')
    cartlist28.appendChild(nameCart28)

    const priceCart28 = document.createElement('div')
    priceCart28.classList.add('priceCart28')
    cartList28.appendChild(priceCart28)

    /*-------CART-29--------*/

    const cartList29 = document.createElement('div')
    cartList29.classList.add('cartList29')
    cartList29.style.display="none"
    cart.appendChild(cartList29)

    const cartlist29 = document.querySelector('.cartList29')

    const nameCart29 = document.createElement('div')
    nameCart29.classList.add('nameCart29')
    cartlist29.appendChild(nameCart29)

    const priceCart29 = document.createElement('div')
    priceCart29.classList.add('priceCart29')
    cartList29.appendChild(priceCart29)

    /*-------CART-30---------*/

    const cartList30 = document.createElement('div')
    cartList30.classList.add('cartList30')
    cartList30.style.display="none"
    cart.appendChild(cartList30)

    const cartlist30 = document.querySelector('.cartList30')

    const nameCart30 = document.createElement('div')
    nameCart30.classList.add('nameCart30')
    cartlist30.appendChild(nameCart30)

    const priceCart30 = document.createElement('div')
    priceCart30.classList.add('priceCart30')
    cartList30.appendChild(priceCart30)

    /*-------CART-31--------*/

    const cartList31 = document.createElement('div')
    cartList31.classList.add('cartList31')
    cartList31.style.display="none"
    cart.appendChild(cartList31)

    const cartlist31 = document.querySelector('.cartList31')

    const nameCart31 = document.createElement('div')
    nameCart31.classList.add('nameCart31')
    cartlist31.appendChild(nameCart31)

    const priceCart31 = document.createElement('div')
    priceCart31.classList.add('priceCart31')
    cartList31.appendChild(priceCart31)

    /*-------CART-32--------*/

    const cartList32 = document.createElement('div')
    cartList32.classList.add('cartList32')
    cartList32.style.display="none"
    cart.appendChild(cartList32)

    const cartlist32 = document.querySelector('.cartList32')

    const nameCart32 = document.createElement('div')
    nameCart32.classList.add('nameCart32')
    cartlist32.appendChild(nameCart32)

    const priceCart32 = document.createElement('div')
    priceCart32.classList.add('priceCart32')
    cartList32.appendChild(priceCart32)

    /*-------CART-34--------*/

    const cartList34 = document.createElement('div')
    cartList34.classList.add('cartList34')
    cartList34.style.display="none"
    cart.appendChild(cartList34)

    const cartlist34 = document.querySelector('.cartList34')

    const nameCart34 = document.createElement('div')
    nameCart34.classList.add('nameCart34')
    cartlist34.appendChild(nameCart34)

    const priceCart34 = document.createElement('div')
    priceCart34.classList.add('priceCart34')
    cartList34.appendChild(priceCart34)

    /*-------CART-35--------*/

    const cartList35 = document.createElement('div')
    cartList35.classList.add('cartList35')
    cartList35.style.display="none"
    cart.appendChild(cartList35)

    const cartlist35 = document.querySelector('.cartList35')

    const nameCart35 = document.createElement('div')
    nameCart35.classList.add('nameCart35')
    cartlist35.appendChild(nameCart35)

    const priceCart35 = document.createElement('div')
    priceCart35.classList.add('priceCart35')
    cartList35.appendChild(priceCart35)

    /*-------CART-36--------*/

    const cartList36 = document.createElement('div')
    cartList36.classList.add('cartList36')
    cartList36.style.display="none"
    cart.appendChild(cartList36)

    const cartlist36 = document.querySelector('.cartList36')

    const nameCart36 = document.createElement('div')
    nameCart36.classList.add('nameCart36')
    cartlist36.appendChild(nameCart36)

    const priceCart36 = document.createElement('div')
    priceCart36.classList.add('priceCart36')
    cartList36.appendChild(priceCart36)

    /*-------CART-37--------*/

    const cartList37 = document.createElement('div')
    cartList37.classList.add('cartList37')
    cartList37.style.display="none"
    cart.appendChild(cartList37)

    const cartlist37 = document.querySelector('.cartList37')

    const nameCart37 = document.createElement('div')
    nameCart37.classList.add('nameCart37')
    cartlist37.appendChild(nameCart37)

    const priceCart37 = document.createElement('div')
    priceCart37.classList.add('priceCart37')
    cartList37.appendChild(priceCart37)

    /*-------CART-38--------*/

    const cartList38 = document.createElement('div')
    cartList38.classList.add('cartList38')
    cartList38.style.display="none"
    cart.appendChild(cartList38)

    const cartlist38 = document.querySelector('.cartList38')

    const nameCart38 = document.createElement('div')
    nameCart38.classList.add('nameCart38')
    cartlist38.appendChild(nameCart38)

    const priceCart38 = document.createElement('div')
    priceCart38.classList.add('priceCart38')
    cartList38.appendChild(priceCart38)

    /*-------CART-39--------*/

    const cartList39 = document.createElement('div')
    cartList39.classList.add('cartList39')
    cartList39.style.display="none"
    cart.appendChild(cartList39)

    const cartlist39 = document.querySelector('.cartList39')

    const nameCart39 = document.createElement('div')
    nameCart39.classList.add('nameCart39')
    cartlist39.appendChild(nameCart39)

    const priceCart39 = document.createElement('div')
    priceCart39.classList.add('priceCart39')
    cartList39.appendChild(priceCart39)

    /*-------CART-33--------*/

    const cartList33 = document.createElement('div')
    cartList33.classList.add('cartList33')
    cartList33.style.display="none"
    cart.appendChild(cartList33)

    
    const cartlist33 = document.querySelector('.cartList33')

    const proceed = document.createElement("p")
    proceed.classList.add("proceed")
    proceed.textContent="Pack Your Tiffin"
    cartlist33.appendChild(proceed)

    

    const prankbig = document.querySelector(".prankBig")
    
    const prank = document.createElement('img')
    prank.classList.add('prank')
    prank.src="https://images.sftcdn.net/images/t_app-icon-m/p/794a44e0-92b6-4a18-9ebd-2a922cea7bef/788067001/mashoor-gulati-stickers-logo"
    
    prankbig.appendChild(prank)
}