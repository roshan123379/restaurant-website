export function contact(){
    const homeHeader = document.querySelector(".homeHeader")
    const contact = document.createElement("button")
    contact.classList.add("contact")
    contact.textContent="Contact"
    homeHeader.appendChild(contact)

    const tiffin = document.createElement('button')
    tiffin.classList.add('tiffin')
    tiffin.textContent="Tiffin"
    homeHeader.appendChild(tiffin)

    const name = document.createElement('h2')
    name.classList.add('name')
    name.textContent="Roshan Prajapati"
    homeHeader.appendChild(name)


    const profile = document.createElement('img')
    profile.classList.add('profile')
    profile.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    homeHeader.appendChild(profile)
}
export function contactContent(){
    const contactContent = document.createElement("div")
    contactContent.classList.add("contactContent")
    contactContent.style.display="none"
    container.appendChild(contactContent)

    const contactcontent = document.querySelector('.contactContent')
    const subContact = document.createElement('div')
    subContact.classList.add("subContact")
    contactcontent.appendChild(subContact)
    

    const subcontact = document.querySelector('.subContact')

    const phone = document.createElement('div')
    phone.classList.add('phone')
    subcontact.appendChild(phone)

    const detailName1 = document.createElement('div')
    detailName1.classList.add("detailName1")
    detailName1.textContent="Address"
    phone.appendChild(detailName1)

    
    const address = document.createElement('div')
    address.classList.add('address')
    address.textContent="Opposite krishna Hall, mira road, Borivali,  Mumbai 400067" 
    phone.appendChild(address)

    const detailName2 = document.createElement('div')
    detailName2.classList.add("detailName2")
    detailName2.textContent="Timing"
    phone.appendChild(detailName2)

    const time = document.createElement('div')
    time.classList.add('time')
    time.textContent="MON - THU : 8:30AM - 10:00PM SUNDAY : Closed"
    phone.appendChild(time)
    
    const detailName3 = document.createElement('div')
    detailName3.classList.add("detailName3")
    detailName3.textContent="Number"
    phone.appendChild(detailName3)

    const number = document.createElement('div')
    number.classList.add('number')
    number.textContent="+91 99999-33333"
    phone.appendChild(number)

    const map = document.createElement("div")
    map.classList.add('map')
    subcontact.appendChild(map)

    const mapImage = document.createElement('img')
    mapImage.classList.add('mapImage')
    mapImage.src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
    map.appendChild(mapImage)
}

