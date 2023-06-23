<template>
  <v-card class="mx-auto resource_card" max-width="400">
    <v-img :src="arrayItem.imageSrc" height="279" cover></v-img>
    <v-container class="resource_text_box" height="180">
      <h1 class="resource_text_box_heading">{{ arrayItem.title }}</h1>
      <p class="resource_text_box_text">{{ arrayItem.subText }}</p>
      <h3 class="resource_text_box_acition">
        <a :href="props.arrayItem.link ?? '/emailing-research'">Read more</a>
      </h3>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  arrayItem: {
    type: Object,
    default: () => ({
      title: '',
      subText: '',
      imageSrc: '',
      buttonVal: '',
      link: '',
    }),
  },
})
const arrayItem = props.arrayItem
</script>

<style scoped>
.resource_text_box {
  padding: 30px;
}
.resource_card {
  border-radius: 10px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.03) !important;
}
.action_button {
  color: #000;
}

.resource_text_box_heading {
  font-size: 18px;
}

.resource_text_box_text {
  font-size: 16px;
}

.resource_text_box_acition {
  font-size: 16px;
  padding-top: 36px;
}

.resource_text_box_acition a {
  text-decoration: none;
  color: #060606;
}

@media (min-width: 960px) {
  .action_button {
    color: #000;
  }

  .resource_text_box_heading {
    font-size: 20px;
  }

  .resource_text_box_text {
    font-size: 16px;
  }

  .resource_text_box_acition {
    font-size: 16px;
    padding-top: 36px;
  }
}
</style>
