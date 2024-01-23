<template lang="pug">
section.contact-us
  h1 Свяжитесь с нами
  button(@click="redirectToAnotherSite") Перейти в диалог
</template>

<script>

export default {
  setup() {
    const redirectToAnotherSite = () => {
      const redirectTo = "https://www.avito.ru/profile/messenger/channel/u2u-ezsL8fYdGRikG~Upo35vDQ";
      window.location.href = redirectTo;
    };

    return {
      redirectToAnotherSite,
    };
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
  justify-content: center; 
  flex-direction: column; 
}

h1 {
  color: #4b5563; 
  margin-bottom: 1rem; 
  font-size: 2rem; 
  transition: color 0.3s, font-size 0.3s; 
}

button {
  background: rgba(116, 112, 112, 0.85);
  backdrop-filter: blur(5px);
  color: white;
  border: none;
  padding: 1rem 2rem; 
  text-transform: uppercase;
  font-size: 1rem; 
  border-radius: 10px; 
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
              -4px -4px 8px rgba(255, 255, 255, 0.7); 
  transition: all 0.3s ease; 
}

button:hover {
  background: rgba(96, 94, 97, 0.85); 
  box-shadow: none; 
}

button:active {
  transform: scale(0.95); 
}


@media (max-width: 1240px) {
  h1 {
    font-size: 1.8rem;
  }
  button {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 1080px) {

}

@media (max-width: 720px) {
  h1 {
    font-size: 1.6rem;
  }
  button {
    font-size: 0.8rem;
    padding: 0.65rem 1.3rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.4rem;
  }
  button {
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.2rem;
  }
  button {
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
  }
}
</style>

