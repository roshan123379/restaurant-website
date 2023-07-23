import {home, homeContent,  banner1, homeMainContent, tiffin} from "./home"
import {listContent, menu, menuContent} from "./menu"
import {contact, contactContent} from "./contact"
import "./style.css"

home()
menu()
contact()

homeContent()
menuContent()
listContent()
contactContent()

banner1()

homeMainContent()
tiffin()



function pageLoader(){
    const listContent= document.querySelector('.listContent')
    const ricelist = document.querySelector('.riceList')
    const dallist = document.querySelector('.dalList')
    const sabjilist = document.querySelector('.sabjiList')
    const chapatilist = document.querySelector('.chapatiList')
    const friedRicelist = document.querySelector('.friedRiceList')
    const noodleslist = document.querySelector('.noodlesList')
    const souplist = document.querySelector('.soupList')
    const biryanilist = document.querySelector('.biryaniList')
    const menuList1 = document.querySelector('.menuList1')
    const menuList2 = document.querySelector('.menuList2')
    const menuList3 = document.querySelector('.menuList3')
    const menuList4 = document.querySelector('.menuList4')
    const menuList5 = document.querySelector('.menuList5')
    const menuList6 = document.querySelector('.menuList6')
    const menuList7 = document.querySelector('.menuList7')
    const menuList8 = document.querySelector('.menuList8')

    const menuAdd7= document.querySelector(".menuAdd7")
    const menuAdd8= document.querySelector(".menuAdd8")
    const menuAdd9= document.querySelector(".menuAdd9")
    const menuAdd10= document.querySelector(".menuAdd10")
    const menuAdd11= document.querySelector(".menuAdd11")
    const menuAdd12= document.querySelector(".menuAdd12")
    const menuAdd13= document.querySelector(".menuAdd13")
    const menuAdd14= document.querySelector(".menuAdd14")
    const menuAdd15= document.querySelector(".menuAdd15")
    const menuAdd16= document.querySelector(".menuAdd16")
    const menuAdd17= document.querySelector(".menuAdd17")
    const menuAdd18= document.querySelector(".menuAdd18")
    const menuAdd19= document.querySelector(".menuAdd19")
    const menuAdd20= document.querySelector(".menuAdd20")
    const menuAdd21= document.querySelector(".menuAdd21")
    const menuAdd22= document.querySelector(".menuAdd22")
    const menuAdd23= document.querySelector(".menuAdd23")
    const menuAdd24= document.querySelector(".menuAdd24")
    const menuAdd25= document.querySelector(".menuAdd25")
    const menuAdd26= document.querySelector(".menuAdd26")
    const menuAdd27= document.querySelector(".menuAdd27")
    const menuAdd28= document.querySelector(".menuAdd28")
    const menuAdd29= document.querySelector(".menuAdd29")
    const menuAdd30= document.querySelector(".menuAdd30")
    const menuAdd31= document.querySelector(".menuAdd31")
    const menuAdd32= document.querySelector(".menuAdd32")
    const menuAdd33= document.querySelector(".menuAdd33")
    const menuAdd34= document.querySelector(".menuAdd34")
    const menuAdd35= document.querySelector(".menuAdd35")
    const menuAdd36= document.querySelector(".menuAdd36")
    const menuAdd37= document.querySelector(".menuAdd37")
    const menuAdd38= document.querySelector(".menuAdd38")
    const menuAdd1= document.querySelector(".menuAdd1")
    const menuAdd2= document.querySelector(".menuAdd2")
    const menuAdd3= document.querySelector(".menuAdd3")
    const menuAdd4= document.querySelector(".menuAdd4")
    const menuAdd5= document.querySelector(".menuAdd5")
    const menuAdd6= document.querySelector(".menuAdd6")

    const cart = document.querySelector('.cart')
    const cartlist1 = document.querySelector('.cartList1')
    const cartlist2 = document.querySelector('.cartList2')
    const cartlist3 = document.querySelector('.cartList3')
    const cartlist4 = document.querySelector('.cartList4')
    const cartlist5 = document.querySelector('.cartList5')
    const cartlist6 = document.querySelector('.cartList6')
    const cartlist7 = document.querySelector('.cartList7')
    const cartlist8 = document.querySelector('.cartList8')
    const cartlist9 = document.querySelector('.cartList9')
    const cartlist10 = document.querySelector('.cartList10')
    const cartlist11 = document.querySelector('.cartList11')
    const cartlist12 = document.querySelector('.cartList12')
    const cartlist13 = document.querySelector('.cartList13')
    const cartlist14 = document.querySelector('.cartList14')
    const cartlist15 = document.querySelector('.cartList15')
    const cartlist16 = document.querySelector('.cartList16')
    const cartlist17 = document.querySelector('.cartList17')
    const cartlist18 = document.querySelector('.cartList18')
    const cartlist19 = document.querySelector('.cartList19')
    const cartlist20 = document.querySelector('.cartList20')
    const cartlist21 = document.querySelector('.cartList21')
    const cartlist22 = document.querySelector('.cartList22')
    const cartlist23 = document.querySelector('.cartList23')
    const cartlist24 = document.querySelector('.cartList24')
    const cartlist25 = document.querySelector('.cartList25')
    const cartlist26 = document.querySelector('.cartList26')
    const cartlist27 = document.querySelector('.cartList27')
    const cartlist28 = document.querySelector('.cartList28')
    const cartlist29 = document.querySelector('.cartList29')
    const cartlist30 = document.querySelector('.cartList30')
    const cartlist31 = document.querySelector('.cartList31')
    const cartlist32 = document.querySelector('.cartList32')
    const cartlist33 = document.querySelector('.cartList33')
    const cartlist34 = document.querySelector('.cartList34')
    const cartlist35 = document.querySelector('.cartList35')
    const cartlist36 = document.querySelector('.cartList36')
    const cartlist37 = document.querySelector('.cartList37')
    const cartlist38 = document.querySelector('.cartList38')
    const cartlist39 = document.querySelector('.cartList39')
    
    
    

    const nameCart1 = document.querySelector(".nameCart1")
    const priceCart1 = document.querySelector(".priceCart1")
    const nameCart2 = document.querySelector(".nameCart2")
    const priceCart2 = document.querySelector(".priceCart2")
    const nameCart3 = document.querySelector(".nameCart3")
    const priceCart3 = document.querySelector(".priceCart3")
    const nameCart4 = document.querySelector(".nameCart4")
    const priceCart4 = document.querySelector(".priceCart4")
    const nameCart5 = document.querySelector(".nameCart5")
    const priceCart5 = document.querySelector(".priceCart5")
    const nameCart6 = document.querySelector(".nameCart6")
    const priceCart6 = document.querySelector(".priceCart6")
    const nameCart7 = document.querySelector(".nameCart7")
    const priceCart7 = document.querySelector(".priceCart7")
    const nameCart8 = document.querySelector(".nameCart8")
    const priceCart8 = document.querySelector(".priceCart8")
    const nameCart9 = document.querySelector(".nameCart9")
    const priceCart9 = document.querySelector(".priceCart9")
    const nameCart10 = document.querySelector(".nameCart10")
    const priceCart10 = document.querySelector(".priceCart10")
    const nameCart11 = document.querySelector(".nameCart11")
    const priceCart11 = document.querySelector(".priceCart11")
    const nameCart12 = document.querySelector(".nameCart12")
    const priceCart12 = document.querySelector(".priceCart12")
    const nameCart13 = document.querySelector(".nameCart13")
    const priceCart13 = document.querySelector(".priceCart13")
    const nameCart14 = document.querySelector(".nameCart14")
    const priceCart14 = document.querySelector(".priceCart14")
    const nameCart15 = document.querySelector(".nameCart15")
    const priceCart15 = document.querySelector(".priceCart15")
    const nameCart16= document.querySelector(".nameCart16")
    const priceCart16 = document.querySelector(".priceCart16")
    const nameCart17= document.querySelector(".nameCart17")
    const priceCart17 = document.querySelector(".priceCart17")
    const nameCart18 = document.querySelector(".nameCart18")
    const priceCart18 = document.querySelector(".priceCart18")
    const nameCart19 = document.querySelector(".nameCart19")
    const priceCart19 = document.querySelector(".priceCart19")
    const nameCart20 = document.querySelector(".nameCart20")
    const priceCart20 = document.querySelector(".priceCart20")
    const nameCart21 = document.querySelector(".nameCart21")
    const priceCart21 = document.querySelector(".priceCart21")
    const nameCart22 = document.querySelector(".nameCart22")
    const priceCart22 = document.querySelector(".priceCart22")
    const nameCart23 = document.querySelector(".nameCart23")
    const priceCart23 = document.querySelector(".priceCart23")
    const nameCart24 = document.querySelector(".nameCart24")
    const priceCart24 = document.querySelector(".priceCart24")
    const nameCart25= document.querySelector(".nameCart25")
    const priceCart25 = document.querySelector(".priceCart25")
    const nameCart26 = document.querySelector(".nameCart26")
    const priceCart26 = document.querySelector(".priceCart26")
    const nameCart27= document.querySelector(".nameCart27")
    const priceCart27 = document.querySelector(".priceCart27")
    const nameCart28= document.querySelector(".nameCart28")
    const priceCart28 = document.querySelector(".priceCart28")
    const nameCart29= document.querySelector(".nameCart29")
    const priceCart29 = document.querySelector(".priceCart29")
    const nameCart30 = document.querySelector(".nameCart30")
    const priceCart30 = document.querySelector(".priceCart30")
    const nameCart31 = document.querySelector(".nameCart31")
    const priceCart31 = document.querySelector(".priceCart31")
    const nameCart32= document.querySelector(".nameCart32")
    const priceCart32 = document.querySelector(".priceCart32")
    const nameCart34= document.querySelector(".nameCart34")
    const priceCart34 = document.querySelector(".priceCart34")
    const nameCart35= document.querySelector(".nameCart35")
    const priceCart35 = document.querySelector(".priceCart35")
    const nameCart36= document.querySelector(".nameCart36")
    const priceCart36 = document.querySelector(".priceCart36")
    const nameCart37= document.querySelector(".nameCart37")
    const priceCart37 = document.querySelector(".priceCart37")
    const nameCart38= document.querySelector(".nameCart38")
    const priceCart38 = document.querySelector(".priceCart38")
    const nameCart39= document.querySelector(".nameCart39")
    const priceCart39 = document.querySelector(".priceCart39")


    const back = document.querySelectorAll(".back")
    const contact = document.querySelector(".contact")
    const menu = document.querySelector(".menu")
    const home = document.querySelector(".home")
    const menuContent = document.querySelector(".menuContent")
    const homeContent = document.querySelector(".homeContent")
    const contactContent = document.querySelector(".contactContent")

    const comming = document.querySelector(".comming")
    home.addEventListener("click",()=>{
        homeContent.style.display="block"
        menuContent.style.display="none"
        contactContent.style.display="none"
        listContent.style.display="none"
        comming.style.display="none"

    })
    menu.addEventListener("click",()=>{
        menuContent.style.display="block"
        homeContent.style.display="none"
        contactContent.style.display="none"
        listContent.style.display="none"
        comming.style.display="block"

    })
    contact.addEventListener("click",()=>{
        contactContent.style.display="flex"
        homeContent.style.display="none"
        menuContent.style.display="none"
        comming.style.display="none"

        
    })
    menuList1.addEventListener('click',()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        ricelist.style.display="block"
        comming.style.display="none"
        
    })
    menuList2.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        dallist.style.display="block"
        comming.style.display="none"
        

    })
    menuList3.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        sabjilist.style.display="block"
        comming.style.display="none"
    })
    menuList4.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        chapatilist.style.display="block"
        comming.style.display="none"
    })
    menuList5.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        friedRicelist.style.display="block"
        comming.style.display="none"
    })
    menuList6.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        noodleslist.style.display="block"
        comming.style.display="none"
    })
    menuList7.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        souplist.style.display="block"
        comming.style.display="none"
    })
    menuList8.addEventListener("click",()=>{
        menuContent.style.display='none'
        listContent.style.display="block"
        biryanilist.style.display="block"
        comming.style.display="none"
    })
    
    back.forEach((back) => {
        back.addEventListener("click",()=>{
            listContent.style.display="none"
            menuContent.style.display="block"
            comming.style.display="block"
            
    })
});
    
    const ricecancle = document.querySelector('.riceCancle')
    ricecancle.addEventListener("click",()=>{
        ricelist.style.display='none'
       
    })
    const dalcancle = document.querySelector('.dalCancle')
    dalcancle.addEventListener("click",()=>{
        dallist.style.display='none'
        
    })
    const sabjicancle = document.querySelector('.sabjiCancle')
    sabjicancle.addEventListener("click",()=>{
        sabjilist.style.display='none'
        
    })
    const chapaticancle = document.querySelector('.chapatiCancle')
    chapaticancle.addEventListener("click",()=>{
        chapatilist.style.display='none'
        
        
    })
    const friedRicecancle = document.querySelector('.friedRiceCancle')
    friedRicecancle.addEventListener("click",()=>{
        friedRicelist.style.display='none'
        
    })
    const noodlescancle = document.querySelector('.noodlesCancle')
    noodlescancle.addEventListener("click",()=>{
        noodleslist.style.display='none'
        
    })
    const soupcancle = document.querySelector('.soupCancle')
    soupcancle.addEventListener("click",()=>{
        souplist.style.display='none'
        
    })
    const biryanicancle = document.querySelector('.biryaniCancle')
    biryanicancle.addEventListener("click",()=>{
        biryanilist.style.display='none'
        
    })
    
    menuAdd7.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist1.style.display="flex"
        cart.style.display="block"
        menuAdd7.style.display="none"
        remove1.style.display="block" 
        nameCart1.style.display="flex"
        priceCart1.style.display="flex"
        nameCart1.textContent="Plane Rice"
        priceCart1.textContent="55 Rs"
     })
        
    const remove1 = document.querySelector('.remove1')
        remove1.addEventListener("click",()=>{
            cartlist1.style.display="none"
            nameCart1.style.display="none"
            priceCart1.style.display="none"
            menuAdd7.style.display="block"
            remove1.style.display="none"

    })
    menuAdd8.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist2.style.display="flex"
        cart.style.display="block"
        menuAdd8.style.display="none"
        remove2.style.display="block"
        nameCart2.style.display="block"
        priceCart2.style.display="block"
        nameCart2.textContent="jeera Rice"
        priceCart2.textContent="60 Rs"
     })
        
    const remove2 = document.querySelector('.remove2')
        remove2.addEventListener("click",()=>{
            cartlist2.style.display="none"
            nameCart2.style.display="none"
            priceCart2.style.display="none"
            menuAdd8.style.display="block"
            remove2.style.display="none"

    })
    menuAdd9.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist3.style.display="flex"
        cart.style.display="block"
        menuAdd9.style.display="none"
        remove3.style.display="block"
        nameCart3.style.display="block"
        priceCart3.style.display="block"
        nameCart3.textContent="Steam Rice"
        priceCart3.textContent="70 Rs"
     })
        
    const remove3 = document.querySelector('.remove3')
        remove3.addEventListener("click",()=>{
            cartlist3.style.display="none"
            nameCart3.style.display="none"
            priceCart3.style.display="none"
            menuAdd9.style.display="block"
            remove3.style.display="none"

    })
    menuAdd10.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist4.style.display="flex"
        cart.style.display="block"
        menuAdd10.style.display="none"
        remove4.style.display="block"
        nameCart4.style.display="block"
        priceCart4.style.display="block"
        nameCart4.textContent="Pulav"
        priceCart4.textContent="80 Rs"
     })
        
    const remove4 = document.querySelector('.remove4')
        remove4.addEventListener("click",()=>{
            cartlist4.style.display="none"
            nameCart4.style.display="none"
            priceCart4.style.display="none"
            menuAdd10.style.display="block"
            remove4.style.display="none"
    })
    menuAdd11.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist5.style.display="flex"
        cart.style.display="block"
        menuAdd11.style.display="none"
        remove5.style.display="block"
        nameCart5.style.display="block"
        priceCart5.style.display="block"
        nameCart5.textContent="Plane Dal"
        priceCart5.textContent="80 Rs"
     })
        
    const remove5 = document.querySelector('.remove5')
        remove5.addEventListener("click",()=>{
            cartlist5.style.display="none"
            nameCart5.style.display="none"
            priceCart5.style.display="none"
            menuAdd11.style.display="block"
            remove5.style.display="none"
    })
    menuAdd12.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist6.style.display="flex"
        cart.style.display="block"
        menuAdd12.style.display="none"
        remove6.style.display="block"
        nameCart6.style.display="block"
        priceCart6.style.display="block"
        nameCart6.textContent="Dal Fry"
        priceCart6.textContent="90 Rs"
     })
        
    const remove6 = document.querySelector('.remove6')
        remove6.addEventListener("click",()=>{
            cartlist6.style.display="none"
            nameCart6.style.display="none"
            priceCart6.style.display="none"
            menuAdd12.style.display="block"
            remove6.style.display="none"
    })
    menuAdd13.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist7.style.display="flex"
        cart.style.display="block"
        menuAdd13.style.display="none"
        remove7.style.display="block"
        nameCart7.style.display="block"
        priceCart7.style.display="block"
        nameCart7.textContent="Dal Tadka"
        priceCart7.textContent="120 Rs"
     })
        
     const remove7 = document.querySelector('.remove7')
        remove7.addEventListener("click",()=>{
            cartlist7.style.display="none"
            nameCart7.style.display="none"
            priceCart7.style.display="none"
            menuAdd13.style.display="block"
            remove7.style.display="none"
    })
    menuAdd14.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist8.style.display="flex"
        cart.style.display="block"
        menuAdd14.style.display="none"
        remove8.style.display="block"
        nameCart8.style.display="block"
        priceCart8.style.display="block"
        nameCart8.textContent="Dal Makkhaani"
        priceCart8.textContent="140 Rs"
     })
        
    const remove8 = document.querySelector('.remove8')
        remove8.addEventListener("click",()=>{
            cartlist8.style.display="none"
            nameCart8.style.display="none"
            priceCart8.style.display="none"
            menuAdd14.style.display="block"
            remove8.style.display="none"
    })
    menuAdd15.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist9.style.display="flex"
        cart.style.display="block"
        menuAdd15.style.display="none"
        remove9.style.display="block"
        nameCart9.style.display="block"
        priceCart9.style.display="block"
        nameCart9.textContent="Masala Bhindi"
        priceCart9.textContent="95 Rs"
     })
        
    const remove9 = document.querySelector('.remove9')
        remove9.addEventListener("click",()=>{
            cartlist9.style.display="none"
            nameCart9.style.display="none"
            priceCart9.style.display="none"
            menuAdd15.style.display="block"
            remove9.style.display="none"
    })
    menuAdd16.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist10.style.display="flex"
        cart.style.display="block"
        menuAdd16.style.display="none"
        remove10.style.display="block"
        nameCart10.style.display="block"
        priceCart10.style.display="block"
        nameCart10.textContent="Baigan Bharta"
        priceCart10.textContent="105 Rs"
     })
        
    const remove10 = document.querySelector('.remove10')
        remove10.addEventListener("click",()=>{
            cartlist10.style.display="none"
            nameCart10.style.display="none"
            priceCart10.style.display="none"
            menuAdd16.style.display="block"
            remove10.style.display="none"
    })
    menuAdd17.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist11.style.display="flex"
        cart.style.display="block"
        menuAdd17.style.display="none"
        remove11.style.display="block"
        nameCart11.style.display="block"
        priceCart11.style.display="block"
        nameCart11.textContent="Paneer Tikka"
        priceCart11.textContent="160 Rs"
     })
        
    const remove11 = document.querySelector('.remove11')
        remove11.addEventListener("click",()=>{
            cartlist11.style.display="none"
            nameCart11.style.display="none"
            priceCart11.style.display="none"
            menuAdd17.style.display="block"
            remove11.style.display="none"
    })
    menuAdd18.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist12.style.display="flex"
        cart.style.display="block"
        menuAdd18.style.display="none"
        remove12.style.display="block"
        nameCart12.style.display="block"
        priceCart12.style.display="block"
        nameCart12.textContent="Palak Muttur"
        priceCart12.textContent="110 Rs"
     })
        
    const remove12 = document.querySelector('.remove12')
        remove12.addEventListener("click",()=>{
            cartlist12.style.display="none"
            nameCart12.style.display="none"
            priceCart12.style.display="none"
            menuAdd18.style.display="block"
            remove12.style.display="none"
    })
    menuAdd19.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist13.style.display="flex"
        cart.style.display="block"
        menuAdd19.style.display="none"
        remove13.style.display="block"
        nameCart13.style.display="block"
        priceCart13.style.display="block"
        nameCart13.textContent="Bajre Ki Roti"
        priceCart13.textContent="30 Rs"
     })
        
    const remove13 = document.querySelector('.remove13')
        remove13.addEventListener("click",()=>{
            cartlist13.style.display="none"
            nameCart13.style.display="none"
            priceCart13.style.display="none"
            menuAdd19.style.display="block"
            remove13.style.display="none"
    })
    menuAdd20.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist14.style.display="flex"
        cart.style.display="block"
        menuAdd20.style.display="none"
        remove14.style.display="block"
        nameCart14.style.display="block"
        priceCart14.style.display="block"
        nameCart14.textContent="Makka ki Roti"
        priceCart14.textContent="30 Rs"
     })
        
    const remove14 = document.querySelector('.remove14')
        remove14.addEventListener("click",()=>{
            cartlist14.style.display="none"
            nameCart14.style.display="none"
            priceCart14.style.display="none"
            menuAdd20.style.display="block"
            remove14.style.display="none"
    })
    menuAdd21.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist15.style.display="flex"
        cart.style.display="block"
        menuAdd21.style.display="none"
        remove15.style.display="block"
        nameCart15.style.display="block"
        priceCart15.style.display="block"
        nameCart15.textContent="Tawa Roti Dry"
        priceCart15.textContent="10 Rs"
     })
        
    const remove15 = document.querySelector('.remove15')
        remove15.addEventListener("click",()=>{
            cartlist15.style.display="none"
            nameCart15.style.display="none"
            priceCart15.style.display="none"
            menuAdd21.style.display="block"
            remove15.style.display="none"
    })
    menuAdd22.addEventListener("click",()=>{
        cartlist16.style.display="flex"
        cartlist33.style.display="block"
        cart.style.display="block"
        menuAdd22.style.display="none"
        remove16.style.display="block"
        nameCart16.style.display="block"
        priceCart16.style.display="block"
        nameCart16.textContent="Roti(Butter"
        priceCart16.textContent="15 Rs"
     })
        
    const remove16 = document.querySelector('.remove16')
        remove16.addEventListener("click",()=>{
            cartlist16.style.display="none"
            nameCart16.style.display="none"
            priceCart16.style.display="none"
            menuAdd22.style.display="block"
            remove16.style.display="none"
    })
    menuAdd23.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist17.style.display="flex"
        cart.style.display="block"
        menuAdd23.style.display="none"
        remove17.style.display="block"
        nameCart17.style.display="block"
        priceCart17.style.display="block"
        nameCart17.textContent="Veg Fried Rice"
        priceCart17.textContent="80 Rs"
     })
        
    const remove17 = document.querySelector('.remove17')
        remove17.addEventListener("click",()=>{
            cartlist17.style.display="none"
            nameCart17.style.display="none"
            priceCart17.style.display="none"
            menuAdd23.style.display="block"
            remove17.style.display="none"
    })
    menuAdd24.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist18.style.display="flex"
        cart.style.display="block"
        menuAdd24.style.display="none"
        remove18.style.display="block"
        nameCart18.style.display="block"
        priceCart18.style.display="block"
        nameCart18.textContent="Chicken Fried Rice"
        priceCart18.textContent="100 Rs"
     })
        
    const remove18 = document.querySelector('.remove18')
        remove18.addEventListener("click",()=>{
            cartlist18.style.display="none"
            nameCart18.style.display="none"
            priceCart18.style.display="none"
            menuAdd24.style.display="block"
            remove18.style.display="none"
    })
    menuAdd25.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist19.style.display="flex"
        cart.style.display="block"
        menuAdd25.style.display="none"
        remove19.style.display="block"
        nameCart19.style.display="block"
        priceCart19.style.display="block"
        nameCart19.textContent="Egg Fried Rice"
        priceCart19.textContent="90 Rs"
     })
        
    const remove19 = document.querySelector('.remove19')
        remove19.addEventListener("click",()=>{
            cartlist19.style.display="none"
            nameCart19.style.display="none"
            priceCart19.style.display="none"
            menuAdd25.style.display="block"
            remove19.style.display="none"
    })
    menuAdd26.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist20.style.display="flex"
        cart.style.display="block"
        menuAdd26.style.display="none"
        remove20.style.display="block"
        nameCart20.style.display="block"
        priceCart20.style.display="block"
        nameCart20.textContent="Sazwaan Fried Rice"
        priceCart20.textContent="85 Rs"
     })
        
    const remove20 = document.querySelector('.remove20')
        remove20.addEventListener("click",()=>{
            cartlist20.style.display="none"
            nameCart20.style.display="none"
            priceCart20.style.display="none"
            menuAdd26.style.display="block"
            remove20.style.display="none"
    })
    menuAdd27.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist21.style.display="flex"
        cart.style.display="block"
        menuAdd27.style.display="none"
        remove21.style.display="block"
        nameCart21.style.display="block"
        priceCart21.style.display="block"
        nameCart21.textContent="Veg Hakka Noodles"
        priceCart21.textContent="80 Rs"
     })
        
    const remove21 = document.querySelector('.remove21')
        remove21.addEventListener("click",()=>{
            cartlist21.style.display="none"
            nameCart21.style.display="none"
            priceCart21.style.display="none"
            menuAdd27.style.display="block"
            remove21.style.display="none"
    })
    menuAdd28.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist22.style.display="flex"
        cart.style.display="block"
        menuAdd28.style.display="none"
        remove22.style.display="block"
        nameCart22.style.display="block"
        priceCart22.style.display="block"
        nameCart22.textContent="Chicken Noodles"
        priceCart22.textContent="100 Rs"
     })
        
    const remove22 = document.querySelector('.remove22')
        remove22.addEventListener("click",()=>{
            cartlist22.style.display="none"
            nameCart22.style.display="none"
            priceCart22.style.display="none"
            menuAdd28.style.display="block"
            remove22.style.display="none"
    })
    menuAdd29.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist23.style.display="flex"
        cart.style.display="block"
        menuAdd29.style.display="none"
        remove23.style.display="block"
        nameCart23.style.display="block"
        priceCart23.style.display="block"
        nameCart23.textContent="Veg Chowmin"
        priceCart23.textContent="65 Rs"
     })
        
    const remove23 = document.querySelector('.remove23')
        remove23.addEventListener("click",()=>{
            cartlist23.style.display="none"
            nameCart23.style.display="none"
            priceCart23.style.display="none"
            menuAdd29.style.display="block"
            remove23.style.display="none"
    })
    menuAdd30.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist24.style.display="flex"
        cart.style.display="block"
        menuAdd30.style.display="none"
        remove24.style.display="block"
        nameCart24.style.display="block"
        priceCart24.style.display="block"
        nameCart24.textContent="Sazwaan Noodles"
        priceCart24.textContent="85 Rs"
     })
        
    const remove24 = document.querySelector('.remove24')
        remove24.addEventListener("click",()=>{
            cartlist24.style.display="none"
            nameCart24.style.display="none"
            priceCart24.style.display="none"
            menuAdd30.style.display="block"
            remove24.style.display="none"
    })
    menuAdd31.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist25.style.display="flex"
        cart.style.display="block"
        menuAdd31.style.display="none"
        remove25.style.display="block"
        nameCart25.style.display="block"
        priceCart25.style.display="block"
        nameCart25.textContent="Veg Soup"
        priceCart25.textContent="50 Rs"
     })
        
    const remove25 = document.querySelector('.remove25')
        remove25.addEventListener("click",()=>{
            cartlist25.style.display="none"
            nameCart25.style.display="none"
            priceCart25.style.display="none"
            menuAdd31.style.display="block"
            remove25.style.display="none"
    })
    menuAdd32.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist26.style.display="flex"
        cart.style.display="block"
        menuAdd32.style.display="none"
        remove26.style.display="block"
        nameCart26.style.display="block"
        priceCart26.style.display="block"
        nameCart26.textContent="Chicken Soup"
        priceCart26.textContent="70 Rs"
     })
        
    const remove26= document.querySelector('.remove26')
        remove26.addEventListener("click",()=>{
            cartlist26.style.display="none"
            nameCart26.style.display="none"
            priceCart26.style.display="none"
            menuAdd32.style.display="block"
            remove26.style.display="none"
    })
    menuAdd33.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist27.style.display="flex"
        cart.style.display="block"
        menuAdd33.style.display="none"
        remove27.style.display="block"
        nameCart27.style.display="block"
        priceCart27.style.display="block"
        nameCart27.textContent="Tamatar Soup"
        priceCart27.textContent="65 Rs"
     })
        
    const remove27= document.querySelector('.remove27')
        remove27.addEventListener("click",()=>{
            cartlist27.style.display="none"
            nameCart27.style.display="none"
            priceCart27.style.display="none"
            menuAdd33.style.display="block"
            remove27.style.display="none"
    })
    menuAdd34.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist28.style.display="flex"
        cart.style.display="block"
        menuAdd34.style.display="none"
        remove28.style.display="block"
        nameCart28.style.display="block"
        priceCart28.style.display="block"
        nameCart28.textContent="Paya Soup"
        priceCart28.textContent="100 Rs"
     })
        
    const remove28= document.querySelector('.remove28')
        remove28.addEventListener("click",()=>{
            cartlist28.style.display="none"
            nameCart28.style.display="none"
            priceCart28.style.display="none"
            menuAdd34.style.display="block"
            remove28.style.display="none"
    })
    menuAdd35.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist29.style.display="flex"
        cart.style.display="block"
        menuAdd35.style.display="none"
        remove29.style.display="block"
        nameCart29.style.display="block"
        priceCart29.style.display="block"
        nameCart29.textContent="Veg Biryani"
        priceCart29.textContent="80 Rs"
     })
        
    const remove29= document.querySelector('.remove29')
        remove29.addEventListener("click",()=>{
            cartlist29.style.display="none"
            nameCart29.style.display="none"
            priceCart29.style.display="none"
            menuAdd35.style.display="block"
            remove29.style.display="none"
    })
    menuAdd36.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist30.style.display="flex"
        cart.style.display="block"
        menuAdd36.style.display="none"
        remove30.style.display="block"
        nameCart30.style.display="block"
        priceCart30.style.display="block"
        nameCart30.textContent="Chicken Biryani"
        priceCart30.textContent="100 Rs"
     })
        
    const remove30= document.querySelector('.remove30')
        remove30.addEventListener("click",()=>{
            cartlist30.style.display="none"
            nameCart30.style.display="none"
            priceCart30.style.display="none"
            menuAdd36.style.display="block"
            remove30.style.display="none"
    })
    menuAdd37.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist31.style.display="flex"
        cart.style.display="block"
        menuAdd37.style.display="none"
        remove31.style.display="block"
        nameCart31.style.display="block"
        priceCart31.style.display="block"
        nameCart31.textContent="Hadrabadi Biryani"
        priceCart31.textContent="130 Rs"
     })
        
    const remove31= document.querySelector('.remove31')
        remove31.addEventListener("click",()=>{
            cartlist31.style.display="none"
            nameCart31.style.display="none"
            priceCart31.style.display="none"
            menuAdd37.style.display="block"
            remove31.style.display="none"
    })
    menuAdd38.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist32.style.display="flex"
        cart.style.display="block"
        menuAdd38.style.display="none"
        remove32.style.display="block"
        nameCart32.style.display="block"
        priceCart32.style.display="block"
        nameCart32.textContent="Dum Biryani"
        priceCart32.textContent="120 Rs"
     })
        
    const remove32= document.querySelector('.remove32')
        remove32.addEventListener("click",()=>{
            cartlist32.style.display="none"
            nameCart32.style.display="none"
            priceCart32.style.display="none"
            menuAdd38.style.display="block"
            remove32.style.display="none"
    })
    menuAdd1.addEventListener("click",()=>{
        cartlist34.style.display="block"
        cartlist34.style.display="flex"
        cart.style.display="block"
        menuAdd1.style.display="none"
        remove34.style.display="block"
        nameCart34.style.display="block"
        priceCart34.style.display="block"
        nameCart34.textContent="Pav Bhaji"
        priceCart34.textContent="140 Rs"
     })
        
    const remove34= document.querySelector('.remove34')
        remove34.addEventListener("click",()=>{
            cartlist34.style.display="none"
            nameCart34.style.display="none"
            priceCart34.style.display="none"
            menuAdd1.style.display="block"
            remove34.style.display="none"
    })
   
    menuAdd2.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist35.style.display="flex"
        cart.style.display="block"
        menuAdd2.style.display="none"
        remove35.style.display="block"
        nameCart35.style.display="block"
        priceCart35.style.display="block"
        nameCart35.textContent="Chhole Bhature"
        priceCart35.textContent="90 Rs"
     })
        
    const remove35= document.querySelector('.remove35')
        remove35.addEventListener("click",()=>{
            cartlist35.style.display="none"
            nameCart35.style.display="none"
            priceCart35.style.display="none"
            menuAdd2.style.display="block"
            remove35.style.display="none"
    })
    menuAdd3.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist36.style.display="flex"
        cart.style.display="block"
        menuAdd3.style.display="none"
        remove36.style.display="block"
        nameCart36.style.display="block"
        priceCart36.style.display="block"
        nameCart36.textContent="Gulab Jamun"
        priceCart36.textContent="70 Rs"
     })
        
    const remove36= document.querySelector('.remove36')
        remove36.addEventListener("click",()=>{
            cartlist36.style.display="none"
            nameCart36.style.display="none"
            priceCart36.style.display="none"
            menuAdd3.style.display="block"
            remove36.style.display="none"
    })
    menuAdd4.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist37.style.display="flex"
        cart.style.display="block"
        menuAdd4.style.display="none"
        remove37.style.display="block"
        nameCart37.style.display="block"
        priceCart37.style.display="block"
        nameCart37.textContent="Lassi"
        priceCart37.textContent="70 Rs"
     })
        
    const remove37= document.querySelector('.remove37')
        remove37.addEventListener("click",()=>{
            cartlist37.style.display="none"
            nameCart37.style.display="none"
            priceCart37.style.display="none"
            menuAdd4.style.display="block"
            remove37.style.display="none"
    })
    menuAdd5.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist38.style.display="flex"
        cart.style.display="block"
        menuAdd5.style.display="none"
        remove38.style.display="block"
        nameCart38.style.display="block"
        priceCart38.style.display="block"
        nameCart38.textContent="Aloo Sandwich"
        priceCart38.textContent="90 Rs"
     })
        
    const remove38= document.querySelector('.remove38')
        remove38.addEventListener("click",()=>{
            cartlist38.style.display="none"
            nameCart38.style.display="none"
            priceCart38.style.display="none"
            menuAdd5.style.display="block"
            remove38.style.display="none"
    })
    menuAdd6.addEventListener("click",()=>{
        cartlist33.style.display="block"
        cartlist39.style.display="flex"
        cart.style.display="block"
        menuAdd6.style.display="none"
        remove39.style.display="block"
        nameCart39.style.display="block"
        priceCart39.style.display="block"
        nameCart39.textContent="Misal Pav"
        priceCart39.textContent="100 Rs"
     })
        
    const remove39= document.querySelector('.remove39')
        remove39.addEventListener("click",()=>{
            cartlist39.style.display="none"
            nameCart39.style.display="none"
            priceCart39.style.display="none"
            menuAdd6.style.display="block"
            remove39.style.display="none"
    })
    
    const tiffin = document.querySelector(".tiffin")
    tiffin.addEventListener("click",()=>{
        cart.style.display="block"
    })
    const cartBack = document.querySelector(".cartBack")
    cartBack.addEventListener("click",()=>{
        cart.style.display="none"
    })
    const prankbig = document.querySelector(".prankBig")
    const prankBack = document.querySelector(".prankBack")
    prankBack.addEventListener("click",()=>{
        prankbig.style.display="none"
        cart.style.display="block"
    })
    
   cartlist33.addEventListener("click",()=>{
    cart.style.display="none"
    prankbig.style.display="flex"
   })
    
}
pageLoader()

