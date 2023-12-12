<template lang="pug">
div.catalog
  h1 Каталог
  div.products
    div.product(v-for="item in items" :key="item.id")
      img(:src="item.image")
      h2 {{ item.name }}
      span.price {{ item.price }}₽
      p {{ item.description }}
      button Купить
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      items: [
        { id: 1, name: 'Nike Air Max 270', price: '5990', description: 'Ультралегкие и комфортные кроссовки для активного образа жизни.', image: require('@/assets/images/photo-1584735175097-719d848f8449.jpeg') },
        { id: 2, name: 'Adidas Ultraboost', price: '6990', description: 'Идеальные кроссовки для бега и тренировок.', image: require('@/assets/images/photo-1514989940723-e8e51635b782.jpeg')},
        { id: 3, name: 'Puma RS-X', price: '5490', description: 'Стильные и модные кроссовки для повседневной носки.', image:  require('@/assets/images/photo-1513531926349-466f15ec8cc7.jpeg') },
      ]
    };
  }
}
</script>

<style scoped>
.catalog {
  text-align: center;
  width: 80%;
  margin: auto;
}

.products {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.product {
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #fff;
  transition: transform 0.3s ease;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  border-radius: 10px;
}

.product h2 {
  color: #333;
  font-size: 20px;
  margin-top: 15px;
}

.product .price {
  font-size: 24px;
  color: #555;
  margin: 10px 0;
}

.product p {
  color: #666;
  font-size: 16px;
}

button {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #c0392b;
}
</style>
