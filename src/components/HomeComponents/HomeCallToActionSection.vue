<template lang="pug">
section.featured-section
  .container
    .content
      h2.title Не упустите шанс!
      p.description Приобретите свою идеальную пару кроссовок уже сегодня!
      router-link.btn-primary(to="/catalog") Посмотреть предложения
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeCallToActionSection',
  setup() {
  },
});
</script>

    
<style scoped>

.featured-section {
  padding: 40px 20px;
  margin: 20px auto; 
  background: var(--main-bg-color); 
  border-radius: 15px;
  box-shadow: 7px 7px 14px #babecc,
              -7px -7px 14px #ffffff; 
  color: var(--text-color); 
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
    font-size: 2.5rem; 
    color: var(--text-color); 
    margin-bottom: 15px;
  }

  .description {
    font-size: 1.5rem; 
    margin-bottom: 20px;
    max-width: 600px;
    color: var(--detail-text-color); 
  }

  .btn-primary {
    width: 200px; 
    height: 50px; 
    color: #fff;
    border-radius: 10px; 
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 18px; 
    background: var(--accent-color); 
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #babecc,
                -4px -4px 8px #ffffff; 
    text-decoration: none;
  }

  .btn-primary:hover {
    background: var(--button-hover-color); 
    box-shadow: inset 1px 1px 2px #babecc,
                inset -1px -1px 2px #ffffff; 
    opacity: 1; 
  }

  .btn-primary:active {
    transform: translateY(2px); 
    box-shadow: inset 2px 2px 2px #babecc,
                inset -2px -2px 2px #ffffff; 
  }
}

@media (max-width: 768px) {
  .featured-section {
    .title {
      font-size: 1.8rem; 
    }

    .description {
      font-size: 1.1rem; 
    }

    .btn-primary {
      width: 150px; 
      font-size: 16px; 
    }
  }
}

</style>
