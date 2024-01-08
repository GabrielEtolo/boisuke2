<template>
  <div class="container mx-auto p-6">
  <h1 class="text-5xl flex justify-center font-bold mb-10">BLOG.</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div 
        v-for="blog in blogs" 
        :key="blog.categorie" 
        class="bg-white flex flex-col justify-between rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <div 
          class="h-48 bg-cover bg-center" 
          :style="{ backgroundImage: 'url(' + blog.media[0].url + ')' }"
        ></div>
        <div class="px-6 py-4">
          <div class="font-bold text-zinc-950 text-xl mb-2">{{ blog.titre }}</div>
          <p class="text-gray-700 text-base">
            {{ getExcerpt(blog.texte) }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <nuxt-link 
            :to="`/blogs/${blog.categorie}`" 
            class="bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
          >
            Lire l'article
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </template>
<script setup>
const query = gql`
query article {
  blogs {
    texte
    titre
    media {
      url
    }
    categorie
  
}
}`;

const blogs = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
blogs.value = data.value.blogs;

function getExcerpt(text) {
  // Prenez les 10 premiers mots et ajoutez '...' à la fin
  return text.split(' ').slice(0, 10).join(' ') + '...';
}
</script>

<style scoped>
.blog-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.blog-card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-media {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.blog-titre {
  padding: 16px;
  background-color: #f5f5f5; /* Gris clair */
  margin: 0; /* Retirer les marges par défaut */
}

.blog-excerpt {
  padding: 16px;
}

.blog-link {
  padding: 16px;
  display: block;
  text-align: center;
  background-color: #333; /* Gris foncé */
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.blog-link:hover {
  background-color: #555;
}
</style>