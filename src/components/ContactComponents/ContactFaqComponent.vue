<template lang="pug">
section.faq
  h1 Часто задаваемые вопросы
  .faq-item(v-for="item in faqItems" :key="item.question")
    button.faq-question(@click="toggle(item)")
      h2 {{ item.question }}
    .faq-answer(v-if="item.open")
      p {{ item.answer }}
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FaqComponent',
  setup() {
    const faqItems = ref([
      {
        question: 'Как выбрать правильный размер?',
        answer: 'Мы рекомендуем обратиться к нашей таблице размеров, чтобы выбрать подходящий размер кроссовок.',
        open: false
      },
      {
        question: 'Как оформить возврат?',
        answer: 'Для оформления возврата свяжитесь с нашей службой поддержки.',
        open: false
      },
      {
        question: 'Как связаться с нами?',
        answer: 'Вы можете связаться с нами по телефону или отправить нам электронное письмо.',
        open: false
      }
    ]);

    const toggle = (item) => {
      item.open = !item.open;
    };

    return {
      faqItems,
      toggle
    };
  }
});
</script>

<style scoped>
.faq {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px; 
}

h1{
  text-align: center;
  font-size: 3em; 
  color: #605E61;
}
.faq-item {
  margin-bottom: 20px;
}

h2 {
  color: #000;
  size:3em;
}
p {
  color: #605E61;
}
.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  transition: background-color 0.3s;
  padding-left: 50px;
}

.faq-question:hover {
  background-color: rgba(0,0,0,0.3);
}

.faq-answer {
  padding: 10px;
  padding-left: 40px;
  border-top: none;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

@media (max-width: 1240px) {
  h1 {
    font-size: 2.5em;
  }
}

@media (max-width: 1080px) {
  .faq-question {
    padding-left: 30px;
    font-size: 10px;
  }
}

@media (max-width: 720px) {
  .faq {
    max-width: 500px;
  }
  h1 {
    font-size: 2em;
  }
  .faq-answer {
    padding-left: 20px;
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .faq {
    max-width: 400px;
  }
  .faq-question {
    padding-left: 20px;
    font-size: 7px;
  }
  h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 320px) {
  .faq {
    max-width: 300px;
  }
  h1 {
    font-size: 1em;
  }
}
</style>
