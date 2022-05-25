<script>

import MainIndex from "@/components/MainIndex.vue"
import About from "@/components/About.vue"
import Service from "@/components/Service.vue"
import Projects from "@/components/Projects.vue"

export default {
  components: {
    MainIndex,
    About,
    Service,
    Projects,
  },
  setup() {
    return {};
  },
};
</script>
<template>
<main>
    <MainIndex />
    <About />
    <Service />
    <Projects />
    
</main>
</template>