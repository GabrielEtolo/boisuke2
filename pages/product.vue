<template>
  <div class="px-5">
    <h1 class="text-5xl flex justify-center font-bold mb-10">GALERIE.</h1>
    <ul
      v-if="boisukes"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-0"
    >
      <li
        v-for="(boisuke, index) in boisukes.slice(1)"
        :key="boisuke.id"
        class="w-full h-full overflow-hidden fade-in"
        :style="{ 'animation-delay': index * 0.5 + 's' }"
      >
        <div class="image-container h-full">
          <NuxtImg
            :src="boisuke.photo.url"
            :alt="boisuke.title"
            class="object-cover w-full h-full"
          />
          <div class="description">{{ boisuke.description }}</div>
        </div>
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

<style>
.fade-in {
  animation: fadeIn ease-in 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

.image-container {
  position: relative;
}

.image-container:hover .NuxtImg {
  opacity: 0.3;
}

.description {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.image-container:hover .description {
  visibility: visible;
  opacity: 1;
}
</style>
