<template lang="pug">
footer.footer
  .container
    .footer-bottom
      p © 2023 Онлайн магазин Street Store
</template>
  

<style scoped>
.footer {
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 10px;

}

.container {
  display: flex;
  justify-content: center; /* Центрирование содержимого */
  align-items: center;
  width: 100%;
}

.footer-bottom {
  text-align: center;
  color: #605E61;
  width: 100%;
  font-size: 0.9em; /* Уменьшенный размер шрифта для мобильных устройств */
  padding-top: 20px; /* Отступ сверху для текста копирайта */
}
</style>

