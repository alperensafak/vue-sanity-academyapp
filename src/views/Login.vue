<template>
<div class=" flex flex-col items-center   w-3/4 lg:w-2/5  bg-gray-100 rounded-lg p-8 mx-auto  mt-10 ">
   <div class="">
         <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>

<div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
       <router-link  to="courses">
      <button class="text-white bg-yellow-500 hover:bg-yellow-400 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Get Started</button>
</router-link></div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>