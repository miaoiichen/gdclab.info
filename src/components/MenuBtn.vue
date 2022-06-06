<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const handleClickMenu =()=>{
        store.dispatch("handleMenuOpen");
    }


    return { handleClickMenu };
  },
};
</script>
<template>
<div  class="flex w-full fixed z-40">
  <router-link 
  to="/" 
  v-scroll-to="'#index'" 
  class="navBtn navBtnHome"
  >
      <span class="absolute w-1/2 block "><img src="img/GDC-logo.svg" alt="禾樂數位創意有限公司"></span>
      <span class="absolute w-full logo-ani "><img src="img/GDC-logo-circle.svg" alt="Groovy Design "></span>
  </router-link>
  
  <a 
  class="menuBtn  navBtn burger burger-active    "
  @click="handleClickMenu">
     <div class="flex flex-col justify-around">
        <span></span>
       <span></span>
     </div>
  </a>

  </div>
</template>

<style lang="postcss" scoped>
.navBtn{
  @apply w-16 h-16 md:w-24 md:h-24  justify-center items-center relative flex
}
.menuBtn{
    @apply cursor-pointer  right-0 bg-blue-800   text-white  bg-transparent  hover:bg-blue-700
}
.navBtnHome{
  @apply bg-white  text-blue-800  hover:opacity-90
}

</style>

<style lang="scss" scoped>
/*****BURGER*****/
.burger{
  padding-bottom: 0;
  
  *{transition: 0.2s; }
  div{
    width: 60%;
    height: 30%;
    position: relative;
   
  }
  span{
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform-origin: center;
   
  }
  span:nth-child(2){
    width: 50%;
    margin-left: 50%;
   
  }
  // &:hover{

  //    padding-bottom: 15px;
  //    span{
  //   transform: rotate(-45deg);
  //   margin-top: 11px;
   
  // }
  // span:nth-child(2){
  //   width: 100%;
  //   transform: rotate(45deg);
  //   margin-left: 0%;
  //   margin-top: -5px;
   
  // }
  // }
}

@media (min-width: 640px) {
  .burger{
    &:hover{
    span:nth-child(2){
      margin-top: -13px;
    }
    }
  }
}

/*****LOGO*****/
.logo-ani{
animation:logo 5s infinite linear;
}
@keyframes logo {
  0% { transform: rotate(-360deg); }
  100% { transform: rotate(0deg); }
}
</style>
