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

      <!-- Images suivantes sans espacement -->
      <li
        v-for="(boisuke, index) in boisukes.slice(1)"
        :key="boisuke.id"
        class="w-full overflow-hidden"
      >
        <NuxtImg
          :src="boisuke.photo.url"
          :alt="boisuke.title"
          class="object-cover w-full h-full"
        />
      </li>
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

