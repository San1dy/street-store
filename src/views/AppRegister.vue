<template lang="pug">
.register
  header.register__header
    router-link(to="/signin" class="register__header-logo")
  main.register__main
    h1.register__title Добро пожаловать!
    p.error-message(v-if="errorMessage") {{ errorMessage }}
    form.register__container(@submit.prevent="register")
      .register__inputs
        .register__input-container
          p.register__input-title Имя
          input.register__input(v-model="user.name" type="text" placeholder="Введите имя" required)
        .register__input-container
          p.register__input-title E-mail
          input.register__input(v-model="user.email" type="email" placeholder="Введите email" required)
        .register__input-container
          p.register__input-title Пароль
          input.register__input(v-model="user.password" type="password" placeholder="Введите пароль" required)
      .register__btns
        button.register__btn-auth(type="submit" :disabled="!user.name || !user.email || !user.password") Зарегистрироваться

        .register__footer-link-container
          p.register__footer-link-text Уже зарегистрированы?
          router-link(to="/signup" class="register__footer-link") Войти
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      try {
        // Здесь убрана переменная response
        await axios.post('http://localhost:3000/api/register', this.user);
        router.push('/home');
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = 'Произошла ошибка при регистрации.';
        }
      }
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
	background-image: url('../assets/images/R.jpeg');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
  }
input::placeholder {
  color: #fff; 
}
.register__header {
  max-width: 456px;
  width: 100%;
  padding: 70px 30px 40px;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .register__header {
    padding: 232px 30px 40px;
  }
}

@media screen and (max-width: 550px) {
  .register__header {
    padding: 56px 30px 50px;
    display: flex;
    justify-content: center;
  }
}
.register__header-logo {
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: 38px;
  height: 38px;
  display: block;
  transition: opacity 0.2s;
}
.register__header-logo:hover {
  cursor: pointer;
  opacity: 0.7;
}
.register__main {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 456px;
  height: 100%;
  flex-grow: 1;
  padding: 0 30px 70px;
  box-sizing: border-box;
}

@media screen and (max-width: 550px) {
  .register__main {
    padding: 0 30px 30px;
  }
}
.register__title {
  margin: 0 0 40px;
  padding: 0;
  font-weight: 500;
  font-size: 35px;
  line-height: 29px;
  color: #FFFFFF;
	text-align: center;
}

@media screen and (max-width: 550px) {
  .register__title {
    padding: 0 0 80px;
    text-align: center;
  }
}
.register__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  gap: 50px;
}

@media screen and (max-width: 1024px) {
  .register__container {
    justify-content: flex-start;
    gap: 152px;
  }
}

@media screen and (max-width: 550px) {
  .register__container {
    justify-content: space-between;
    gap: 50px;
  }
}
.register__inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.register__input-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.register__input-title {
  margin: 0 0 5px;
  padding: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;
  color: #fff;
}

.register__input {
  margin: 0;
  padding: 0 0 10px;
  border: none;
  border-bottom: 1px solid #fff;
  width: 100%;
  background: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  transition: border 0.2s;
}

.register__input:focus-visible {
  outline: none;
  border-color: #e06c6c;
}

.register__input_error {
  color: #EE3465;
}

.register__input-error {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  bottom: -6px;
  transform: translateY(100%);
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #EE3465;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
}

.register__input-error_visible {
  opacity: 1;
  visibility: visible;
}

.register__btns {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}

.register__btn-auth {
  padding: 13px 10px 15px;
  background: #e06c6c;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  transition: opacity 0.2s;
}

.register__btn-auth:hover {
  cursor: pointer;
  opacity: 0.8;
}

@media screen and (max-width: 550px) {
  .register__btn-auth {
    font-size: 12px;
    line-height: 15px;
  }
}
.register__footer-link-container {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
}
.register__footer-link-text {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
}

@media screen and (max-width: 550px) {
  .register__footer-link-text {
    font-size: 12px;
    line-height: 15px;
  }
}
.register__footer-link {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #e06c6c;
  text-decoration: none;
  transition: opacity 0.2s;
}
.register__footer-link:hover {
  cursor: pointer;
  opacity: 0.7;
}

@media screen and (max-width: 550px) {
  .register__footer-link {
    font-size: 12px;
    line-height: 15px;
  }
}

.error-message {
  color: red;
  margin: 10px 0;
}

</style>
