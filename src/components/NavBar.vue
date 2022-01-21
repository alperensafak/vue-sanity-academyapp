<template>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="hover:color-gray-600" viewBox="0 0 100 100" width="50px" height="50px">
        <path id="Rectangle_225" data-name="Rectangle 225" d="M70.61 55.79h6.63V89h-6.63z"/><path id="Rectangle_226" data-name="Rectangle 226" d="M57.32 55.79h6.63V89h-6.63z"/><path id="Rectangle_227" data-name="Rectangle 227" d="M44.02 55.79h6.63V89h-6.63z"/><path id="Rectangle_228" data-name="Rectangle 228" d="M44 16h33.21v6.63H44z"/><path id="Rectangle_229" data-name="Rectangle 229" d="M44.02 29.27h33.21v6.63H44.02z"/><path id="Rectangle_230" data-name="Rectangle 230" d="M44.05 42.55h33.21v6.63H44.05z"/>
      </svg>
      <span class="ml-3 text-xl">Academy</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <router-link class="mr-5 hover:text-gray-900 hover"  to="/">Home</router-link>
        <router-link class="mr-5 hover:text-gray-900 hover"  to="courses">Courses</router-link>
       <router-link class="mr-5 hover:text-gray-900 hover"  to="about">About</router-link>
      

    </nav>
     <router-link class="mr-5 hover hover:text-gray-900" to="login">
    <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </router-link>
  </div>
</header>






  
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>


.router-link-exact-active {
 border-bottom: 2px solid #FBBF24;
}
.hover:hover{
   border-bottom: 2px solid #F3F4F6;
}
</style>

