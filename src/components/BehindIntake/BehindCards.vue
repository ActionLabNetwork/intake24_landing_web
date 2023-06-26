<template>
   <v-card class="resource_card mb-10 text-center">
    <v-img :src=arrayItem.imageSrc height="200"></v-img>
    <v-container class="resource_text_box" height="170">
        <a :href="arrayItem.link" target="_blank"><h1 class="resource_text_box_heading">{{ arrayItem.title }}</h1></a>
        <p class="resource_text_box_text">{{ arrayItem.subText }}</p>
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
    }),
  },
});
const arrayItem = props.arrayItem;
</script>

<style scoped>

.resource_text_box {
  padding: 0px 0px 0px 0px;
}

.resource_text_box a {
  text-decoration-color: #060606;
}
.resource_card{
    border-radius: 10px;
    gap: 10px;
    width: 142px;
    box-shadow: none !important;
}
.action_button{
    color: #000;
}

.resource_text_box_heading{
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 9px;
    color: #060606;
}

.resource_text_box_text{
    font-size: 12px;
    font-weight: 400;
    color: #060606;

}

.resource_text_box_acition{
    font-size: 16px;
    padding-top: 36px;
}

@media (min-width: 630px) {
  .resource_text_box {
  padding: 27px 10px 1px 0px;
}

.resource_card{
    border-radius: 10px;
    gap: 50px;
    width: 200px;
    box-shadow: none !important;
}

.resource_text_box_text{
    font-size: 14px;
    font-weight: 400;
    color: #060606;

}


.resource_text_box_heading{
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 9px;
    color: #060606;
}
}
</style>
