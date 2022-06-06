
<script>
export default {

}
</script>


<template>
<section id="index">
     <div class="Limg"></div>
    <div class="mainPadding">
        <div class="mainContent white-line">
                <div class="mainObj">     
                    <!--GDCW-->
                    <div class="z-30">
                        <div class="index-brandName ">
                            <span data-aos="fade-down" data-aos-delay="250" >G</span>
                            <span data-aos="fade-down" data-aos-delay="350">R</span>
                            <span data-aos="fade-down" data-aos-delay="450">O</span>
                            <span data-aos="fade-down" data-aos-delay="550">O</span>
                            <span data-aos="fade-down" data-aos-delay="650">V</span>
                            <span data-aos="fade-down" data-aos-delay="750">Y</span>
                        </div>
                        <div class="index-brandName" >
                            <span data-aos="fade-up" data-aos-delay="250">D</span>
                            <span data-aos="fade-up" data-aos-delay="350">I</span>
                            <span data-aos="fade-up" data-aos-delay="450">G</span>
                            <span data-aos="fade-up" data-aos-delay="550">I</span>
                            <span data-aos="fade-up" data-aos-delay="650">T</span>
                            <span data-aos="fade-up" data-aos-delay="750">A</span>
                            <span data-aos="fade-up" data-aos-delay="850">L</span>
                        </div>
                    </div>
                    <!--KvObj-->
                    <div class="kvObj" >
                        <div class="circle" data-aos="fade-right"  data-aos-delay="100" ><img src="img/kv-circle01.png" alt=""></div><!--圓環-->
                        <div class="zig"  data-aos="fade-left" ><img src="img/kv-sq01.png" alt=""></div><!--鋸齒-->
                        <div class="block  block01" data-aos="fade-down" ><img src="img/kv-sq02.png" alt=""></div><!--方塊-->
                        <div class="block  block02" data-aos="fade-up"  data-aos-delay="100"><img src="img/kv-sq02.png" alt=""></div><!--方塊-->
                        <div class="block  block03" data-aos="fade-down"  data-aos-delay="200" ><img src="img/kv-sq02.png" alt=""></div><!--方塊--> 
                    </div>
                    <!--Oval-->
                     <div class="ovals" data-aos="flip-left"  data-aos-delay="400">

                        <div class="oval"></div>
                        <div class="oval"></div>
                        <div class="oval"></div>

                         <!--BALL-->
                        <div class="ovalsBall" data-aos="zoom-in-up"  data-aos-delay="400"><img src="img/kv-ball01.png" alt=""></div><!--左球-->
                    </div>  
                    
            </div>

                    <!--WHAT WE DO-->
                    <router-link 
                        :to="{name:'HomePage',hash:'#about'}" 
                        v-scroll-to="'#about'" 
                        class="whatwedo" data-aos="fade-right"  data-aos-delay="100"
                        >
                       

                        <div class="index-mainBtn btn">
                            <h3 class="index-whatWeDo">
                                <p>WHAT</p>
                                <p>WE</p>
                                <p>DO</p>   
                                <div  class="index-whatWeDo-icons mr-2 ">
                                    <span class="flat"></span>
                                </div>
                            </h3>
                            
                            <div class="index-whatWeDo-icons bottom-0 md:m-4 m-4 mb-2 arrow-outer ">
                                <span class="arrow"></span>
                            </div>
                            <div class="index-whatWeDo-block bg white-line">
                            
                            </div>
                      </div>
                      <div  class="index-whatWeDo-outer index-whatWeDo-block md:-top-6 md:left-6 top-1 left-1 wline01  white-line  "></div>
                      <div  class="index-whatWeDo-outer index-whatWeDo-block md:-top-3 md:left-3 top-2 left-2 wline02  white-line  "></div>
                      <!--BALL-->
                        <div class="w-12 md:w-16 lg:w-24 absolute z-40 top-28 -left-8 lg:-left-12 lg:top-44" data-aos="zoom-in-down"  data-aos-delay="600"><img src="img/kv-ball01.png" alt=""></div>

                    
                    
                    </router-link>
                    <!--/WHAT WE DO-->

                    <!--GO TO SEE PROJECT-->
                    <router-link 
                        :to="{name:'HomePage',hash:'#work'}" 
                        v-scroll-to="'#work'" 
                         class="whatwedo seework " data-aos="fade-up"  data-aos-delay="400">
                                <div class="index-mainBtn btn">
                                    <h3 class="absolute md:p-10 p-3 pt-5 pl-4">
                                        <div>
                                            <img src="img/kv-workword.svg" alt="">
                                        </div>
                                        
                                        <div  class="md:w-5 md:h-5 h-4 w-4 absolute flex justify-center items-center md:left-24 md:ml-0.5  md:top-20 md:mt-3 left-14 ml-1  top-14 mt-1 ">
                                            <span class="bg-green-400 rounded-full  eye"></span>
                                        </div>
                                    </h3>
                                    
                                    <div class="md:w-10 md:h-10 w-6 h-6  absolute flex justify-center items-center md:left-20 left-10   md:bottom-10 bottom-6 m-4 arrow-outer ">
                                        <span class="arrow"></span>
                                    </div>
                                    <div class="index-work-outline white-line bg">
                                        
                                    </div>
                                </div>
                                <div  class="absolute  index-work-outline  z-10 -top-0 md:-right-6 white-line -right-2 wline01"></div>
                                
                    </router-link>
                    <!--/GO TO SEE PROJECT-->
        </div>
        <div class="kv-folder"  >
            <div class=" trapezoid white-line" ></div>
            <div class=" trapezoid white-line" ></div>
            <div class=" border-b-0 trapezoid white-line" ></div>
        </div>
    </div>  
    <!--/-->

    
    
</section>
</template>



<style lang="postcss" scoped>
#index{
   @apply h-screen ;
}
.mainPadding{
  @apply p-8 py-24 pb-12 md:p-24 md:pb-12 w-full;
}
.mainContent{ 
   @apply  w-full h-full relative flex justify-center content-center ;
}
.mainObj{ 
   @apply  mix-blend-hard-light relative w-full h-full  flex items-center justify-center pb-10 sm:pb-0;
}
.mainObj>div{ 
   @apply absolute text-white ;
}

.index-brandName{
    @apply  mx-auto justify-between flex;
}
.index-brandName span{
    @apply md:p-4 p-2 md:text-base text-lg;
}

.mainObj .block{ 
   @apply absolute w-5/12 sm:w-40 md:w-6/12 lg:w-5/12 ;
}
.kvObj{
    @apply relative w-11/12 sm:w-7/12 xl:w-6/12 md:max-w-2xl max-w-xs flex justify-center pl-12;
}
.kvObj .circle{
    @apply  relative z-10 w-9/12 sm:w-64  md:w-10/12 lg:w-8/12 xl:w-9/12  max-w-md -left-5 sm:-left-0
}
.kvObj .zig{
    @apply absolute z-20 w-7/12 sm:w-52  md:w-8/12 lg:w-6/12 max-w-sm -left-10 -top-16 sm:-left-16 md:-left-20;
}
.kvObj .block01{
    @apply -right-4  sm:-right-12  lg:-right-14 xl:-right-10   bottom-0   sm:bottom-0    md:bottom-0   xl:bottom-8;
}
.kvObj .block02{
    @apply -right-10 sm:-right-20  lg:-right-24 xl:-right-24  -bottom-6   sm:-bottom-8   md:-bottom-8 xl:bottom-0;
}
.kvObj .block03{
    @apply -right-16 sm:-right-28  lg:-right-36 xl:-right-36  -bottom-12  sm:-bottom-16  md:-bottom-16  xl:-bottom-8;
}
.ovals{
    @apply w-10/12 sm:w-1/2  h-1/3 md:h-1/2 lg:h-3/4  bottom-0  left-0  max-w-md;
}
.ovalsBall{
    @apply w-14 md:w-20 absolute z-20 top-12 md:top-24  left-28 lg:left-52;
}



 .index-mainBtn{
    @apply relative z-40 cursor-pointer;
  }
  .index-whatWeDo{
    @apply absolute text-xl lg:text-3xl text-right text-white right-2 md:right-3  top-2 md:top-3  tracking-widest;
  }
  .index-whatWeDo p{
    @apply leading-6 lg:leading-8 pb-0 lg:pb-0.5  ;
  }
  .index-whatWeDo-icons{
    @apply  w-6 h-6  md:w-10 md:h-10 absolute flex justify-center items-center right-0;
  }
  .index-whatWeDo-block{
    @apply w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-64 xl:h-64 ;
  }
  .index-whatWeDo-outer{
    @apply absolute z-10;
  }

  .index-seework{
    @apply absolute z-20  lg:-right-10 md:-right-12 md:-bottom-4 -bottom-8 -right-4; 
  }

 .index-work-outline{
    @apply md:w-52 md:h-60 w-32 h-40 rounded-t-full ;
  }
.whatwedo{
    @apply absolute -top-12 -right-4 md:-right-12 z-30;
}
.seework{
    @apply -bottom-12 top-auto ;
}
.Limg{
    @apply  w-5/12 sm:w-3/12 h-1/5 sm:h-1/3 bg-red-100 absolute left-0 top-2/3 sm:top-1/3 z-0 opacity-90;
}
 .kv-folder .trapezoid{
    @apply  border-t-0 border-l-0 border-r-0  w-full h-4;
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

.mainObj{
    .block{
        max-width: 15rem;
    }
} 
.circle{
    animation: circleAni 15s linear infinite ;
}
@keyframes circleAni {
  0% {
   transform:translate3d(0,0,0)
   
  }
  25% {
    transform:translate3d(-20px,20px,-20px)
  }
  50% {
   transform:translate3d(20px,20px,20px)
  }
  75% {
  transform:translate3d(20px,-20px,0)
  }
  100% {
   transform:translate3d(0,0,0)
  }
}

.zig{
    animation: zigAnni 15s linear infinite ;
}
@keyframes zigAnni {
  0% {
   transform:translate3d(0,0,0)
  }
  25% {
     transform:translate3d(20px,20px,20px)
    
  }
  50% {
   transform:translate3d(-20px,20px,-20px)
  }
  75% {
  transform:translate3d(20px,-20px,0)
  }
  100% {
   transform:translate3d(0,0,0)
  }
}

.block01{

    animation: b1Anni 10s linear infinite ;
}
@keyframes b1Anni {
  0% {
   transform:translate3d(0,0,0)
  }
  50% {
    transform:translate3d(20px,-20px,20px)
  }
  100% {
   transform:translate3d(0,0,0)
  }
}

.block02{

    animation: b1Anni 10s linear infinite ;
    animation-delay: 3s;
}
.block03{

    animation: b1Anni 10s linear infinite ;
    animation-delay: 6s;
}



.ovals{
    padding-left: 5%;
     div.oval{
      position: absolute;
      width: 15%;
      min-height: 90px;
      height: 85%;
      border-radius: 50%;
      max-height: 45vh;
      border:3px solid #ffffff;
    }
     div.oval:nth-child(1){
         animation: oval01 10s linear infinite ;
     }
     div.oval:nth-child(2){
        animation: oval02 10s linear infinite ;
        animation-delay: 0.3s;
        border:2px solid #F59E0B;
    }
    div.oval:nth-child(3){
        animation: oval03  10s linear infinite ;
        animation-delay: 0.6s;
    }
}

@keyframes oval01 {
  0% {
    margin-left:5%;
  }
  5% {
    margin-left: 20%;
  }
  10% {
     margin-left:5%;
  }
  100% {
     margin-left:5%;
  }
}

@keyframes oval02 {
  0% {
    margin-left:0%;
    width: 15%;
  }
  5% {
    margin-left:30%;
   
  }
  10% {
    margin-left:14%;
    width: 20%;
  }
  98% {
    margin-left:14%;
    width: 20%;
  }
  100% {
    margin-left:0%;
    width: 15%;
  }
}
@keyframes oval03 {
  0% {
    margin-left:5%;
  }
  5% {
    margin-left:30%;
  }
  10% {
    margin-left:26%;
  }
  98% {
    margin-left:26%;
  }
  100% {
    margin-left:5%;
  }
}



/*ARROW*/
.arrow-outer{
  transition: 0.2s; 
 /* &:hover{
    transform: rotate(45deg);
  }*/
}
.arrow{
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  transform: rotate(-45deg);
  &:after,&:before{
    content:'';
    position: absolute;
    width: 40%;
    height: 2px;
    background-color: white;
    border-radius: 50%;
    top: 0;
    right:0;
  }
  &:before{
    transform-origin: top right;
    transform: rotate(45deg);
  }
  &:after{
    width: 41%;
    transform-origin: top right;
      transform: rotate(-45deg);
    top: 1px;
    right: 2px;
  }
}
@media (min-width: 768px) {
  .arrow{
    &:after{
      width: 45%;
      top: 1px;
      right: 1px;
    }
  }
}
.arrow-g{
  background-color: $green-400;
  &:after,&:before{
    background-color: $green-400;
  }
}
/*FLAT*/
.flat{
  width: 100%;
  height: 50%;
  background-color: $pink-600;
  transform: skew(-30deg,0deg);
  position: relative;
  &:after{
    content:"";
    width: 100%;
    height: 100%;
    position:absolute;
    border:solid 2px white;
    top: 50%;
    left: 30%;
    animation:flat 2.5s infinite ;
  }
}

@keyframes flat {
  0% {
    top: 0%;
    left: 0%;
  }
  50% {
    top: 50%;
    left: 30%;
  }
  100% {
    top: 0%;
    left: 0%;
  }
}

/***EYE****/
.eye{
  width:100%;
  height: 100%;
  margin-top: 0.1rem;
  transform-origin: center;
  animation:eye 2s infinite ;
}
@media (min-width: 768px) {

}
@keyframes eye {
  0% {
    height: 100%;
  }
 10% {
    height: 0em;
  }
  20% {
    height: 100%;
  }
  30% {
    height: 0em;
  }
  40% {
    height: 100%;
  }
  100%{
    height: 100%;
  }
}




.whatwedo{
  .bg{
    background-image: url(/public/img/whatwedo.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size:110%;
    transition: 0.2s;
  }
  div{
    transition: 0.2s;
  }
  &:hover{
    
    .wline01{
      top: -1.75rem;
      right: -1.75rem;
     
    }
    .wline02{
      top: -0.875rem;
      right: -0.875rem;
    
    }
    .bg{
      background-size: 120%;
      transition: 0.2s;
    }

  }
}

.seework{
  .bg{
    background-image: url(/public/img/r-bg.jpg);
    background-size: 300%;
    
  }
  &:hover{
    .bg{
      background-size: 350%;
    }
    .wline01{
      top: -0rem;
      right: -1.75rem;
     
    }

  }
}

.Limg{
    background-image: url(/public/img/r-bg.jpg);
}
.trapezoid {
  position: relative;
 &:before,&:after{
  content:'';
  width: 1px;
  height: 110%;
  background-color: white;
  position: absolute;
 
 }
 &:before{
   left: 0;
   transform: rotate(-25deg);
   transform-origin: top left;
 }
 &:after{
  right: 0;
  transform: rotate(25deg);
  transform-origin: top right;
}
}
</style>