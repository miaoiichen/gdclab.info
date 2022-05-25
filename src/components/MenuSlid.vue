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
    <a class="closeBtn" @click="handleClickMenu">
      <i class="fas fa-times fa-3x">x</i>
    </a>
    <ul class="nav">
      <li><router-link :to="{name:'HomePage',hash:'#index'}" v-scroll-to="'#index'" @click="handleClickMenu">GDC</router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#about'}" v-scroll-to="'#about'" @click="handleClickMenu">ABOUT</router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#service'}"  v-scroll-to="'#service'" @click="handleClickMenu">SERVICE</router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#projects'}"  v-scroll-to="'#projects'" @click="handleClickMenu">PROJECTS</router-link></li>
      <li><router-link :to="{name:'HomePage',hash:'#contact'}" v-scroll-to="'#contact'" @click="handleClickMenu">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  z-index: 50;
  background-color: #fff;
  transition: right 0.3s;
  &.open {
    right: 0px;
  }
  > a.closeBtn {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  > ul.nav {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top: -150px;
    padding: 0;
    > li {
      display: block;
      width: 100%;
      height: 25%;
      > a {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        line-height: 300%;
        font-size: 22px;
      }
    }
  }
}
</style>

