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
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 15px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.6),
              7px 7px 20px 0px rgba(0,0,0,.3),
              4px 4px 5px 0px rgba(0,0,0,.3);
  outline: none;
  background: rgb(207, 84, 84); 
  background: linear-gradient(0deg, rgb(17, 17, 17) 0%, rgba(169,169,169,1) 100%);
  text-decoration: none;
}

.btn-primary:hover {
  text-decoration: none;
  color: #fff;
  opacity: .7;
}

.btn-primary:active {
  box-shadow: 4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
              inset -4px -4px 6px 0 rgba(255,255,255,.2),
              inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
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
