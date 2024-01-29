<template lang="pug">
.statistics
  .statistic-item(v-for="stat in statistics" :key="stat.description")
    h2.statistic-number {{ stat.number }}
    p.statistic-description {{ stat.description }}
</template>

<script setup>
import { ref } from 'vue';

const statistics = ref([
  { number: '1000+', description: 'Довольных клиентов' },
  { number: '50+', description: 'Новых моделей ежемесячно' },
  { number: '20+', description: 'Брендов в нашем каталоге' }
]);
</script>


<style scoped>
.statistics {
  display: flex;
  justify-content: space-around; 
  padding: 40px 0; 
  margin: 50px auto;
  border-radius: 25px;
  background: var(--card-bg-color); 
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  max-width: 90%;
  gap: 20px;
}

.statistic-item {
  text-align: center; 
}

.statistic-number {
  color: var(--accent-color); 
  font-size: 3em; 
  margin: 0 0 10px;
  font-weight: bold; 
}

.statistic-description {
  color: var(--detail-text-color); 
  font-size: 1.5em; 
  margin: 0; 
}

@media (max-width: 1240px) {
  .statistics {
    flex-direction: column; 
    align-items: center;
  }

  .statistic-item {
    margin-bottom: 20px;
  }
}

@media (max-width: 720px) {
  .statistic-number {
    font-size: 2.5em; 
  }

  .statistic-description {
    font-size: 1.2em; 
  }
}

@media (max-width: 480px) {
  .statistics {
    padding: 20px 0;
  }

  .statistic-number {
    font-size: 2em;
  }

  .statistic-description {
    font-size: 1em; 
  }
}

@media (max-width: 320px) {
  .statistic-number {
    font-size: 1.8em; 
  }

  .statistic-description {
    font-size: 0.9em; 
  }
}

</style>
