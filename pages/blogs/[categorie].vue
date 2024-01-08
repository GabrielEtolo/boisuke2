<template>
  <div class="flex flex-col w-full" v-if="blog">
    <h1 class="text-5xl flex justify-center font-bold my-10">{{ blog.titre }}.</h1>
    <div class="flex flex-col items-center px-10 w-full" >
    <img :src="getMediaUrl(blog)" alt="" class="w-2/5 h-auto">
    <p class="p-8">{{ blog.texte }}</p>
    </div>
  </div>
  <div v-else-if="loading">
    Chargement...
  </div>
  <div v-else>
    Le blog n'a pas pu être chargé.
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const blog = ref(null);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clqy26tviv6lc01t68fg4hsoh/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Ajoutez ici d'autres headers si nécessaire, comme des tokens d'authentification.
      },
      body: JSON.stringify({
        query: `
          query GetBlog($categorie: String!) {
            blogs(where: {categorie: $categorie}) {
              texte
              titre
              media {
                url
              }
              categorie
            }
          }
        `,
        variables: {
          categorie: route.params.categorie,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Réponse réseau non OK.');
    }

    const { data } = await response.json();
    blog.value = data.blogs[0];
  } catch (e) {
    console.error('Erreur lors de la récupération du blog:', e);
  } finally {
    loading.value = false;
  }
});

function getMediaUrl(blog) {
  return blog?.media?.[0]?.url ?? ''; // Utilisez l'opérateur optional chaining pour plus de sécurité.
}
</script>
