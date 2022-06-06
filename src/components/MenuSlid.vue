<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const isOpen = computed(()=>{
      return store.getters.isOpen;
    });

    const handleClickMenu=()=>{
      store.dispatch("handleMenuOpen");
    }
   
    return { handleClickMenu , isOpen };
  },
};


</script>


<template>
  <div :class="['menu',{open:isOpen}]">
   <div  class="flex w-full fixed z-50">
  <router-link 
  to="/" 
  v-scroll-to="'#index'" 
  class="navBtn navBtnHome"
  >
      <span class="absolute w-1/2 block "><img src="img/GDC-logo.svg" alt="禾樂數位創意有限公司"></span>
      <span class="absolute w-full logo-ani "><img src="img/GDC-logo-circle.svg" alt="Groovy Design "></span>
  </router-link>
  
  <a 
  class="menuBtn  navBtn burgerClose   "
  @click="handleClickMenu">
     <div class="flex flex-col justify-around w-full h-full">
        <span></span>
       <span></span>
     </div>
  </a>

  </div>
  <div class="nav">
    <ul >
      <li><router-link :to="{name:'HomePage',hash:'#about'}" v-scroll-to="'#about'" @click="handleClickMenu">ABOUT US <span>關於GDC</span></router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#service'}"  v-scroll-to="'#service'" @click="handleClickMenu">WHAT WE DO  <span>服務內容</span></router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#projects'}"  v-scroll-to="'#projects'" @click="handleClickMenu">PROJECTS  <span>案例分享</span></router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#contact'}" v-scroll-to="'#contact'" @click="handleClickMenu">CONTACT US  <span>聯絡我們</span></router-link></li>
    </ul>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.burgerClose{
    @apply   w-16 h-16 md:w-24 md:h-24  justify-center items-center relative flex
}
.menuBtn{
    @apply cursor-pointer  right-0 text-white 
}
.menu{
 @apply bg-blue-800 
}
.navBtn{
  @apply w-16 h-16 md:w-24 md:h-24  justify-center items-center relative flex
}
.navBtnHome{
  @apply bg-white  text-blue-800  hover:opacity-90
}
.nav{
@apply flex  justify-center items-center h-full w-full relative
}
.nav ul{
@apply w-8/12  h-3/4 flex flex-wrap  justify-between 
}
.nav li{
@apply w-full text-white font-bold text-3xl bg-blue-800 mb-8 flex  justify-center items-center cursor-pointer hover:bg-blue-600
}
.nav li span{
@apply text-xl pl-4
}
</style>


<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100%;
  z-index: 40;
  transition: left 0.3s;
  background-image:  url(/public/img/menuBg.jpg);
  background-size: cover;
  &.open {
    left: 0px;
  }
  > a.closeBtn {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 50px;
  }
 
}

.burgerClose{
  padding-bottom: 15px;
  z-index: 55;
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
    transform: rotate(-45deg);
    margin-top: 11px;
    background-color:white;
   
  }
  span:nth-child(2){
    width: 100%;
    transform: rotate(45deg);
    margin-left: 0%;
    margin-top: -4px;
   
  }
  &:hover{
     div{
    width: 55%;
    height: 28%;
   
  }
  }
}
@media (min-width: 640px) {
  .burgerClose{
  
    span:nth-child(2){
      margin-top: -13px;
     
    }
  }
}

</style>

