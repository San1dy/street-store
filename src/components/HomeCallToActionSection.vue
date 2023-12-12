<template lang="pug">
section.features.call-to-action
	.container
		.row
			.column.large
				.item-wrapper
					.card-box
						h4.card-text Не упустите шанс приобрести свою идеальную пару кроссовок уже сегодня!
			.column.small
				.section-btn
					router-link.btn-primary(to="/catalog") Посмотреть предложения
</template>
    
<script>
  export default {
    name: 'HomeCallToActionSection'
  }
</script>
    
<style scoped>
.features.call-to-action {
  background-color: #f9c2c2; 
  padding: 20px; 
  margin-top: 30px;
  border-radius: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  max-width: 1200px; 
  margin: 0 auto; 
  display: flex;
  justify-content: space-between; 
  align-items: center; 
}


.column.large {
  flex-basis: 100%; 
}

.item-wrapper {
  background-color: #ffffff; 
  border-radius: 10px; 
  padding: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.card-box h4.card-text {
  color: #333; 
  font-size: 1.3em; 
  font-weight: bold; 
  margin: 0; 
}


.column.small {
  margin-left: 70px;
  flex-basis: 30%; 
}

.section-btn .btn-primary {
  text-align: center;
  background-color: #e06c6c; 
  color: #ffffff; 
  padding: 15px 30px; 
  border-radius: 30px; 
  text-transform: uppercase; 
  font-weight: bold; 
  text-decoration: none; 
  display: inline-block; 
}


.section-btn .btn-primary:hover {
  background-color: #d05a5a; 
  text-decoration: none; 
  cursor: pointer; 
}

</style>
    