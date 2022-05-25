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
    <div class="main">this is PROJECT</div>  
    <router-link v-for="item in projectArr.data" :key="item.id"  class="pro" :to="`/Projects/${item.id}`">
        <h1>{{item.name}}</h1>
        <h2>{{item.brand}}</h2>
        <h3>{{item.indexIntro}}</h3>
        <h3>{{item.id}}</h3>

        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </router-link>
</section>
</template>



<style lang="postcss" scoped>
section{
    @apply bg-blue-100;
}
.pro{
    @apply bg-white w-72 h-36;
}
</style>