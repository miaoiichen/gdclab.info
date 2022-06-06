<script>
import { onMounted ,onUnmounted,reactive ,ref } from '@vue/runtime-core';
import { useRoute,useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup(){
    const route = useRoute();
    const router = useRouter();
    const isError = ref(false);
    const project = reactive({data:{}});
    const tags = reactive({ data:{} });
    const content = reactive({ data:{} });
    const preCase = reactive({data:{}});
    const nextCase = reactive({data:{}});
    let caseNum = ref(0);
    let add = ref(0);
    let sub = ref(0);

    let timer = null;

    const projectArr = reactive({data:{}});
    const gotoNewRouter = (id)=>{
     router.push(`views/Porjects/${id}`);
   }
    onMounted(()=>{
       axios.get("js/project.json").then((res)=>{
         //  console.log(res.data[0]);
            
            projectArr.data = res.data;


            
            projectArr.data.forEach((ele,index) => {
              if(route.params.id === ele.id){
                caseNum = index;
              console.log("產出Index  "+   caseNum);
              console.log("ele:  " + ele.id)
              
            }
           });
              add = caseNum +1;
              sub = caseNum -1;
//console.log("ccccc:  " + caseNum);
              

             if(add>projectArr.data.length-1){
                  add = 0; 
                }else if(sub<0){
                sub = projectArr.data.length-1;
              };
           
           console.log("addddd:  " + add);
              console.log("sssssssssss:  " + sub);
           
           
            preCase.data = res.data[sub];
            nextCase.data = res.data[add];
  




      
          
          
          //map(item=>item.id
          //   //console.log(item.id , index);
          //   //  if(route.params.id === item.id){
          //   //   const Now = index;
          //   //   const Pre = index - 1 ;
          //   //   const Next = index + 1 ;
          //   //   console.log("產出Index  "+   index)
          //   //   console.log("上一位  "+   Pre);
          //   //   console.log("下一位  "+   Next);
          //   //  // console.log("跟路徑一樣"+item.id,Now,Pre,Next);
          //   //  // others.push(item.id);
          //   //  }
          //  );
          //   others()

            //let hArr = prArr.map(item=>item.id);

         

           
        });

      axios.get(`js/${route.params.id}.json`).then((res)=>{
        project.data = res.data;
        tags.data = res.data.tags;
        content.data = res.data.content;
   // console.log("路徑"  +  route.params.id);
     //   console.log(res.data.tags);
        
      })
      //只要status 不等於 200 就會回傳error
      .catch(error=>{
        isError.value = true;
        project.data['error_mesage']=error.response.data.error_message
        console.log(project.data['error_message']);

        //過三秒跳轉
        timer = setTimeout(()=>{
          router.push({path:"/"}); //回列表頁
          //router.go(-1); //回上一頁
        },30000)
      });
    
    });

    onUnmounted(()=>{
      clearTimeout(timer);
    });
    return{project,route,isError,tags,content,projectArr,gotoNewRouter,preCase,nextCase,add,sub};
  },
};
</script>
<template>
 <div class="mainPadding">
        <div class="w-full">
            <img :src="project.data.mainImg" alt="">
        </div>

           <!--FOLDER BG-->
                 <div class=" white-line trapezoid"></div>
                <div class=" white-line trapezoid border-t-0"></div>
                <div class=" white-line trapezoid border-t-0 border-b-0 "></div>

          <!--/FOLDER BG-->

          <!--Content-->
          <div class="w-full white-line xl:p-12 p-8 px-6 md:px-12 xl:px-16  text-white">
            <div class="max-w-7xl mx-auto">
              <h2 class="text:xl xl:text-3xl text-teal-400 font-bold xl:pb-2">{{project.data.brand}}</h2>
              <h1 class="text-3xl xl:text-5xl text-white font-bold pb-2 xl:pb-4">{{project.data.name}}</h1>
              <h3 class="text-sm sm:text-base mb-4">{{project.data.description}}</h3>
              <ul class="inline-block sm:flex ">
                <li 
                v-for="item in tags.data" 
                :key="item.id" 
                class="rounded-full py-1 px-4 border border-yellow-400 text-yellow-400 mr-4 mb-3 xl:my-4 text-sm">#{{item.tag}}</li>
              </ul>
              <div class="my-8 xl:my-12" v-for="item in content.data" :key="item.id">
                <h4 class="text-xl xl:text-3xl text-teal-400 font-bold ">{{item.subtitle}}</h4>
                <h3 class="text-2xl xl:text-3xl text-teal-400 font-bold mb-2">{{item.title}}</h3>
                <div class="w-16 h-1 bg-teal-400 my-2"></div>
                <p class="text-white text-sm lg:text-base my-4">{{item.con}}</p>
                <div class="w-full my-2">
                  <img :src="item.img" alt="">
                  <img :src="item.img2" alt="">
                </div>
              </div>
              </div>
 
              <a :href="project.data.link" target="_blank" class="flex justify-center w-full border border-teal-400 text-teal-400 py-4 hover:bg-teal-500  hover:text-white">
                   <span class="text-lg">瀏　覽　網　站　</span>
                   <div class="w-12 relative">
                     <div class="eye absolute w-4 h-4 flex justify-center items-center">
                       <div class="bg-teal-400 rounded-full w-full h-full"></div>
                     </div>
                     <div class="p-0.5"><img src="img/eye.svg" alt=""></div>
                     
                   </div>
              </a>
          </div>
          <div class="grid md:grid-cols-2 text-white mt-10 gap-10 max-w-7xl mx-auto">
         
             
        <div class="caseMain">
             <a  class="caseRounded white-line" :href="preCase.data.id">
             
                <div class="caseImg white-line">
                   <img :src="preCase.data.img" alt="">
                </div>

                <div class="caseContent">
                            <div class="caseDescription">
                                <div>
                               <h2>{{preCase.data.brand}}</h2>
                                <h3>{{preCase.data.name}}</h3>
                                <p>
                                   {{preCase.data.indexIntro}}
                                </p>
                                </div>
                            </div>
                            <a class="caseMore" >
                                    
                                    <div class="caseMoreWord">MORE</div>
                                    <div class="arrowDiv arrow-outer">
                                        <span class="arrowCase arrow-g"></span>
                                    </div>

                            </a>
                </div> 
           </a >

            
        </div>
        
         <div class="caseMain">
             <a  class="caseRounded white-line"  :href="nextCase.data.id">

                <div class="caseImg white-line">
                   <img :src="nextCase.data.img" alt="">
                </div>

                <div class="caseContent">
                            <div class="caseDescription">
                              <div>
                               <h2>{{nextCase.data.brand}}</h2>
                                <h3>{{nextCase.data.name}}</h3>
                                <p>
                                   {{nextCase.data.indexIntro}}
                                </p>
                                </div>
                            </div>
                            <a class="caseMore" >
                                    
                                    <div class="caseMoreWord">MORE</div>
                                    <div class="arrowDiv arrow-outer">
                                        <span class="arrowCase arrow-g"></span>
                                    </div>

                            </a>
                </div> 
           </a>


        </div>

        

       
        </div>
</div>

</template>

<style lang="postcss" scoped>
.mainPadding{
  @apply p-6 py-8 pt-24 pb-12 md:p-24 sm:mt-0 md:pb-12 w-full ;
}
.trapezoid{
    @apply   border-l-0 border-r-0  w-full h-4 relative;
  }
.caseRounded{
  @apply flex items-stretch text-white max-w-lg mx-auto   cursor-pointer;
}
.caseImg{
  @apply grow-0 w-5/12 lg:w-6/12  rounded-t-full overflow-hidden bg-red-100;
}
.caseContent{
  @apply grow w-7/12 lg:w-6/12 sm:w-full h-auto  flex flex-col justify-between ;
}
.caseDescription{
  @apply w-full  grow flex justify-center items-center ;
}
.caseDescription>div{
  @apply w-10/12 mx-auto h-auto ;
}
.caseDescription h2{
  @apply text-green-400 text-lg font-bold w-full
}
.caseDescription h3{
  @apply text-green-400 text-lg font-bold 
}
.caseDescription p{
  @apply text-xs lg:text-base xl:text-xs;
}

.caseMore{
  @apply  cursor-pointer flex flex-none relative  justify-end items-center;
}
.caseMoreWord{
  @apply text-sm text-green-400 py-2 sm:h-8 ;
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
    border-radius:6rem 6rem 0 0;
    }
}
@media (min-width: 1024px) {
  .caseRounded{
    border-radius:8rem 8rem 0 0;
  }
}
.caseMore{
    background:#001664;
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



/***EYE****/

.eye{
top:0.4rem;
left: 50%;
margin-left: -0.55rem;
  div{
    transform-origin: center ;
  animation:eye 3s infinite;
  }
  
  
}
@keyframes eye {
  0% {
   height: 1rem;
  }
 10% {
    height: 0em;
  }
  20% {
   height: 1rem;
  }
  30% {
    height: 0em;
  }
  40% {
   height: 1rem;
  }
  100%{
   height: 1rem;
  }
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

</style>

