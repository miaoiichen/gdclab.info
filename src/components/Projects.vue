<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted,reactive } from '@vue/runtime-core';

export default {
setup(){
    const projectArr = reactive({data:{}});
    
   const router = useRouter();

     const gotoNewRouter = (id)=>{
     router.push(`views/Porjects/${id}`);
   }

    onMounted(()=>{
        axios.get("../js/project.json").then((res)=>{
            console.log(res.data);
            projectArr.data = res.data;
           
        })
    });

    return{projectArr,gotoNewRouter}
},
}
</script>


<template>
<section id="projects">

    <div class="mainPadding">
     <!--FOLDER BG-->
                <!-- <div class=" white-line trapezoid"></div>
                <div class=" white-line trapezoid border-t-0"></div>
                <div class=" white-line trapezoid border-t-0 border-b-0 "></div>
                    -->
    <!--/FOLDER BG-->
   
        <div class="caseMain">
           <div v-for="item in projectArr.data" :key="item.id"  class="caseRounded white-line" @click="gotoNewRouter(item.id)">

                <div class="caseImg white-line">
                     <img :src="item.img" alt="">
                </div>

                <div class="caseContent">
                            <div class="caseDescription">
                               <h2>{{item.brand}}</h2>
                                <h3>{{item.name}}</h3>
                                <p>
                                   {{item.indexIntro}}
                                </p>
                            </div>
                            <a class="caseMore" >
                                    
                                    <div class="caseMoreWord">MORE</div>
                                    <div class="arrowDiv arrow-outer">
                                        <span class="arrowCase arrow-g"></span>
                                    </div>

                            </a>

                </div> 




           </div>

            
</div>
       




           

    
    <a href="/Projects">more</a>
    </div>

</section>
</template>



<style lang="postcss" scoped>
.mainPadding{
  @apply p-6 py-8 pb-12 md:p-24 sm:mt-0 md:pb-12 w-full mt-20;
}
.caseMain{
  @apply relative text-white w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-24 xl:gap-12 xl:max-w-6xl mx-auto;
}
.trapezoid{
    @apply   border-l-0 border-r-0  w-full h-4 relative;
  }

.caseRounded{
  @apply flex sm:flex-wrap items-stretch text-white max-w-lg mx-auto   cursor-pointer;
}
.caseImg{
  @apply grow-0 w-2/5 sm:w-full rounded-t-full overflow-hidden bg-red-100;
}
.caseContent{
  @apply grow w-3/5 sm:w-full h-auto  flex flex-col sm:flex-row sm:justify-between ;
}
.caseDescription{
  @apply w-full sm:w-8/12 xl:w-9/12 pl-3 pr-1 pt-3 grow flex flex-wrap  content-center  pb-2 sm:pb-6 sm:px-4 ;
}
.caseDescription h2{
  @apply text-green-400 text-base font-bold lg:text-2xl xl:text-xl w-full
}
.caseDescription h3{
  @apply text-green-400 text-base font-bold lg:text-2xl xl:text-xl
}
.caseDescription p{
  @apply text-xs lg:text-base xl:text-xs;
}

.caseMore{
  @apply  cursor-pointer flex flex-none relative  justify-end items-center lg:flex-wrap sm:items-end xl:justify-center lg:items-center bg-blue-900 sm:p-2 sm:w-4/12 xl:w-3/12;
}
.caseMoreWord{
  @apply text-sm lg:text-lg xl:text-base text-green-400 py-2 sm:h-8 lg:h-10 xl:order-last xl:-mt-5 ;
}
.arrow-outer{
    @apply w-6 h-6  flex justify-center items-center right-0 bottom-0 m-2 xl:self-end  ;
  } 
 .arrowDiv{
    @apply w-6 h-6  flex justify-center items-center right-0 bottom-0 xl:mx-4 lg:m-2 m-1 ;
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


.caseRounded{
    border-radius:5rem 5rem 0 0;
}
@media (min-width: 440px) {
.caseRounded{
    border-radius:7rem 7rem 0 0;
    }
}
@media (min-width: 600px) {
.caseRounded{
    border-radius:8rem 8rem 0 0;
    }
}
@media (min-width: 640px) {
.caseRounded{
    border-radius:50% 50% 0 0;
    }
}

.caseMore{
    background:#001664;
}
/*ARROW*/
.arrow-outer{
  transition: 0.2s; 
 /* &:hover{
    transform: rotate(45deg);
  }*/
}
.arrowCase{
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
  .arrowCase{
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


.trapezoid {
  
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