<template>
  <v-card
  class="card mx-auto rounded-xl"
  >
    <v-card-title>
      <div class="d-flex py-5 px-3 align-center">
        <figure>
          <v-img :src="props.icon" width=50 alt="Card Icon" class="mr-3" />
        </figure>
        <p class="card-title">{{ props.title }}</p>
      </div>
    </v-card-title>
    <v-card-text>
      <v-list class="custom-list">
        <v-list-item v-for="item in props.listItems" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              <p>
                <span class="mr-2 d-inline-block" role="presentation">
                  <v-img src="@/assets/checkmark.svg" width="15" alt="List Tick" />
                </span>
                <span class="card-text">{{ item.text }}</span>
              </p>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay();

const props = defineProps({
  title: { type: String, required: true },
  listItems: { type: Array as PropType<{ id: number, text: string }[]>, required: true },
  icon: String
})
</script>

<style scoped>
.card-title {
  font-weight: bold
}

.custom-list {
  list-style-type: none;
  padding: 0;
}

.card-text {
  font-size: clamp(0.75em, 1.75vw, 1em);
}

.card {
  box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  -webkit-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  -moz-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  width: 80vw;
}

@media only screen and (min-width: 600px) {
  .card {
    width: 65vw;
  }
}

@media only screen and (min-width: 960px) {
  .card {
    width: 40vw;
  }
}

@media only screen and (min-width: 1250px) {
  .card {
    width: 30vw;
  }
}
</style>
