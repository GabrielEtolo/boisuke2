<template>
  <div class="px-5">
    <ul
      v-if="boisukes"
      class="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-5
        gap-0
      "
    >
      <!-- Première image avec largeur 1/4 et centrée -->
      <li v-if="boisukes.length" class="col-span-full flex justify-center my-8">
        <NuxtImg
          :src="boisukes[0].photo.url"
          :alt="boisukes[0].title"
          class="lg:w-1/3 h-auto rounded-lg shadow sm:w-3/4"
        />
      </li>
      <!-- Images suivantes sans espacement -->
    </ul>
    <ul v-else>
      <li>Loading...</li>
    </ul>
  </div>
</template>

<script setup>
const query = gql`
query boisukes {
  boisukes {
    title
    description
    slug
    id
    photo {
      url
    }
  }
}`;

const boisukes = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
boisukes.value = data.value.boisukes;
</script>
