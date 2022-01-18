<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="course" class="content">
      <h1>{{ course.title }}</h1>
      <img v-if="course.image" :src="imageUrlFor(course.image).width(480)" />

      <h6>By: {{ course.name }}</h6>
      <SanityBlocks :blocks="blocks" />
    </div>
  </div>
</template>

<script>

import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
//we use imageUrlBuilder from @sanity/image-url to generate image URLs for our images.
//we create a method called imageUrlFor() and use it inside template
const imageBuilder = imageUrlBuilder(sanity);


//use Sanity's GROQ API to query our data. GROQ query is used to fetch the _id, title, slug, body, image.url, author
const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

export default {
  name: "SingleCourse",
  components: { SanityBlocks },
  data() {
    return {
      loading: true,
      course: [],
      blocks: [],
     
    };
  },
  created() {
    this.fetchData();
     
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    
    fetchData() {
      this.error = this.course = null;
      this.loading = true;


//To fetch the data for a specific course we'll use its unique slug which is accessed using this.$route.params.slug. 
//This is the route object present in Vue Router which represents the state of the current active route.
      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (course) => {
          this.loading = false;
          this.course = course;
          this.blocks = course.body;
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
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 42em;
}
h1 {
  text-align: center;
}
h6 {
  color: #aaa;
  padding: 1em;
}
</style>