<template>
  <v-card
    min-width="320"
    class="card mx-auto rounded-xl"
  >
    <v-card-title>
      <div class="d-flex py-5 px-3 align-center">
        <img src="@/assets/topics-icon.png" width=50 alt="Card Icon" class="mr-3" />
        <p class="card-title">{{ props.title }}</p>
      </div>
    </v-card-title>
    <v-card-text>
      <v-list class="custom-list">
        <v-list-item v-for="item in props.listItems" :key="item.id">
          <v-list-item-content>
            <v-list-item-title><span class="tick">✓</span>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  listItems: { type: Array as PropType<{ id: number, text: string }[]>, required: true }
})

const items = [{ id: 1, text: 'Gestational Diabetes' }, { id: 2, text: 'Food insecurity sarcopenia' }, { id: 3, text: 'Mindful eating' }, { id: 4, text: 'Treatment of type II diabetes' }, { id: 5, text: 'School food standards' }, { id: 6, text: 'Weight-loss maintenance' }]
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
  filter: drop-shadow(1px 16px 20px #E2D6D6);
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
    filter: drop-shadow(1px 16px 20px #E2D6D6);
  }
}
</style>
