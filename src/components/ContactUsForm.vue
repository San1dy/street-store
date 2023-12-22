<template lang="pug">
section.contact-us
  h1 Свяжитесь с нами
  button(@click="redirectToAnotherSite") Перейти в диалог
</template>

<script>
export default {
  methods: {
    redirectToAnotherSite() {
      const redirectTo = "https://www.avito.ru/profile/messenger/channel/u2u-ezsL8fYdGRikG~Upo35vDQ";
      window.location.href = redirectTo;
    }
  }
}
</script>


<style scoped>
.contact-us {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

h1 {
  color: #000;
  margin: 0;
  font-size: 2em; 
  transition: font-size 0.3s;
}

button {
  background-color: #BA1519; 
  color: white;
  border: none;
  padding: 15px 30px;
  text-transform: uppercase;
  font-size: 16px; 
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.3s, padding 0.3s;
}

button:hover {
  background-color: #605E61;
}

@media (max-width: 1240px) {
  h1 {
    font-size: 1.8em;
  }
  button {
    font-size: 14px;
    padding: 12px 25px;
  }
}

@media (max-width: 1080px) {
  .contact-us {
    flex-direction: column;
  }
  h1, button {
    margin-bottom: 10px;
  }
}

@media (max-width: 720px) {
  h1 {
    font-size: 1.6em;
  }
  button {
    font-size: 12px;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.4em;
  }
  button {
    font-size: 11px;
    padding: 8px 18px;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.2em;
  }
  button {
    font-size: 10px;
    padding: 6px 16px;
  }
}
</style>

