<template lang="pug">
.login
  header.login__header
    a.login__header-logo(:href="'/signup'")
  main.login__main
    h1.login__title Рады видеть!
    form.login__container
      .login__inputs
        .login__input-container
          p.login__input-title E-mail
          input.login__input(type="email" name="email" placeholder="Введите email" required)
        .login__input-container
          p.login__input-title Пароль
          input.login__input(type="password" name="password" placeholder="Введите пароль" required)
      .login__btns
        button.login__btn-auth(type="submit" :disabled="!isValid") Войти
        .login__footer-link-container
          p.login__footer-link-text Ещё не зарегистрированы?
          router-link(to="/signin" class="login__footer-link") Регистрация
</template>

<script>
export default {
  name: 'LoginComponent',

};
</script>

<style scoped>
.login {
  background-image: url('../assets/images/R.jpeg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.login__header {
  max-width: 456px;
  width: 100%;
  padding: 70px 30px 40px;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .login__header {
    padding: 232px 30px 40px;
  }
}

@media screen and (max-width: 550px) {
  .login__header {
    padding: 56px 30px 50px;
    display: flex;
    justify-content: center;
  }
}


.login__header-logo {
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: 38px;
  height: 38px;
  display: block;
  transition: opacity 0.2s;
}

.login__header-logo:hover {
  cursor: pointer;
  opacity: 0.7;
}

.login__main {
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
  .login__main {
    padding: 0 30px 30px;
  }
}

.login__title {
  text-align: center;
  margin: 0 0 40px;
  padding: 0;
  font-weight: 500;
  font-size: 35px;
  line-height: 29px;
  color: #FFFFFF;
}

@media screen and (max-width: 550px) {
  .login__title {
    padding: 0 0 80px;
    text-align: center;
  }
}

.login__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  gap: 50px;
  background-color:#00000069;
  padding: 20px;
  border-radius: 20px;
}

@media screen and (max-width: 1024px) {
  .login__container {
    justify-content: flex-start;
    gap: 221px;
  }
}

@media screen and (max-width: 550px) {
  .login__container {
    justify-content: space-between;
    gap: 50px;
  }
}

.login__inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.login__input-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.login__input-title {
  margin: 0 0 5px;
  padding: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;
  color: #FFF;
}

.login__input {
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

.login__input:focus-visible {
  outline: none;
  border-color: #e06c6c;
}

.login__input_error {
  color: #EE3465;
}

.login__input-error {
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
  text-align: right;
  width: 100%;
}

.login__input-error_visible {
  opacity: 1;
  visibility: visible;
}

.login__btns {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  position: relative;
}
input::placeholder {
        color: #fff; /* Укажите нужный цвет */
    }
.login__err-message {
  margin: 0;
  padding: 0;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%, -100%);
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #EE3465;
  opacity: 0;
  visibility: none;
  transition: opacity 0.2s, visibility 0.2s;
}

.login__err-message_visible {
  opacity: 1;
  visibility: visible;
}

.login__btn-auth {
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
  transition: opacity 0.2s, background 0.2s, color 0.2s;
  position: relative;
}

.login__btn-auth_disabled {
  background: #FFF;
  color: #C2C2C2;
}

.login__btn-auth_disabled:hover {
  opacity: 1;
  cursor: default;
}


.login__btn-auth:hover {
  cursor: pointer;
  opacity: 0.8;
}


@media screen and (max-width: 550px) {
  .login__btn-auth {
    font-size: 12px;
    line-height: 15px;
  }
}


.login__footer-link-container {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
}

.login__footer-link-text {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFF;
}

@media screen and (max-width: 550px) {
  .login__footer-link-text {
    font-size: 12px;
    line-height: 15px;
  }
}

.login__footer-link {
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

.login__footer-link:hover {
  cursor: pointer;
  opacity: 0.7;
}

@media screen and (max-width: 550px) {
  .login__footer-link {
    font-size: 12px;
    line-height: 15px;
  }
}

</style>
