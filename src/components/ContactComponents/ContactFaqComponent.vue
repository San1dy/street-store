<template lang="pug">
section.faq
  h1 Часто задаваемые вопросы
  .faq-item(v-for="item in faqItems" :key="item.question")
    button.faq-question(@click="toggle(item)")
      h2 {{ item.question }}
    .faq-answer(v-if="item.open")
      p {{ item.answer }}
</template>

<script setup>
import { ref } from 'vue';

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
</script>


<style scoped>
.faq {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.2),
              -8px -8px 16px rgba(255, 255, 255, 0.2);
}

h1 {
  text-align: center;
  font-size: 3rem; 
  color: #4b5563;
  padding: 1rem 0;
}
.faq-item {
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 0.5rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
              -4px -4px 8px rgba(255, 255, 255, 0.7);
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
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.faq-answer {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #6b7280;
}

@media (max-width: 768px) {
  h1 {
  font-size: 2rem; 
  padding: 0.5rem 0;
}
  .faq {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 20px;
}
.faq-item {
  margin-bottom: 0.5rem;
  border-radius: 15px;
  padding: 0.3rem;
}

.faq-question h2 {
  font-size: 1rem;
  margin: 0.2rem;
}
p {
  font-size: 0.7rem;
  margin: 0.2rem;
}
.faq-question {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px;
}

.faq-answer {
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
}

@media (max-width: 560px) {
  h1 {
  font-size: 1.5rem; 
  padding: 0.5rem 0;
}
}

@media (max-width: 480px) {
  h1 {
  font-size: 1rem; 
  padding: 0.3 rem 0;
}

.faq-question h2 {
  font-size: 0.5rem;
  margin: 0.1rem;
}
p {
  font-size: 0.4rem;
  margin: 0.1rem;
}

.faq-question {
  padding: 0.2rem;

}

.faq-answer {
  padding: 0.2rem ;

}
}


@media (max-width: 480px) {
  h1 {
  font-size: 0.5rem; 
  padding: 0.2 rem 0;
}
}
</style>
