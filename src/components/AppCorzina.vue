<template lang="pug">
div
  .catalog
    h1 Корзина
    .products
      p(v-if="cartItems.length === 0") На данный момент корзина пуста
      .product(v-for="item in cartItems", :key="item.id")
        img(:src="item.image")
        h2 {{ item.name }}
        span.price {{ item.price }} ₽
        p Пол: {{ item.floor }}
        p Размер: {{ item.size }}
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style scoped>

.item-added-text {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: #1b1b1b; 
  padding: 15px; 
  border-radius: 10px; 
  text-align: center;
}
.catalog {
  text-align: center;
  width: 80%;
  margin: auto;
}

p{ 
  text-align: left;
  margin-left: 5px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.product {
  width: calc(25% - 20px); 
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  transition: transform 0.3s ease;
  position: relative;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  height: 300px;
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
  margin-bottom: 10px;
}

button:hover {
  background-color: #c0392b;
}
</style>