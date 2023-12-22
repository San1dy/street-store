<template lang="pug">
section.featured-section
  .container
    .content
      h2.title Не упустите шанс!
      p.description Приобретите свою идеальную пару кроссовок уже сегодня!
      router-link.btn-primary(to="/catalog") Посмотреть предложения
</template>


    
<script>
  export default {
    name: 'HomeCallToActionSection'
  }
</script>
    
<style scoped>

.featured-section {
  padding: 40px 20px;
  margin: 20px;
  background: linear-gradient(145deg, #ffffff, #000000);
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 20px;
    max-width: 600px;
    color:#000;
  }

  .btn-primary {
    background-color: #BA1519;
    color: #fff;
    border: none;
    padding: 10px 30px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: #BA1519;
      color: #605E61;
      cursor: pointer;
    }
  }

  .btn-primary:active {
  transform: scale(0.95);
}
}

@media (max-width: 768px) {
  .featured-section {
    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 1rem;
    }
  }
}
</style>
