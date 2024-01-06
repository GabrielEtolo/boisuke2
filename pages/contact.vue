<template>
  <div class="min-h-screen flex flex-col items-center my-32">
    <div class="text-center">
      <h2 class="text-xl font-semibold mb-4">Contact</h2>
      <h1 class="lg:text-5xl text-3xl font-bold uppercase mb-8">
        <a href="https://www.instagram.com/boisuke.editions/">Boisuke.editions</a>
      </h1>
      <ul class="flex flex-col lg:flex-row lg:space-x-20">
        <li class="text-lg font-medium">
          <a href="https://www.instagram.com/boisuke.gen/">Boisuke.gen</a>
        </li>
        <li class="text-lg font-medium">
          <a href="https://www.instagram.com/boisuke.boi/">Boisuke.boi</a>
        </li>
        <li class="text-lg font-medium">
          <a href="https://www.instagram.com/boisuke.lb/">Boisuke.lb</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Importez le composant
import Nav from './component/nav.vue';

export default {
  components: {
    Nav, // Enregistrez le composant pour l'utiliser dans le template
  },
  // ... autres options
};
</script>
<style>
a {
  color: white;
  transition: 0.5s ease-in;
}
a:hover {
  color: gray;
}
</style>
