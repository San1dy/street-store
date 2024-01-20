<template lang="pug">
.statistics
  .statistic-item(v-for="stat in statistics" :key="stat.description")
    h2.statistic-number {{ stat.number }}
    p.statistic-description {{ stat.description }}
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'StatisticsSection',
  setup() {
    const statistics = ref([
      { number: '1000+', description: 'Довольных клиентов' },
      { number: '50+', description: 'Новых моделей ежемесячно' },
      { number: '20+', description: 'Брендов в нашем каталоге' }
    ]);

    return { statistics };
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
  background: var(--card-bg-color); /* Фон для неоморфизма */
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; /* Тени для создания эффекта неоморфизма */
  max-width: 90%;
  gap: 20px;
}

.statistic-item {
  text-align: center; 
}

.statistic-number {
  color: var(--accent-color); /* Цвет для чисел статистики */
  font-size: 3em; /* Увеличенный размер для более драматического эффекта */
  margin: 0 0 10px;
  font-weight: bold; /* Жирное начертание */
}

.statistic-description {
  color: var(--detail-text-color); /* Цвет для описания статистики */
  font-size: 1.5em; 
  margin: 0; 
}

@media (max-width: 1240px) {
  .statistics {
    flex-direction: column; /* Столбцовое расположение для средних экранов */
    align-items: center;
  }

  .statistic-item {
    margin-bottom: 20px;
  }
}

@media (max-width: 720px) {
  .statistic-number {
    font-size: 2.5em; /* Уменьшенный размер шрифта для адаптивности */
  }

  .statistic-description {
    font-size: 1.2em; /* Уменьшенный размер шрифта для адаптивности */
  }
}

@media (max-width: 480px) {
  .statistics {
    padding: 20px 0;
  }

  .statistic-number {
    font-size: 2em; /* Дальнейшее уменьшение размера шрифта для мобильных устройств */
  }

  .statistic-description {
    font-size: 1em; /* Дальнейшее уменьшение размера шрифта для мобильных устройств */
  }
}

@media (max-width: 320px) {
  .statistic-number {
    font-size: 1.8em; /* Минимальный размер шрифта для очень узких экранов */
  }

  .statistic-description {
    font-size: 0.9em; /* Минимальный размер шрифта для описания на очень узких экранов */
  }
}

</style>
