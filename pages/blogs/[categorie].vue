<template>
  <div v-if="!loading && blog">
    <h1>{{ blog.titre }}</h1>
    <img :src="blog.media.url" alt="">
    <p>{{ blog.texte }}</p>
  </div>
  <div v-else>
    Chargement...
  </div>
</template>

<script setup>
const query = gql`

query MyQuery($categorie: String!) {  
  blogs(where: {categorie: $categorie}) {
    texte
    titre
    media {
      url
    }
    categorie
  }
}`;




const blogs = ref();
const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.categorie,
});
console.log(data.value);
blogs.value = data.value.blogs;


</script>