<template lang="pug">
.statistics
	.statistic-item
		h2.statistic-number 10000+
		p.statistic-description Довольных клиентов
	.statistic-item
		h2.statistic-number 500+
		p.statistic-description Новых моделей ежемесячно
	.statistic-item
		h2.statistic-number 200+
		p.statistic-description Брендов в нашем каталоге
</template>

<script>
export default {
  name: 'StatisticsSection'
}
</script>

<style scoped>
.statistics {
  background-color: #C6A153; 
  display: flex;
  justify-content: space-around; 
  padding: 20px 0; 
	margin-top: 50px;
  border-radius: 20px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2); /* Прозрачный белый фон */
  backdrop-filter: blur(5px); /* Размытие фона за элементом */
  padding: 15px; /* Внутренние отступы */
}

.statistic-item {
  text-align: center; 
}

.statistic-number {
  color: #fff; 
  font-size: 3em;
  margin: 0 0 10px;
}

.statistic-description {
  color: #fff;
  font-size: 2em; 
  margin: 0; 
}
</style>