<template>
  <div class="flex flex-col w-full" v-if="item">
    <h1 class="text-5xl flex justify-center font-bold my-10">{{ item.titre }}.</h1>
    <div class="flex flex-col items-center px-10 w-full">
      <img :src="item.photo.url" alt="" class="w-2/5 h-auto">
      <p class="p-8">{{ item.description }}</p>
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const item = ref(null);
const loading = ref(true); 

onMounted(async () => {
  try {
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clqy26tviv6lc01t68fg4hsoh/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        query: `
          query MyQuery($categorie: String!) {
            items(where: {categorie: $categorie}) {
              description
              titre
              photo {
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
    item.value = data.items[0];
  } catch (e) {
    console.error('hahaha', e);
  } finally {
    loading.value = false;
  }
});
</script>
