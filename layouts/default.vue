<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col">
    <!-- Header with navigation -->
    <header
      class="
        text-black
        lg:bg-zinc-900
        sm:bg-none
        w-full
        lg:w-1/2
        self-center
        mb-2
        rounded-b-lg
      "
    >
      <div
        class="
          container
          mx-auto
          px-3
          py-2
          flex
          justify-around
          items-center
          flex-col
          lg:flex-row
        "
      >
        <!-- Logo or brand image -->
        <NuxtLink to="/">
          <img src="../public/logo.png" alt="Logo" class="h-16 lg:h-20" />
        </NuxtLink>
        <!-- Navigation Links -->
        <Nav />
      </div>
    </header>

    <!-- Main content area -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Optional Footer -->
  </div>
</template>

<script>
// Import the Nav component
import Nav from '../pages/component/nav.vue';

export default {
  components: {
    Nav, // Register the component for use in the template
  },
  // ... other options
};
</script>

<style>
/* Add any additional styles here or in your main CSS file */
</style>
