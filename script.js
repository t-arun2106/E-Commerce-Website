const wrapper=document.querySelector('.sliderwrapper')

const menuitem=document.querySelectorAll(".menuitem")


const products = [
    {
        id:1,
        title:"AIR FORCE",
        price: " ₹.1999",
        colors:[
            {
                code:"black",
                img:"./img/air.png",
            },
            {
                code:"blue",
                img:"./img/air2.png",
            }
        ]
    },
    {
        id:2,
        title:"AIR JORDAN",
        price: " ₹.1499",
        colors:[
            {
                code:"lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            }
        ]
    },
    {
        id:3,
        title:"BLAZER",
        price: " ₹.1999",
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"green",
                img:"./img/blazer2.png",
            }
        ]
    },
    {
        id:4,
        title:"CRATER",
        price: " ₹.2499",
        colors:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"green",
                img:"./img/crater2.png",
            }
        ]
    },
    {
        id:5,
        title:"HIPPIE",
        price: " ₹.3999",
        colors:[
            {
                code:"gray",
                img:"./img/hippie.png",
            },
            {
                code:"black",
                img:"./img/hippie2.png",
            }
        ]
    },
]

let choosenproduct=products[0]

const currentproductimg= document.querySelector(".productimg")
const currentproducttitle= document.querySelector(".producttitle")
const currentproductprice= document.querySelector(".productprice")

const currentproductcolors= document.querySelectorAll(".color")
const currentproductsizes= document.querySelectorAll(".size")




menuitem.forEach((item,index)=> {
    item.addEventListener("click",()=>{
        
         //change the current slider as per choice
        const translateValue = -100* index;
        wrapper.style.transform = `translateX(${translateValue}vw)`

        //change the choosen product
        choosenproduct=products[index]

        //change the texts of currentproduct
        currentproducttitle.textContent=choosenproduct.title
        currentproductprice.textContent= choosenproduct.price
        currentproductimg.src=choosenproduct.colors[0].img
       
        //asssigning colors to color variants
        console.log(currentproductcolors)
        currentproductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenproduct.colors[index].code
        })
    })
})

currentproductcolors.forEach((color,index)=>{

    color.addEventListener("click",()=>{
        console.log(choosenproduct)
        currentproductimg.src=choosenproduct.colors[index].img
    })
})


currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsizes.forEach((size)=>{
            console.log(size)
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})

const  productbutton=document.querySelector(".productbutton")
const payment=document.querySelector(".payment")
const close=document.querySelector(".close")

console.log(productbutton)
console.log(payment)
console.log(close)
productbutton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})



