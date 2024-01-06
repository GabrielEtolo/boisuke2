<template>
  <div class="text-white text-center p-10">
    <p class="text-gray-500">about:</p>
    <h1 class="text-5xl font-bold mb-10">BOISUKE.</h1>
    <div
      class="
        flex
        lg:flex-row
        flex-col
        justify-center
        space-auto
        lg:space-x-8
        mb-16
      "
    >
      <div
        v-for="member in members"
        :key="member.nom"
        class="flex flex-col w-auto mb-12 items-center"
      >
        <div
          class="
            bg-gray-300
            rounded-full
            w-32
            h-32
            mb-4
            flex
            items-center
            justify-center
          "
        >
          <img
            :src="member.photo.url"
            class="rounded-full w-full h-full object-cover"
            alt="Photo de membre"
          />
        </div>
        <div class="font-medium text-lg">{{ member.nom }}</div>
        <div class="text-gray-500">{{ member.poste }}</div>
        <div class="font-medium w-64 text-lg"></div>
      </div>
    </div>
    <p class="text-xl mb-4">
      Un magazine jeune et authentique. Fusion entre le regard de ces 3
      créateurs
    </p>
    <p class="text-gray-500">
      Plongez dans l'univers de Boisuke, un magazine illustrant la beauté brute,
      l'émotion du moment, les bonheurs invisibles
    </p>
    <p class="text-gray-300 leading-relaxed my-16">

      <b>"Boisuke" </b> est une invitation à célébrer le quotidien, à
      reconnaître les bonheurs invisibles souvent négligés et à chérir les liens
      que nous reformons. C'est un périple à travers les yeux de ceux qui voient
      l'art dans le commun, le sublime dans le simple, et l'extraordinaire dans
      l'ordinaire.
      <br />
      <br />
      Rejoignez-nous sur ce voyage visuel alors que nous explorons, racontons et
      partageons les histoires de cette jeunesse audacieuse, de ses aspirations
      et de sa quête incessante de significations. <b>Boisuke </b> n'est pas
      juste une lecture, c'est une expérience qui évolue avec vous, avec nous,
      avec le temps.
    </p>
  </div>
</template>

<style>
/* Custom styles for text color */
div {
  color: white;
}
</style>
<script setup>
const query = gql`
query member {
  members {
    nom
    poste
    vision
    photo {
      url
    }
  }
}`;

const members = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
members.value = data.value.members;
</script>
