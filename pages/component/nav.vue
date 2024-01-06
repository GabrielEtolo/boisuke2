<template>
  <nav class="text-zinc-200">
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/product">Galerie</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  // No specific logic for navigation component
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
nav {
  text-align: center; /* Centering the navigation links */
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block; /* Display links in a line */
  margin-right: 20px; /* Adjust spacing between links */
}

li:last-child {
  margin-right: 0; /* No margin for the last item */
}

a {
  text-decoration: none;

  font-size: 12px; /* Adjust the size as needed */
  font-weight: bold; /* Make the font bold */
}
a:hover {
  color: #d26b6b;
  transition: 1s ease-in;
}

/* Add styles for a hover effect */
</style>
