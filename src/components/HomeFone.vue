<template lang="pug">
section.content#id
  .container-fluid
    .row
      .content-wrap
        h1.title(:class="{'active': active}")
          strong {{ title }}
        p.text {{ description }}
</template>

<script>
export default {
  name: "HomeFone",
  data() {
    return {
      title: "Кроссовки онлайн",
      description: "Лучший выбор кроссовок для всех любителей спорта и стиля",
      active: true,
      link: "/products",
    };
  },
};
</script>
  
<style scoped>
	.content {
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center center;
    height: 900px;
  
  }

  .container-fluid {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/123.png);
    background-size: cover;
    border-radius: 0 0 20px 20px;
  }
  .content-wrap {
    position: absolute;
    top: 15%;
    left: 30%;
    transform: translate(-50%, -50%);
  }

  a {
  text-decoration: none; 
  }
  .title {
    font-size: 6rem;
    color: #000;
    margin:0;
  }

  .text {
    font-size: 2rem;
    color: #000;

  }

  .button {
    font-size: 1rem;
    width: 95px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #000;
  }

  .btn {
    margin: 10px;
    color: #000;
  }
</style>