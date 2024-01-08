<template>
  <div class="container mx-auto p-6">
    <h1 class="text-5xl flex justify-center font-bold mb-10">PRODUITS.</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div 
        v-for="item in items" 
        :key="item.categorie" 
        class="bg-white flex flex-col justify-between rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <div 
          class="h-48 bg-cover bg-center" 
          :style="{ backgroundImage: 'url(' + item.photo.url + ')' }"
        ></div>
        <div class="px-6 py-4">
          <div class="font-bold text-zinc-950 text-xl mb-2">{{ item.titre }}</div>
          <p class="text-gray-700 text-base">
            {{ getExcerpt(item.description) }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <nuxt-link 
            :to="`/blogs/${item.categorie}`" 
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
query MyQuery {
  items {
    photo {
      url
    }
    titre
    description
    categorie
  }
}`;

const items = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
items.value = data.value.items;

function getExcerpt(text) {
  // Prenez les 10 premiers mots et ajoutez '...' à la fin
  return text.split(' ').slice(0, 10).join(' ') + '...';
}
</script>

<style scoped>
/* Styles restent inchangés */
</style>
