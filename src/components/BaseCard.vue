<template>
  <v-card
  :min-width="display.mdAndUp ? '350' : '200'"
  class="card mx-auto rounded-xl"
  >
    <v-card-title>
      <div class="d-flex py-5 px-3 align-center">
        <figure>
          <img :src="props.icon" width=50 alt="Card Icon" class="mr-3" />
        </figure>
        <p class="card-title">{{ props.title }}</p>
      </div>
    </v-card-title>
    <v-card-text>
      <v-list class="custom-list">
        <v-list-item v-for="item in props.listItems" :key="item.id">
          <v-list-item-content>
            <v-list-item-title>
              <span class="mr-2">
                <figure>
                  <img src="@/assets/checkmark.svg" alt="" />
                </figure>
              </span>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay();

const props = defineProps({
  title: { type: String, required: true },
  listItems: { type: Array as PropType<{ id: number, text: string}[]>, required: true },
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

.custom-list li {
  margin-bottom: 20px;
}

.custom-list .tick {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  background-color: #EE672D;
  opacity: 0.5;
  color: white;
  margin-right: 10px;
}

.card {
  box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  -webkit-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  -moz-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
  width: "220px";
}

@media (min-width: 960px) {
  .card-title {
    font-weight: bold
  }

  .custom-list {
    list-style-type: none;
    padding: 0;
  }

  .custom-list li {
    margin-bottom: 20px;
  }

  .card {
    box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
    -webkit-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
    -moz-box-shadow: 5px 5px 15px 7px rgba(235, 222, 222, 0.71);
    min-width: "350px"
  }
}
</style>
