<template lang="pug">
.about-us-container
  .row
    .image-wrapper
      img.full-width-image(src="../assets/images/photo-1556637640-2c80d3201be8.jpeg", alt="")
    .content-column
      .text-wrapper
        h1.section-title
          strong О нас
        p.main-text Мы - ведущий интернет-магазин кроссовок, предлагающий широкий ассортимент моделей от лучших брендов.
        p.main-text Наша команда экспертов тщательно отбирает каждую пару, чтобы удовлетворить потребности и предпочтения наших клиентов.
        p.main-text Мы гордимся тем, что предлагаем только качественные и стильные кроссовки, которые помогут вам выделиться из толпы.
</template>

<script>
export default {
	name: 'HomeMeInfo',
}
</script>

<style scoped>
.about-us-container {
  margin: 50px auto 50px;
  width: 70%;
  background-color: #ffffff;
}

.row {
  display: flex;
  justify-content: space-between;
}

.image-wrapper {
  width: 50%;
	margin: auto;
}

.full-width-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.content-column {
  width: 50%;
}

.text-wrapper {
  padding: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
}

.main-text {
  font-size: 18px;
  line-height: 1.5;
}

</style>