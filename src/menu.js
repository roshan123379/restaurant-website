export function menu(){
    const homeHeader = document.querySelector(".homeHeader")
    const menu = document.createElement('button')
    menu.classList.add('menu')
    menu.textContent="Menu"
    homeHeader.appendChild(menu)
}


export function listContent(){

    const container = document.getElementById('container')
    const listContent= document.createElement('div')
    listContent.classList.add('listContent')
    listContent.style.display="none"
    container.appendChild(listContent)

    const listcontent = document.querySelector('.listContent')

    const riceList = document.createElement('div')
    riceList.classList.add('riceList')
    riceList.style.display="none"
    listcontent.appendChild(riceList)

    const dalList = document.createElement('div')
    dalList.classList.add('dalList')
    dalList.style.display="none"
    listcontent.appendChild(dalList)

    const sabjiList = document.createElement('div')
    sabjiList.classList.add('sabjiList')
    sabjiList.style.display="none"
    listcontent.appendChild(sabjiList)

    const chapatiList = document.createElement('div')
    chapatiList.classList.add('chapatiList')
    chapatiList.style.display="none"
    listcontent.appendChild(chapatiList)

    const friedRiceList = document.createElement('div')
    friedRiceList.classList.add('friedRiceList')
    friedRiceList.style.display="none"
    listcontent.appendChild(friedRiceList)

    const noodlesList = document.createElement('div')
    noodlesList.classList.add('noodlesList')
    noodlesList.style.display="none"
    listcontent.appendChild(noodlesList)

    const soupList = document.createElement('div')
    soupList.classList.add('soupList')
    soupList.style.display="none"
    listcontent.appendChild(soupList)

    const biryaniList = document.createElement('div')
    biryaniList.classList.add('biryaniList')
    biryaniList.style.display="none"
    listcontent.appendChild(biryaniList)

    /*--------1---------*/

    const ricelist = document.querySelector('.riceList')

    const menuTitle1 = document.createElement("li")
    menuTitle1.classList.add('menuTitle')
    menuTitle1.textContent="Rice"
    riceList.appendChild(menuTitle1)

    const ol1= document.createElement('ol')
    ol1.classList.add('ol1')
    ricelist.appendChild(ol1)

    
    const oL1 = document.querySelector('.ol1')

    /*----- lidiv-1-------*/

    

    const liDiv1 = document.createElement('div')
    liDiv1.classList.add('liDiv1')
    oL1.appendChild(liDiv1)
    
    const lidiv1  = document.querySelector('.liDiv1')

    const li1 = document.createElement('li')
    li1.textContent="Plane rice"
    lidiv1.appendChild(li1)

    const price1 = document.createElement('p')
    price1.classList.add('price')
    price1.textContent='55 Rs'
    lidiv1.appendChild(price1)
    

    const add7 = document.createElement('button')
    add7.classList.add('menuAdd7')
    add7.textContent="Add"
    lidiv1.appendChild(add7)

    const remove1 = document.createElement('button')
    remove1.classList.add('remove1')
    remove1.textContent="remove"
    remove1.style.display="none"
    lidiv1.appendChild(remove1)

     /*----- lidiv-2-------*/
     

    const liDiv2 = document.createElement('div')
    liDiv2.classList.add('liDiv2')
    oL1.appendChild(liDiv2)

    const lidiv2  = document.querySelector('.liDiv2')

    const li2= document.createElement('li')
    li2.textContent="Jeera rice"
    lidiv2.appendChild(li2)

    const price2 = document.createElement('p')
    price2.classList.add('price')
    price2.textContent='60 Rs'
    lidiv2.appendChild(price2)

    const add8 = document.createElement('button')
    add8.classList.add('menuAdd8')
    add8.textContent="Add"
    lidiv2.appendChild(add8)

    const remove2 = document.createElement('button')
    remove2.classList.add('remove2')
    remove2.textContent="remove"
    remove2.style.display="none"
    lidiv2.appendChild(remove2)


    /*----- lidiv-3-------*/
    const liDiv3 = document.createElement('div')
    liDiv3.classList.add('liDiv3')
    oL1.appendChild(liDiv3)

    const lidiv3  = document.querySelector('.liDiv3')

    const li3 = document.createElement('li')
    li3.textContent="Steam rice"
    lidiv3.appendChild(li3)

    const price3 = document.createElement('p')
    price3.classList.add('price')
    price3.textContent='70 Rs'
    lidiv3.appendChild(price3)

    const add9 = document.createElement('button')
    add9.classList.add('menuAdd9')
    add9.textContent="Add"
    lidiv3.appendChild(add9)

    const remove3 = document.createElement('button')
    remove3.classList.add('remove3')
    remove3.textContent="remove"
    remove3.style.display="none"
    lidiv3.appendChild(remove3)


    /*----- lidiv-4-------*/
    const liDiv4 = document.createElement('div')
    liDiv4.classList.add('liDiv4')
    oL1.appendChild(liDiv4)

    const lidiv4  = document.querySelector('.liDiv4')


    const li4 = document.createElement('li')
    li4.textContent="Pulav"
    lidiv4.appendChild(li4)

    const price4 = document.createElement('p')
    price4.classList.add('price')
    price4.textContent='80 Rs'
    lidiv4.appendChild(price4)
    
    const add10 = document.createElement('button')
    add10.classList.add('menuAdd10')
    add10.textContent="Add"
    lidiv4.appendChild(add10)

    const remove4 = document.createElement('button')
    remove4.classList.add('remove4')
    remove4.textContent="remove"
    remove4.style.display="none"
    lidiv4.appendChild(remove4)


    /*----- lidiv-4-------*/
    const liDiv5 = document.createElement('div')
    liDiv5.classList.add('liDiv5')
    oL1.appendChild(liDiv5)

    const lidiv5  = document.querySelector('.liDiv5')


    const add11 = document.createElement('button')
    add11.classList.add('back')
    add11.textContent="Back to menu page"
    lidiv5.appendChild(add11)

    /*-------cancle-1---------*/
    const riceCancle = document.createElement('div')
    riceCancle.classList.add("riceCancle")
    riceCancle.textContent="Cancle"
    ricelist.appendChild(riceCancle)


    /*--------2---------*/

    const dallist = document.querySelector('.dalList')

    const menuTitle2 = document.createElement("li")
    menuTitle2.classList.add('menuTitle')
    menuTitle2.textContent="Dal"
    dalList.appendChild(menuTitle2)

    const ol2= document.createElement('ol')
    ol2.classList.add('ol2')
    dallist.appendChild(ol2)

    const oL2 = document.querySelector('.ol2')

    /*----- lidiv-1-------*/
    

    const liDiv6 = document.createElement('div')
    liDiv6.classList.add('liDiv6')
    oL2.appendChild(liDiv6)
    
    const lidiv6  = document.querySelector('.liDiv6')

    const li6 = document.createElement('li')
    li6.textContent="Plane Dal"
    lidiv6.appendChild(li6)

    const price5 = document.createElement('p')
    price5.classList.add('price')
    price5.textContent='80 Rs'
    lidiv6.appendChild(price5)

    const add12 = document.createElement('button')
    add12.classList.add('menuAdd11')
    add12.textContent="Add"
    lidiv6.appendChild(add12)

    const remove5 = document.createElement('button')
    remove5.classList.add('remove5')
    remove5.textContent="remove"
    remove5.style.display="none"
    lidiv6.appendChild(remove5)


     /*----- lidiv-2-------*/
    const liDiv7 = document.createElement('div')
    liDiv7.classList.add('liDiv7')
    oL2.appendChild(liDiv7)

    const lidiv7  = document.querySelector('.liDiv7')

    const li7= document.createElement('li')
    li7.textContent="Dal Fry"
    lidiv7.appendChild(li7)

    const price6 = document.createElement('p')
    price6.classList.add('price')
    price6.textContent='90 Rs'
    lidiv7.appendChild(price6)

    const add13 = document.createElement('button')
    add13.classList.add('menuAdd12')
    add13.textContent="Add"
    lidiv7.appendChild(add13)

    const remove6 = document.createElement('button')
    remove6.classList.add('remove6')
    remove6.textContent="remove"
    remove6.style.display="none"
    lidiv7.appendChild(remove6)

    /*----- lidiv-3-------*/
    const liDiv8 = document.createElement('div')
    liDiv8.classList.add('liDiv8')
    oL2.appendChild(liDiv8)

    const lidiv8  = document.querySelector('.liDiv8')

    const li8 = document.createElement('li')
    li8.textContent="Dal Tadka"
    lidiv8.appendChild(li8)

    const price7 = document.createElement('p')
    price7.classList.add('price')
    price7.textContent='120 Rs'
    lidiv8.appendChild(price7)

    const add14 = document.createElement('button')
    add14.classList.add('menuAdd13')
    add14.textContent="Add"
    lidiv8.appendChild(add14)

    const remove7 = document.createElement('button')
    remove7.classList.add('remove7')
    remove7.textContent="remove"
    remove7.style.display="none"
    lidiv8.appendChild(remove7)

    /*----- lidiv-4-------*/
    const liDiv9 = document.createElement('div')
    liDiv9.classList.add('liDiv9')
    oL2.appendChild(liDiv9)

    const lidiv9  = document.querySelector('.liDiv9')


    const li9 = document.createElement('li')
    li9.textContent="Dal makkhaani"
    lidiv9.appendChild(li9)

    const price8 = document.createElement('p')
    price8.classList.add('price')
    price8.textContent='140 Rs'
    lidiv9.appendChild(price8)
    
    const add15 = document.createElement('button')
    add15.classList.add('menuAdd14')
    add15.textContent="Add"
    lidiv9.appendChild(add15)

    const remove8 = document.createElement('button')
    remove8.classList.add('remove8')
    remove8.textContent="remove"
    remove8.style.display="none"
    lidiv9.appendChild(remove8)

    /*----- lidiv-5-------*/
    const liDiv10 = document.createElement('div')
    liDiv10.classList.add('liDiv10')
    oL2.appendChild(liDiv10)

    const lidiv10  = document.querySelector('.liDiv10')

    const add16 = document.createElement('button')
    add16.classList.add('back')
    add16.textContent="Back to menu page"
    lidiv10.appendChild(add16)

    /*-------cancle-2---------*/
    const dalCancle = document.createElement('div')
    dalCancle.classList.add("dalCancle")
    dalCancle.textContent="Cancle"
    dallist.appendChild(dalCancle)


    /*--------3---------*/

    const sabjilist = document.querySelector('.sabjiList')

    const menuTitle3 = document.createElement("li")
    menuTitle3.classList.add('menuTitle')
    menuTitle3.textContent="Sabji"
    sabjiList.appendChild(menuTitle3)

    const ol3= document.createElement('ol')
    ol3.classList.add('ol3')
    sabjilist.appendChild(ol3)

    const oL3 = document.querySelector('.ol3')

    /*----- lidiv-1-------*/

    
    const liDiv11 = document.createElement('div')
    liDiv11.classList.add('liDiv11')
    oL3.appendChild(liDiv11)
    
    const lidiv11  = document.querySelector('.liDiv11')

    const li11 = document.createElement('li')
    li11.textContent="Masala Bhindi"
    lidiv11.appendChild(li11)

    const price9 = document.createElement('p')
    price9.classList.add('price')
    price9.textContent='95 Rs'
    lidiv11.appendChild(price9)

    const add17 = document.createElement('button')
    add17.classList.add('menuAdd15')
    add17.textContent="Add"
    lidiv11.appendChild(add17)

    const remove9 = document.createElement('button')
    remove9.classList.add('remove9')
    remove9.textContent="remove"
    remove9.style.display="none"
    lidiv11.appendChild(remove9)

     /*----- lidiv-2-------*/
    const liDiv12 = document.createElement('div')
    liDiv12.classList.add('liDiv12')
    oL3.appendChild(liDiv12)

    const lidiv12  = document.querySelector('.liDiv12')

    const li12= document.createElement('li')
    li12.textContent="Baigan bharta"
    lidiv12.appendChild(li12)

    const price10 = document.createElement('p')
    price10.classList.add('price')
    price10.textContent='105 Rs'
    lidiv12.appendChild(price10)

    const add18 = document.createElement('button')
    add18.classList.add('menuAdd16')
    add18.textContent="Add"
    lidiv12.appendChild(add18)

    const remove10 = document.createElement('button')
    remove10.classList.add('remove10')
    remove10.textContent="remove"
    remove10.style.display="none"
    lidiv12.appendChild(remove10)

    /*----- lidiv-3-------*/
    const liDiv13 = document.createElement('div')
    liDiv13.classList.add('liDiv13')
    oL3.appendChild(liDiv13)

    const lidiv13  = document.querySelector('.liDiv13')

    const li13 = document.createElement('li')
    li13.textContent="Paneer Tikka"
    lidiv13.appendChild(li13)

    const price11 = document.createElement('p')
    price11.classList.add('price')
    price11.textContent='160 Rs'
    lidiv13.appendChild(price11)

    const add19 = document.createElement('button')
    add19.classList.add('menuAdd17')
    add19.textContent="Add"
    lidiv13.appendChild(add19)

    const remove11 = document.createElement('button')
    remove11.classList.add('remove11')
    remove11.textContent="remove"
    remove11.style.display="none"
    lidiv13.appendChild(remove11)

    /*----- lidiv-4-------*/
    const liDiv14 = document.createElement('div')
    liDiv14.classList.add('liDiv14')
    oL3.appendChild(liDiv14)

    const lidiv14  = document.querySelector('.liDiv14')


    const li14 = document.createElement('li')
    li14.textContent="Palak Mutter"
    lidiv14.appendChild(li14)

    const price12 = document.createElement('p')
    price12.classList.add('price')
    price12.textContent='110 Rs'
    lidiv14.appendChild(price12)
    
    const add20 = document.createElement('button')
    add20.classList.add('menuAdd18')
    add20.textContent="Add"
    lidiv14.appendChild(add20)

    const remove12 = document.createElement('button')
    remove12.classList.add('remove12')
    remove12.textContent="remove"
    remove12.style.display="none"
    lidiv14.appendChild(remove12)

    /*----- lidiv-5-------*/
    const liDiv15 = document.createElement('div')
    liDiv15.classList.add('liDiv15')
    oL3.appendChild(liDiv15)

    const lidiv15  = document.querySelector('.liDiv15')

    const add21 = document.createElement('button')
    add21.classList.add('back')
    add21.textContent="Back to menu page"
    lidiv15.appendChild(add21)

    /*-------cancle-3---------*/
    const sabjiCancle = document.createElement('div')
    sabjiCancle.classList.add("sabjiCancle")
    sabjiCancle.textContent="Cancle"
    sabjilist.appendChild(sabjiCancle)

    /*--------4---------*/

    const chapatilist = document.querySelector('.chapatiList')

    const menuTitle4 = document.createElement("li")
    menuTitle4.classList.add('menuTitle')
    menuTitle4.textContent="Chapati"
    chapatiList.appendChild(menuTitle4)

    const ol4= document.createElement('ol')
    ol4.classList.add('ol4')
    chapatilist.appendChild(ol4)

    const oL4 = document.querySelector('.ol4')

    /*----- lidiv-1-------*/

    
    const liDiv16 = document.createElement('div')
    liDiv16.classList.add('liDiv16')
    oL4.appendChild(liDiv16)
    
    const lidiv16  = document.querySelector('.liDiv16')

    const li16 = document.createElement('li')
    li16.textContent="Bajre ki roti"
    lidiv16.appendChild(li16)

    const price13 = document.createElement('p')
    price13.classList.add('price')
    price13.textContent='30 Rs'
    lidiv16.appendChild(price13)

    const add22 = document.createElement('button')
    add22.classList.add('menuAdd19')
    add22.textContent="Add"
    lidiv16.appendChild(add22)

    const remove13 = document.createElement('button')
    remove13.classList.add('remove13')
    remove13.textContent="remove"
    remove13.style.display="none"
    lidiv16.appendChild(remove13)

     /*----- lidiv-2-------*/
    const liDiv17 = document.createElement('div')
    liDiv17.classList.add('liDiv17')
    oL4.appendChild(liDiv17)

    const lidiv17  = document.querySelector('.liDiv17')

    const li17= document.createElement('li')
    li17.textContent="makka ki roti"
    lidiv17.appendChild(li17)

    const price14 = document.createElement('p')
    price14.classList.add('price')
    price14.textContent='30 Rs'
    lidiv17.appendChild(price14)

    const add23 = document.createElement('button')
    add23.classList.add('menuAdd20')
    add23.textContent="Add"
    lidiv17.appendChild(add23)

    const remove14 = document.createElement('button')
    remove14.classList.add('remove14')
    remove14.textContent="remove"
    remove14.style.display="none"
    lidiv17.appendChild(remove14)

    /*----- lidiv-3-------*/
    const liDiv18 = document.createElement('div')
    liDiv18.classList.add('liDiv18')
    oL4.appendChild(liDiv18)

    const lidiv18  = document.querySelector('.liDiv18')

    const li18 = document.createElement('li')
    li18.textContent="Tawa roti Dry"
    lidiv18.appendChild(li18)

    const price15 = document.createElement('p')
    price15.classList.add('price')
    price15.textContent='10 Rs'
    lidiv18.appendChild(price15)

    const add24 = document.createElement('button')
    add24.classList.add('menuAdd21')
    add24.textContent="Add"
    lidiv18.appendChild(add24)

    const remove15 = document.createElement('button')
    remove15.classList.add('remove15')
    remove15.textContent="remove"
    remove15.style.display="none"
    lidiv18.appendChild(remove15)

    /*----- lidiv-4-------*/
    const liDiv19 = document.createElement('div')
    liDiv19.classList.add('liDiv19')
    oL4.appendChild(liDiv19)

    const lidiv19  = document.querySelector('.liDiv19')


    const li19 = document.createElement('li')
    li19.textContent="Roti (Butter)"
    lidiv19.appendChild(li19)

    const price16 = document.createElement('p')
    price16.classList.add('price')
    price16.textContent='15 Rs'
    lidiv19.appendChild(price16)
    
    const add25 = document.createElement('button')
    add25.classList.add('menuAdd22')
    add25.textContent="Add"
    lidiv19.appendChild(add25)

    const remove16 = document.createElement('button')
    remove16.classList.add('remove16')
    remove16.textContent="remove"
    remove16.style.display="none"
    lidiv19.appendChild(remove16)

    /*----- lidiv-5-------*/
    const liDiv20 = document.createElement('div')
    liDiv20.classList.add('liDiv20')
    oL4.appendChild(liDiv20)

    const lidiv20  = document.querySelector('.liDiv20')

    const add26 = document.createElement('button')
    add26.classList.add('back')
    add26.textContent="Back to menu page"
    lidiv20.appendChild(add26)

    /*-------cancle-4---------*/
    const chapatiCancle = document.createElement('div')
    chapatiCancle.classList.add("chapatiCancle")
    chapatiCancle.textContent="Cancle"
    chapatilist.appendChild(chapatiCancle)

    /*--------5---------*/

    const friedRicelist = document.querySelector('.friedRiceList')

    const menuTitle5 = document.createElement("li")
    menuTitle5.classList.add('menuTitle')
    menuTitle5.textContent="Fried Rice"
    friedRiceList.appendChild(menuTitle5)

    const ol5= document.createElement('ol')
    ol5.classList.add('ol5')
    friedRicelist.appendChild(ol5)

    const oL5 = document.querySelector('.ol5')

    /*----- lidiv-1-------*/

    
    const liDiv21 = document.createElement('div')
    liDiv21.classList.add('liDiv21')
    oL5.appendChild(liDiv21)
    
    const lidiv21  = document.querySelector('.liDiv21')

    const li21 = document.createElement('li')
    li21.textContent="Veg Fried Rice"
    lidiv21.appendChild(li21)

    const price17 = document.createElement('p')
    price17.classList.add('price')
    price17.textContent='80 Rs'
    lidiv21.appendChild(price17)

    const add27 = document.createElement('button')
    add27.classList.add('menuAdd23')
    add27.textContent="Add"
    lidiv21.appendChild(add27)

    const remove17 = document.createElement('button')
    remove17.classList.add('remove17')
    remove17.textContent="remove"
    remove17.style.display="none"
    lidiv21.appendChild(remove17)

     /*----- lidiv-2-------*/
    const liDiv22 = document.createElement('div')
    liDiv22.classList.add('liDiv22')
    oL5.appendChild(liDiv22)

    const lidiv22  = document.querySelector('.liDiv22')

    const li22= document.createElement('li')
    li22.textContent="Chicken Fried Rice"
    lidiv22.appendChild(li22)

    const price18 = document.createElement('p')
    price18.classList.add('price')
    price18.textContent='100 Rs'
    lidiv22.appendChild(price18)

    const add28 = document.createElement('button')
    add28.classList.add('menuAdd24')
    add28.textContent="Add"
    lidiv22.appendChild(add28)

    const remove18 = document.createElement('button')
    remove18.classList.add('remove18')
    remove18.textContent="remove"
    remove18.style.display="none"
    lidiv22.appendChild(remove18)

    /*----- lidiv-3-------*/
    const liDiv23 = document.createElement('div')
    liDiv23.classList.add('liDiv23')
    oL5.appendChild(liDiv23)

    const lidiv23  = document.querySelector('.liDiv23')

    const li23 = document.createElement('li')
    li23.textContent="Egg Fried Rice"
    lidiv23.appendChild(li23)

    const price19 = document.createElement('p')
    price19.classList.add('price')
    price19.textContent='90 Rs'
    lidiv23.appendChild(price19)

    const add29 = document.createElement('button')
    add29.classList.add('menuAdd25')
    add29.textContent="Add"
    lidiv23.appendChild(add29)

    const remove19 = document.createElement('button')
    remove19.classList.add('remove19')
    remove19.textContent="remove"
    remove19.style.display="none"
    lidiv23.appendChild(remove19)

    /*----- lidiv-4-------*/
    const liDiv24 = document.createElement('div')
    liDiv24.classList.add('liDiv24')
    oL5.appendChild(liDiv24)

    const lidiv24  = document.querySelector('.liDiv24')


    const li24 = document.createElement('li')
    li24.textContent="Sazwaan Fried Rice"
    lidiv24.appendChild(li24)

    const price20 = document.createElement('p')
    price20.classList.add('price')
    price20.textContent='85 Rs'
    lidiv24.appendChild(price20)
    
    const add30 = document.createElement('button')
    add30.classList.add('menuAdd26')
    add30.textContent="Add"
    lidiv24.appendChild(add30)

    const remove20 = document.createElement('button')
    remove20.classList.add('remove20')
    remove20.textContent="remove"
    remove20.style.display="none"
    lidiv24.appendChild(remove20)

    /*----- lidiv-5-------*/
    const liDiv25 = document.createElement('div')
    liDiv25.classList.add('liDiv25')
    oL5.appendChild(liDiv25)

    const lidiv25  = document.querySelector('.liDiv25')

    const add31 = document.createElement('button')
    add31.classList.add('back')
    add31.textContent="Back to menu page"
    lidiv25.appendChild(add31)

    /*-------cancle-5---------*/
    const friedRiceCancle = document.createElement('div')
    friedRiceCancle.classList.add("friedRiceCancle")
    friedRiceCancle.textContent="Cancle"
    friedRicelist.appendChild(friedRiceCancle)

    /*--------6---------*/

    const noodleslist = document.querySelector('.noodlesList')

    const menuTitle6 = document.createElement("li")
    menuTitle6.classList.add('menuTitle')
    menuTitle6.textContent="Noodles"
    noodleslist.appendChild(menuTitle6)

    const ol6= document.createElement('ol')
    ol6.classList.add('ol6')
    noodleslist.appendChild(ol6)

    const oL6 = document.querySelector('.ol6')

    /*----- lidiv-1-------*/

    
    const liDiv26 = document.createElement('div')
    liDiv26.classList.add('liDiv26')
    oL6.appendChild(liDiv26)
    
    const lidiv26  = document.querySelector('.liDiv26')

    const li26 = document.createElement('li')
    li26.textContent="Veg Hakka Noodles"
    lidiv26.appendChild(li26)

    const price21 = document.createElement('p')
    price21.classList.add('price')
    price21.textContent='80 Rs'
    lidiv26.appendChild(price21)

    const add32 = document.createElement('button')
    add32.classList.add('menuAdd27')
    add32.textContent="Add"
    lidiv26.appendChild(add32)

    const remove21 = document.createElement('button')
    remove21.classList.add('remove21')
    remove21.textContent="remove"
    remove21.style.display="none"
    lidiv26.appendChild(remove21)

     /*----- lidiv-2-------*/
    const liDiv27 = document.createElement('div')
    liDiv27.classList.add('liDiv27')
    oL6.appendChild(liDiv27)

    const lidiv27  = document.querySelector('.liDiv27')

    const li27= document.createElement('li')
    li27.textContent="Chicken Noodles"
    lidiv27.appendChild(li27)

    const price22 = document.createElement('p')
    price22.classList.add('price')
    price22.textContent='100 Rs'
    lidiv27.appendChild(price22)

    const add33 = document.createElement('button')
    add33.classList.add('menuAdd28')
    add33.textContent="Add"
    lidiv27.appendChild(add33)

    const remove22 = document.createElement('button')
    remove22.classList.add('remove22')
    remove22.textContent="remove"
    remove22.style.display="none"
    lidiv27.appendChild(remove22)

    /*----- lidiv-3-------*/
    const liDiv28 = document.createElement('div')
    liDiv28.classList.add('liDiv28')
    oL6.appendChild(liDiv28)

    const lidiv28  = document.querySelector('.liDiv28')

    const li28 = document.createElement('li')
    li28.textContent="Veg Chowmin"
    lidiv28.appendChild(li28)

    const price23 = document.createElement('p')
    price23.classList.add('price')
    price23.textContent='65 Rs'
    lidiv28.appendChild(price23)

    const add34 = document.createElement('button')
    add34.classList.add('menuAdd29')
    add34.textContent="Add"
    lidiv28.appendChild(add34)

    const remove23 = document.createElement('button')
    remove23.classList.add('remove23')
    remove23.textContent="remove"
    remove23.style.display="none"
    lidiv28.appendChild(remove23)

    /*----- lidiv-4-------*/
    const liDiv29 = document.createElement('div')
    liDiv29.classList.add('liDiv29')
    oL6.appendChild(liDiv29)

    const lidiv29  = document.querySelector('.liDiv29')


    const li29 = document.createElement('li')
    li29.textContent="Sazwaan Noodles"
    lidiv29.appendChild(li29)

    const price24 = document.createElement('p')
    price24.classList.add('price')
    price24.textContent='85 Rs'
    lidiv29.appendChild(price24)
    
    const add35 = document.createElement('button')
    add35.classList.add('menuAdd30')
    add35.textContent="Add"
    lidiv29.appendChild(add35)

    const remove24 = document.createElement('button')
    remove24.classList.add('remove24')
    remove24.textContent="remove"
    remove24.style.display="none"
    lidiv29.appendChild(remove24)

    /*----- lidiv-5-------*/
    const liDiv30 = document.createElement('div')
    liDiv30.classList.add('liDiv30')
    oL6.appendChild(liDiv30)

    const lidiv30  = document.querySelector('.liDiv30')

    const add36 = document.createElement('button')
    add36.classList.add('back')
    add36.textContent="Back to menu page"
    lidiv30.appendChild(add36)

    /*-------cancle-6---------*/
    const noodlesCancle = document.createElement('div')
    noodlesCancle.classList.add("noodlesCancle")
    noodlesCancle.textContent="Cancle"
    noodleslist.appendChild(noodlesCancle)

    /*--------7---------*/

    const souplist = document.querySelector('.soupList')

    const menuTitle7 = document.createElement("li")
    menuTitle7.classList.add('menuTitle')
    menuTitle7.textContent="Soup"
    souplist.appendChild(menuTitle7)

    const ol7= document.createElement('ol')
    ol7.classList.add('ol7')
    souplist.appendChild(ol7)

    const oL7 = document.querySelector('.ol7')

    /*----- lidiv-1-------*/

    
    const liDiv31 = document.createElement('div')
    liDiv31.classList.add('liDiv31')
    oL7.appendChild(liDiv31)
    
    const lidiv31  = document.querySelector('.liDiv31')

    const li31 = document.createElement('li')
    li31.textContent="Veg Soup"
    lidiv31.appendChild(li31)

    const price25 = document.createElement('p')
    price25.classList.add('price')
    price25.textContent='50 Rs'
    lidiv31.appendChild(price25)

    const add37 = document.createElement('button')
    add37.classList.add('menuAdd31')
    add37.textContent="Add"
    lidiv31.appendChild(add37)

    const remove25 = document.createElement('button')
    remove25.classList.add('remove25')
    remove25.textContent="remove"
    remove25.style.display="none"
    lidiv31.appendChild(remove25)

     /*----- lidiv-2-------*/
    const liDiv32 = document.createElement('div')
    liDiv32.classList.add('liDiv32')
    oL7.appendChild(liDiv32)

    const lidiv32  = document.querySelector('.liDiv32')

    const li32= document.createElement('li')
    li32.textContent="Chicken Soup"
    lidiv32.appendChild(li32)

    const price26 = document.createElement('p')
    price26.classList.add('price')
    price26.textContent='70 Rs'
    lidiv32.appendChild(price26)

    const add38 = document.createElement('button')
    add38.classList.add('menuAdd32')
    add38.textContent="Add"
    lidiv32.appendChild(add38)

    const remove26 = document.createElement('button')
    remove26.classList.add('remove26')
    remove26.textContent="remove"
    remove26.style.display="none"
    lidiv32.appendChild(remove26)

    /*----- lidiv-3-------*/
    const liDiv33 = document.createElement('div')
    liDiv33.classList.add('liDiv33')
    oL7.appendChild(liDiv33)

    const lidiv33  = document.querySelector('.liDiv33')

    const li33 = document.createElement('li')
    li33.textContent="Tamatar Soup"
    lidiv33.appendChild(li33)

    const price27 = document.createElement('p')
    price27.classList.add('price')
    price27.textContent='65 Rs'
    lidiv33.appendChild(price27)

    const add39 = document.createElement('button')
    add39.classList.add('menuAdd33')
    add39.textContent="Add"
    lidiv33.appendChild(add39)

    const remove27 = document.createElement('button')
    remove27.classList.add('remove27')
    remove27.textContent="remove"
    remove27.style.display="none"
    lidiv33.appendChild(remove27)

    /*----- lidiv-4-------*/
    const liDiv34 = document.createElement('div')
    liDiv34.classList.add('liDiv34')
    oL7.appendChild(liDiv34)

    const lidiv34  = document.querySelector('.liDiv34')


    const li34 = document.createElement('li')
    li34.textContent="Paya Soup"
    lidiv34.appendChild(li34)

    const price28 = document.createElement('p')
    price28.classList.add('price')
    price28.textContent='100 Rs'
    lidiv34.appendChild(price28)
    
    const add40 = document.createElement('button')
    add40.classList.add('menuAdd34')
    add40.textContent="Add"
    lidiv34.appendChild(add40)

    const remove28 = document.createElement('button')
    remove28.classList.add('remove28')
    remove28.textContent="remove"
    remove28.style.display="none"
    lidiv34.appendChild(remove28)

    /*----- lidiv-5-------*/
    const liDiv35 = document.createElement('div')
    liDiv35.classList.add('liDiv35')
    oL7.appendChild(liDiv35)

    const lidiv35  = document.querySelector('.liDiv35')

    const add41 = document.createElement('button')
    add41.classList.add('back')
    add41.textContent="Back to menu page"
    lidiv35.appendChild(add41)

    /*-------cancle-7---------*/
    const soupCancle = document.createElement('div')
    soupCancle.classList.add("soupCancle")
    soupCancle.textContent="Cancle"
    souplist.appendChild(soupCancle)

    /*--------8---------*/

    const biryanilist = document.querySelector('.biryaniList')

    const menuTitle8 = document.createElement("li")
    menuTitle8.classList.add('menuTitle')
    menuTitle8.textContent="Biryani"
    biryanilist.appendChild(menuTitle8)

    const ol8= document.createElement('ol')
    ol8.classList.add('ol8')
    biryanilist.appendChild(ol8)

    const oL8 = document.querySelector('.ol8')

    /*----- lidiv-1-------*/

    
    const liDiv36 = document.createElement('div')
    liDiv36.classList.add('liDiv36')
    oL8.appendChild(liDiv36)
    
    const lidiv36 = document.querySelector('.liDiv36')

    const li36 = document.createElement('li')
    li36.textContent="Veg Biryani"
    lidiv36.appendChild(li36)

    const price29 = document.createElement('p')
    price29.classList.add('price')
    price29.textContent='80 Rs'
    lidiv36.appendChild(price29)

    const add42 = document.createElement('button')
    add42.classList.add('menuAdd35')
    add42.textContent="Add"
    lidiv36.appendChild(add42)

    const remove29 = document.createElement('button')
    remove29.classList.add('remove29')
    remove29.textContent="remove"
    remove29.style.display="none"
    lidiv36.appendChild(remove29)

     /*----- lidiv-2-------*/
    const liDiv37 = document.createElement('div')
    liDiv37.classList.add('liDiv37')
    oL8.appendChild(liDiv37)

    const lidiv37  = document.querySelector('.liDiv37')

    const li37= document.createElement('li')
    li37.textContent="Chicken Biryani"
    lidiv37.appendChild(li37)

    const price30 = document.createElement('p')
    price30.classList.add('price')
    price30.textContent='100 Rs'
    lidiv37.appendChild(price30)

    const add43 = document.createElement('button')
    add43.classList.add('menuAdd36')
    add43.textContent="Add"
    lidiv37.appendChild(add43)

    const remove30 = document.createElement('button')
    remove30.classList.add('remove30')
    remove30.textContent="remove"
    remove30.style.display="none"
    lidiv37.appendChild(remove30)

    /*----- lidiv-3-------*/
    const liDiv38 = document.createElement('div')
    liDiv38.classList.add('liDiv38')
    oL8.appendChild(liDiv38)

    const lidiv38  = document.querySelector('.liDiv38')

    const li38 = document.createElement('li')
    li38.textContent="Hadrabadi Biryani"
    lidiv38.appendChild(li38)

    const price31 = document.createElement('p')
    price31.classList.add('price')
    price31.textContent='130 Rs'
    lidiv38.appendChild(price31)

    const add44 = document.createElement('button')
    add44.classList.add('menuAdd37')
    add44.textContent="Add"
    lidiv38.appendChild(add44)

    const remove31 = document.createElement('button')
    remove31.classList.add('remove31')
    remove31.textContent="remove"
    remove31.style.display="none"
    lidiv38.appendChild(remove31)

    /*----- lidiv-4-------*/
    const liDiv39 = document.createElement('div')
    liDiv39.classList.add('liDiv39')
    oL8.appendChild(liDiv39)

    const lidiv39  = document.querySelector('.liDiv39')


    const li39 = document.createElement('li')
    li39.textContent="Dum Biryani"
    lidiv39.appendChild(li39)

    const price32 = document.createElement('p')
    price32.classList.add('price')
    price32.textContent='120 Rs'
    lidiv39.appendChild(price32)
    
    const add45 = document.createElement('button')
    add45.classList.add('menuAdd38')
    add45.textContent="Add"
    lidiv39.appendChild(add45)

    const remove32 = document.createElement('button')
    remove32.classList.add('remove32')
    remove32.textContent="remove"
    remove32.style.display="none"
    lidiv39.appendChild(remove32)

    /*----- lidiv-5-------*/
    const liDiv40 = document.createElement('div')
    liDiv40.classList.add('liDiv40')
    oL8.appendChild(liDiv40)

    const lidiv40  = document.querySelector('.liDiv40')

    const add46 = document.createElement('button')
    add46.classList.add('back')
    add46.textContent="Back to menu page"
    lidiv40.appendChild(add46)

    /*-------cancle-8---------*/
    const biryaniCancle = document.createElement('div')
    biryaniCancle.classList.add("biryaniCancle")
    biryaniCancle.textContent="Cancle"
    biryanilist.appendChild(biryaniCancle)
    
    
}



export function menuContent(){
    const menuContent = document.createElement("div")
    menuContent.classList.add("menuContent")
    menuContent.style.display="none"
    container.appendChild(menuContent)

    const menuHeadingDiv = document.createElement('div')
    menuHeadingDiv.classList.add('menuHeadingDiv')
    menuContent.appendChild(menuHeadingDiv)

    const menuheadingdiv = document.querySelector('.menuHeadingDiv')
    const menuHeading = document.createElement('p')
    menuHeading.classList.add('menuHeading')
    menuHeading.textContent="Full menu of our Restourant"
    menuheadingdiv.appendChild(menuHeading)


    const menucontent = document.querySelector('.menuContent')
    const menuDivs = document.createElement('div')
    menuDivs.classList.add('menuDivs')
    menucontent.appendChild(menuDivs)

    /* --- --------- menuDiv1-------------*/
    const menudivs = document.querySelector('.menuDivs')
    const menuDiv1= document.createElement('div')
    menuDiv1.classList.add('menuDiv1')
    menudivs.appendChild(menuDiv1)

    const menudiv1 = document.querySelector('.menuDiv1')
    const menuImg1 = document.createElement('img')
    menuImg1.classList.add('menuImg1')
    menuImg1.src="https://www.keepingthepeas.com/wp-content/uploads/2021/07/ninja-foodi-rice-8.jpg"
    menudiv1.appendChild(menuImg1)

    const menuName1 = document.createElement('p')
    menuName1.classList.add('menuName1')
    menuName1.textContent="Rice"
    menudiv1.appendChild(menuName1)

    const menuList1 = document.createElement('p')
    menuList1.classList.add('menuList1')
    menuList1.textContent="See the All Rice menu"
    menudiv1.appendChild(menuList1)


    /* --- --------- menuDiv2-------------*/
    const menuDiv2= document.createElement('div')
    menuDiv2.classList.add('menuDiv2')
    menudivs.appendChild(menuDiv2)

    const menudiv2 = document.querySelector('.menuDiv2')
    const menuImg2 = document.createElement('img')
    menuImg2.classList.add('menuImg2')
    menuImg2.src="https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured.jpg"
    menudiv2.appendChild(menuImg2)

    const menuName2 = document.createElement('p')
    menuName2.classList.add('menuName2')
    menuName2.textContent="Dal"
    menudiv2.appendChild(menuName2)

    const menuList2 = document.createElement('p')
    menuList2.classList.add('menuList2')
    menuList2.textContent="See the All Dal menu"
    menudiv2.appendChild(menuList2)



    /* --- --------- menuDiv3-------------*/

    const menuDiv3= document.createElement('div')
    menuDiv3.classList.add('menuDiv3')
    menudivs.appendChild(menuDiv3)

    const menudiv3 = document.querySelector('.menuDiv3')
    const menuImg3 = document.createElement('img')
    menuImg3.classList.add('menuImg3')
    menuImg3.src="https://www.funfoodfrolic.com/wp-content/uploads/2022/08/Arbi-Ki-Sabji-Blog.jpg"
    menudiv3.appendChild(menuImg3)

    const menuName3 = document.createElement('p')
    menuName3.classList.add('menuName3')
    menuName3.textContent="Sabji"
    menudiv3.appendChild(menuName3)

    const menuList3 = document.createElement('p')
    menuList3.classList.add('menuList3')
    menuList3.textContent="See the All Sabji menu"
    menudiv3.appendChild(menuList3)

    /* --- --------- menuDiv4-------------*/

    const menuDiv4= document.createElement('div')
    menuDiv4.classList.add('menuDiv4')
    menudivs.appendChild(menuDiv4)

    const menudiv4 = document.querySelector('.menuDiv4')
    const menuImg4 = document.createElement('img')
    menuImg4.classList.add('menuImg4')
    menuImg4.src="https://www.mydelicious-recipes.com/home/images/234_1200_960/mydelicious-recipes-roti"
    menudiv4.appendChild(menuImg4)

    const menuName4 = document.createElement('p')
    menuName4.classList.add('menuName4')
    menuName4.textContent="Chapati"
    menudiv4.appendChild(menuName4)

    const menuList4 = document.createElement('p')
    menuList4.classList.add('menuList4')
    menuList4.textContent="See the All Chapati menu"
    menudiv4.appendChild(menuList4)

    /* --- --------- menuDiv5-------------*/

    const menuDiv5= document.createElement('div')
    menuDiv5.classList.add('menuDiv5')
    menudivs.appendChild(menuDiv5)

    const menudiv5 = document.querySelector('.menuDiv5')
    const menuImg5 = document.createElement('img')
    menuImg5.classList.add('menuImg5')
    menuImg5.src="https://images.aws.nestle.recipes/original/984a2927c718b0e9d01160918cb2f1f1_A42I2385.jpg"
    menudiv5.appendChild(menuImg5)

    const menuName5 = document.createElement('p')
    menuName5.classList.add('menuName5')
    menuName5.textContent="Fried Rice"
    menudiv5.appendChild(menuName5)

    const menuList5 = document.createElement('p')
    menuList5.classList.add('menuList5')
    menuList5.textContent="See the All Fried Rice menu"
    menudiv5.appendChild(menuList5)

    /* --- --------- menuDiv6-------------*/

    const menuDiv6= document.createElement('div')
    menuDiv6.classList.add('menuDiv6')
    menudivs.appendChild(menuDiv6)

    const menudiv6 = document.querySelector('.menuDiv6')
    const menuImg6 = document.createElement('img')
    menuImg6.classList.add('menuImg6')
    menuImg6.src="https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-500x500.jpg"
    menudiv6.appendChild(menuImg6)

    const menuName6 = document.createElement('p')
    menuName6.classList.add('menuName6')
    menuName6.textContent="Noodles"
    menudiv6.appendChild(menuName6)

    const menuList6 = document.createElement('p')
    menuList6.classList.add('menuList6')
    menuList6.textContent="See the All Noodles menu"
    menudiv6.appendChild(menuList6)

    /* --- --------- menuDiv7-------------*/

    const menuDiv7= document.createElement('div')
    menuDiv7.classList.add('menuDiv7')
    menudivs.appendChild(menuDiv7)

    const menudiv7 = document.querySelector('.menuDiv7')
    const menuImg7 = document.createElement('img')
    menuImg7.classList.add('menuImg7')
    menuImg7.src="https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg"
    menudiv7.appendChild(menuImg7)

    const menuName7 = document.createElement('p')
    menuName7.classList.add('menuName7')
    menuName7.textContent="Soup"
    menudiv7.appendChild(menuName7)

    const menuList7 = document.createElement('p')
    menuList7.classList.add('menuList7')
    menuList7.textContent="See the All Soup menu"
    menudiv7.appendChild(menuList7)

    /* --- --------- menuDiv8-------------*/

    const menuDiv8= document.createElement('div')
    menuDiv8.classList.add('menuDiv8')
    menudivs.appendChild(menuDiv8)

    const menudiv8 = document.querySelector('.menuDiv8')
    const menuImg8 = document.createElement('img')
    menuImg8.classList.add('menuImg8')
    menuImg8.src="https://simmertoslimmer.com/wp-content/uploads/2022/11/Instant-Pot-Chicken-Biryani.jpeg"
    menudiv8.appendChild(menuImg8)

    const menuName8 = document.createElement('p')
    menuName8.classList.add('menuName8')
    menuName8.textContent="Biryani"
    menudiv8.appendChild(menuName8)

    const menuList8 = document.createElement('p')
    menuList8.classList.add('menuList8')
    menuList8.textContent="See the All Biryani menu"
    menudiv8.appendChild(menuList8)

    
    const comming = document.createElement('div')
    comming.classList.add('comming')
    comming.textContent="More Menus Are Comming Soon....."
    comming.style.display="none"
    container.appendChild(comming)
    
}


