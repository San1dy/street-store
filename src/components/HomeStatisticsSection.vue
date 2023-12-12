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
  background-color: #fff; 
  display: flex;
  justify-content: space-around; 
  padding: 20px 0; 
	margin-top: 50px;
}

.statistic-item {
  text-align: center; 
}

.statistic-number {
  color: #e06c6c; 
  font-size: 3em;
  margin: 0 0 10px;
}

.statistic-description {
  color: #e06c6c;
  font-size: 2em; 
  margin: 0; 
}
</style>