<template lang="pug">
.statistics
  .statistic-item(v-for="stat in statistics" :key="stat.description")
    h2.statistic-number {{ stat.number }}
    p.statistic-description {{ stat.description }}
</template>

<script>
export default {
  name: 'StatisticsSection',
  data() {
    return {
      statistics: [
        { number: '1000+', description: 'Довольных клиентов' },
        { number: '50+', description: 'Новых моделей ежемесячно' },
        { number: '20+', description: 'Брендов в нашем каталоге' }
      ]
    }
  }
}
</script>


<style scoped>
.statistics {

  display: flex;
  justify-content: space-around; 
  padding: 40px 0; 
  margin: 50px auto;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  max-width: 90%;
  gap: 20px;
}

.statistic-item {
  text-align: center; 
}

.statistic-number {
  color: #BA1519; 
  font-size: 2.5em;
  margin: 0 0 10px;
}

.statistic-description {
  color: #666;
  font-size: 1.5em; 
  margin: 0; 
}

@media (max-width: 1240px) {
  .statistic-number {
    font-size: 2.2em;
  }
  .statistic-description {
    font-size: 1.3em;
  }
}

@media (max-width: 1080px) {
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
    font-size: 2em;
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
    font-size: 1.8em;
  }
  .statistic-description {
    font-size: 1.1em;
  }
}

@media (max-width: 320px) {
  .statistic-number {
    font-size: 1.6em;
  }
  .statistic-description {
    font-size: 1em;
  }
}
</style>
