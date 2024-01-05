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
      <b>Boisuke </b>est plus qu'un magazine – c'est un écho vibrant de la
      jeunesse contemporaine, un hymne visuel à la beauté brute de l'existence.
      Né au début de 2023, notre collectif s'est engagé à capturer ces
      étincelles de vie qui définissent notre époque. Dans un monde qui émerge
      des ombres d'une pandémie, nous trouvons de la lumière, de l'audace et une
      nouvelle perspective. <br /><br />

      Nous sommes les narrateurs visuels d'un lifestyle en évolution, un trio de
      créateurs fusionnant nos regards pour documenter la vie et les moments
      éphémères de cette jeunesse transformée. <b>"Boisuke" </b> est le reflet
      d'un changement, une chronique intime des jours et des nuits qui façonnent
      notre maintenant.
      <br />
      <br />
      Sortis du confinement du COVID, nous avons vu des changements
      significatifs dans notre façon de vivre, de rêver et de partager.
      <b>"Boisuke" </b> représente cette transition, ces sourires retrouvés, ces
      embrassades chaleureuses, ces rires partagés sans la barrière d'un écran.
      Notre mission est simple : saisir l'authenticité des instants vécus, sans
      filtre ni façade, pour les retranscrire dans un panorama qui parle au
      monde. <br /><br />

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
