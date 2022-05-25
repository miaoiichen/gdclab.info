<script>
import MenuBtn from "../src/components/MenuBtn.vue";
import MenuSlid from "../src/components/MenuSlid.vue";
import Contact from "../src/components/Contact.vue"
import AOS from 'aos';
import { onMounted } from 'vue';
export default {
  components: {
    MenuBtn,
    MenuSlid,
    Contact
  },
  setup() {
   onMounted(()=>{
     AOS.init();
   })
    return {};
  },
};
</script>
<template >
<div class="G-bg">
    <MenuBtn />
    <MenuSlid />
 <div  >
    <router-view />
  </div>
    <Contact />

</div>

 
</template>


<style lang="postcss">

section{
  @apply  w-full flex justify-center content-center  mx-auto;
}
.white-line {
    @apply border-white border border-solid;
  }


</style>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
section{
  max-width: 1680px;
}
html,
body {
  width: 100%;
  overflow-x:hidden !important;
  height: 100%;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}

img {
 width: 100%;
}
$blue-700:#1D4ED8;
$blue-800:#1E40AF;
$blue-900:#1E3A8A;
$yellow-400:#FBBF24;
$yellow-500:#F59E0B;
$pink-600:#DB2777;
$pink-500:#EC4899;
$green-400:#34D399;
$green-500:rgb(74,222,128);

#app {
  position: relative;
  width: 100%;
  height: 100%;
  > .content {
    width: 100%;
    height: 100%;
    background-image: url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/*******BG*******/
.G-bg{
  background: linear-gradient(-45deg, #410f70,#002384, #2b88ca);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  min-height: 100vh;
  background-color:#002384;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
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
</style>
