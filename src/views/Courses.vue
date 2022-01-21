<template>
  <div class="courses">
        
      <div class="loading text-center" v-if="loading">
        <h2 class="text-lg text-indigo-500 tracking-widest font-medium title-font mb-1">
        Loading...</h2></div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
     
        <!-- we map over the courses array -->
        <!-- :key attribute a value of our course's ID. -->
        <div class="flex flex-wrap -m-4">
        <div v-for="course in courses" class="course-item p-4 lg:w-1/3" :key="course._id"> 
          <!-- The slug of the course is passed to its to prop.  -->




      <div class="">
        <div class=" border-2 bg-white rounded-xl shadow-md overflow-hidden transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out ">
           <router-link :to="`/academy/${course.slug.current}`">
          <img class="h-48 w-full object-cover" :src="imageUrlFor(course.image).width(480)" alt="course">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{category}}</h2>
            <h1 class="block mx-1 text-lg leading-tight font-medium text-black hover:underline">{{ course.title }}</h1>
            <p class="leading-relaxed mt-2 text-gray-500 mb-3 ">{{course.excerpt}}</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            
            </div>
          </div>
            </router-link>
        </div>
      </div>


          
        
        </div>
        </div>
     
  
  </div>
</template>

<script>
//import the client from the file we created
import sanity from "../client";
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
  name: "Courses",
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
.courses h1{
    text-align: center;

}


</style>