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
export default {
  name: 'FaqComponent',
  data() {
    return {
      faqItems: [
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
      ]
    };
  },
  methods: {
    toggle(item) {
      item.open = !item.open;
    }
  }
};
</script>

<style scoped>
.faq {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

h1{
	text-align: center;
	font-size: 3em; 
}
.faq-item {
  margin-bottom: 10px;
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: background-color 0.3s;
  padding-left: 50px;
}

.faq-question:hover {
  background-color: rgba(0,0,0,0.1);
}

.faq-answer {
  padding: 10px;
  padding-left: 40px;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>
