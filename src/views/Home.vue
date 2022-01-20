<template>
  
  <lottie-animation
      ref="anim"
      :animationData="require('../assets/education.json')"
    />

 <section class="text-gray-600 body-font">
   
  <div class="container px-5  mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 text-center md:w-1/2 md:pr-16 lg:pr-0 pr-0">
         <div class=" mx-auto ">
 <lottie-player class="w-full max-h-full" src="https://assets4.lottiefiles.com/packages/lf20_hzfmxrr7.json"  background="transparent"  speed="1"     loop  autoplay></lottie-player>
   
     </div>
      <h1 class="title-font font-medium text-3xl text-gray-900">Start learning
      </h1>
      <p class="leading-relaxed mt-4">Subjects and courses for every step of your career. Instructors with real-world experience.</p>
  
    
    </div>
   <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
     
     


  
    
    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>

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
</router-link>

    
   
    
  



    </div>
  </div>
</section>
     
       
    

          

     
     

</template>

<script>
//import the client from the file we created
import sanity from "../client";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
 //we use imageUrlBuilder from @sanity/image-url to generate image URLs for our images.
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

//use Sanity's GROQ API to query our data. GROQ query is used to fetch the _id, title, slug, excerpt and image.url
const query = `*[_type == "course"]{
  _id,
  title,
  slug,
 
  excerpt,
   "image": mainImage{
  asset->{
   url
}
},
"category":category->title,
}[0...50]`;
// This means that only the first 50 courses will be fetched.



export default {
  name: "Home",
   components: {
      LottieAnimation
  },
  data() {
    return {
      loading: true,
      courses: [],
    };
  },
  created() {
    this.fetchData();
    
  },
 
//we create a method called imageUrlFor() and use it inside template
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },

    //The fetched content is stored in the courses array using this.courses=courses.
    fetchData() {
      this.error = this.course = null;
      this.loading = true;
      sanity.fetch(query).then(
        (courses) => {
          this.loading = false;
          this.courses = courses;
          
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.home h1{
    text-align: center;

}


</style>