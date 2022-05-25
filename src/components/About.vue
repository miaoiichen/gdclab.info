
<script>
import { METHOD_TYPES } from '@babel/types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

export default {

   mounted(){
      this.showMyDiv() ;
      gsap.to(".ticket-flat",{
        scrollTrigger:{
        trigger: "#app",
        markers: false,
        start: "center center",
        toggleActions: "play none none reverse",
        toggleClass: {targets: ".tc-container", className: "active"},
        },
        duration:0,
        });
      gsap.to(".ticket-flat",{
        scrollTrigger:{
        trigger:  "#app",
        markers: false,
        start: "center center",
        toggleClass:{targets: ".ticket-flat", className: "active"},
        },
        duration:0,
        });

     gsap.to(".ticketWord",{
        scrollTrigger:{
        trigger:  "#about",
        markers: false,
        start: "top center",
        toggleClass:{targets: ".ticketWord", className: "active"},
        },
        duration:0,
        });


   },

 methods: {
    showMyDiv(text) {
        const node =this.$refs.LetterDiv;
        text ='WE MAKE DIGITAL GROOOOOOVY';
        

        console.log(this.$refs.LetterDiv);
        node.innerHTML = '';
        console.log('node' + node);
        const letters = text.split('');//文字
        console.log("這是什麼:" + letters)
        const step = 360 / letters.length;
        console.log("這是STEP:" + step)

        const transform = (deg, radius)=>{
            return `rotateY(${deg}deg) translateZ(${radius}px)`
        }
      letters.forEach((word, i) => {
          let radius = 110;
            const span = document.createElement('span')
            span.textContent = word;
            console.log("這是word:" + span.textContent)
            const deg = step * i;
            console.log("這是deg:" + step * i);
            span.style.transform = transform(deg, radius);
            console.log("這是transform:" +  transform(deg, radius) );
            span.style.position = 'absolute';
            node.append(span);
            console.log("這是end:" +  node.append(span));
             
        });

    },

  },

 

}
</script>


<template>
<section id="about" class="sectionPadding text-white" >
   <!--ABOUT-->
     <div class="mainContent white-line" >
         <div class="lg:flex w-full xl:w-10/12">
                <div  class="w-full lg:w-5/12 relative  ">
                 <!--CIRCLE WORD-->    
                            <div class="ticket-flat w-full max-w-sm mx-auto">
                                <div class="tc-container">
                                    <div class="tc-scene">
                                      <div id="letters" ref="LetterDiv" class="circle">WE MAKE DIGITAL GROOOOOOVY</div>
                                    </div>
                                  </div>          
                                  <div class="flatTicket">
                                    
                                  </div>
                                <!-- <div class="flat01 tc-flat"></div>
                                <div class="flat02 tc-flat"></div>
                                <div class="flat03 tc-flat "></div> -->
                            </div>
                <!--/CIRCLE WORD-->
                </div>

                <!--CONTENT-->
                <div  class="w-full lg:w-7/12">
                <div class="w-10/12 xl:w-11/12 sm:max-w-sm  mx-auto lg:ml-1 lg:max-w-none mt-2  md:mt-10 pb-10 sm:pb-12">
                             <h4 class="text-lg md:text-2xl pb-1">WE MAKE DIGITAL</h4>

                            <h2 class="font-bold text-4xl lg:text-5xl text-pink-600 pb-1">GROOÖOOVY</h2>
                            <div class="flex pb-1  ">
                                <p class="text-base">\ groovy﹒ˈɡruː.viˈ / </p>
                                
                                <span class="w-6 ml-2 hover:opacity-70 cursor-pointer"><img src="/img/vol.svg" alt=""></span>
                            </div>
                            <p class="pb-2 text-base md:text-sm lg:text-base">(adj).fashionable and interesting. </p>
                            <P class="text-base md:text-sm lg:text-base xl:pr-8 pr-0 pb-2">
                                GDC成立於2016年，並專精於數位領域佈局與執行，
                                主力於網站設計與系統規劃，針對不同的問題核心，制定客製化數位解決方案
                                我們善於換位思考，並確信「感同身受」更能創造出使用者真正需要的！
                            </P>
                            <p class="text-yellow-400 text-base lg:text-base md:text-sm">
                                在數位的世界裡探索每一種可能<br>
                                Let’s Groovy Together．
                            </p>    

                </div>
                </div>
                <!--/CONTENT-->
                </div>

                  <!--TICKET STUB-->
                <div class="w-full xl:w-2/12 xl:flex">
                      <div class="w-full bg-black bg-opacity-40 overflow-hidden relative xl:h-full xl:w-12">
                            <p class="opacity-50 whitespace-nowrap text-4xl p-3 ticketWord">ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE! ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE!ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE!ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE!ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE!ENJOY DIGITAL WITH GROOVY DESIGN CREATIVE!</p>
                        </div>
                        <div  class=" w-full xl:w-9/12 ">
                            <div class="px-20 xl:p-0 pt-5 pb-8 md:pb-12 max-w-sm sm:w-6/12 xl:w-full mx-auto xl:h-full xl:flex xl:justify-center xl:content-center" > 
                                <img class="xl:transform xl:-rotate-90" src="/img/barcode.svg" alt="">
                            </div>
                        <div  class="md:w-24 md:h-24 w-16 h-16 absolute flex justify-center items-center md:-right-12 -right-4 bottom-6">
                            <span class="flat"></span>
                        </div>

                        </div>
                </div>
                <!--/TICKET STUB-->


    </div>
        
    <!--/-->
</section>


</template>



<style lang="postcss" scoped>
.sectionPadding{
    @apply  px-8 md:px-24 ;
}
.mainContent{ 
   @apply  w-full h-full relative block xl:flex justify-center content-center ;
}
</style>


<style lang="scss" scoped>

$blue-700:#1D4ED8;
$blue-800:#1E40AF;
$blue-900:#1E3A8A;
$yellow-400:#FBBF24;
$yellow-500:#F59E0B;
$pink-600:#DB2777;
$pink-500:#EC4899;
$green-400:#34D399;
$green-500:rgb(74,222,128);



.ticket-flat{
    height: 230px;
    margin-top: 3rem;
  
   
.tc-container {
  position: absolute;
  top: -50px;
  left: 50%;
  margin-left: -120px;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 230px;
    .tc-scene {
        margin-top: -10%;
        transform: rotateY(00deg) rotate(30deg);
        transform-origin: center center;
        transform-style: preserve-3d;
        transition: 1s;
       
    }
     &.active{
         margin-left: -100px;
          .tc-scene{
            transform: rotateY(70deg) rotate(45deg);
            margin-top: -20%;
            margin-left: 20px;
            }
        }
  
  .circle {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    color:white;
    animation: rotate 10s linear infinite;
    transform-style: preserve-3d;
  }
}

.flatTicket{
    width: 90%;
    height: 90%;
    margin:5rem auto;
    border:white solid 1px;
    transform: skew(0deg);
    position: relative;
    left: 3%;
    transition: 0.3s linear;
    &:before,&:after{
         content:"";
        position:absolute;
         width: 100%;
        height: 100%;
    }
    &:before{
        border:$yellow-500 solid 1px;
        margin-top: 10px;
        margin-left: -10px;
    }
    &:after{
       background: $pink-600;
        border:$pink-600 solid 1px;
        margin-top: 20px;
        margin-left: -20px;
    }
}
&.active{
    padding-top: 2rem;
    .flatTicket{
      transform: skew(-25deg);
      height: 30%;
      width:70%;
      transition: 0.3s linear;
      margin-top: 100px;
 

      &:before{
         margin-top: 10px;
         margin-left: 10px;
        }
        &:after{
          margin-top: -10px;
          margin-left: -10px;
        }
      }
}

   
}
@media (min-width: 640px) {
  .ticket-flat{
  
   &.active{
       .flatTicket{
           width:100%;
       }
   }
  }
}

@media (min-width: 768px) {
  .ticket-flat{
   margin-top:100px;
  
  &.active{
       .flatTicket{
           width:70%;
       }
   }
  
  }
}


@media (min-width: 1024px) {
.ticket-flat{
 .tc-container{
     top:50px;
 }
 }
}



@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-1turn);
  }
}

@media (min-width: 640px) {
.tc-container {
  top: -10px;
  margin-left: -128px;
}
}


@media (min-width: 1024px) {
  .tc-container {
    top: -10px;
    left: 0;
  }
}

.ticketWord{
    margin-left: 0px;
    transition:linear 3s;
    &.active{
    margin-left:-854px;
     transition:linear 3s;
    }
}
@media (min-width: 1280px) {
.ticketWord{
    transform: rotate(90deg);
    margin-left: 0px;
    margin-top: 0;
    
    &.active{
    margin-left: 0px;
    margin-top: -854px;
    }
}
}

</style>