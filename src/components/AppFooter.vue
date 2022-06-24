<template>
    <footer class="text-center m-0">
        <!-- Grid container -->
        <div class="p-1 pt-4 bg-light">
            <!-- Section: Social media -->
            <ul class="justify-content-start flex-nowrap">
            <!-- Facebook -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-facebook fa-stack"></i></a></li>
            <!-- Twitter -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-twitter fa-stack"></i></a> </li>
            <!-- Google -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-google fa-stack"></i></a> </li>
            <!-- Instagram -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-instagram fa-stack"></i></a> </li>
            <!-- Linkedin -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-linkedin fa-stack"></i></a> </li>
            <!-- Github -->
            <li class="d-inline m-5"><a class="text-dark" href=""><i class="fa fa-github fa-stack"></i></a> </li>
            </ul>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->
        
        <!-- Copyright -->
        <div class="text-left text-light p-3 bg-dark">
            <span style="font-family: Arial;">©</span> {{ year }} Copyright  
            <a class="text-secondary" href="/index.html">ddeoli</a>
        </div>
        <!-- Copyright -->
        </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="sccs">
</style>