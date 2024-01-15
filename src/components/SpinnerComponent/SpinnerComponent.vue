<template lang="pug">
.no-freeze-spinner(v-if="isVisible")
	#no-freeze-spinner
		div
			i.material-icons account_circle
			i.material-icons home
			i.material-icons work
</template>

<script>
export default {
  name: 'SpinnerComponent',
  props: {
    isVisible: Boolean,
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

$dark: rgba(0, 0, 0, 0.8);

.no-freeze-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: $dark;
  opacity: 0.5;
  transition: opacity 0.1s linear, transform 0.1s linear;
  transform: scale(1);
  overflow: hidden;

  #no-freeze-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    padding: 5px;
    border-radius: 50%;
    box-shadow: 0 0 0 2000px $dark;
  }

  .material-icons {
    font-size: 24px;
    color: #fff;
  }

  @keyframes loadicons {
    0% {
      transform: scale(0) translate3d(0, 0, 0);
    }
    11% {
      transform: scale(1.2) translate3d(0, 0, 0);
    }
    22% {
      transform: scale(1) translate3d(0, 0, 0);
    }
    33% {
      transform: scale(0) translate3d(0, 0, 0);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  #no-freeze-spinner div div {
    animation-play-state: running;
    border: 5px solid rgba(200, 200, 200, 1);
    border-radius: 50%;
    animation: rotate 1s infinite linear;
    border-left-color: rgba(200, 200, 200, 0.4);
    width: 100%;
    height: 100%;
  }

  #no-freeze-spinner i {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    line-height: 1;
    transform: scale(0) translate3d(0, 0, 0);
  }

  #no-freeze-spinner i:nth-of-type(1) {
    animation: loadicons 3s infinite ease-in-out;
  }

  #no-freeze-spinner i:nth-of-type(2) {
    animation: loadicons 3s 1s infinite ease-in-out;
  }

  #no-freeze-spinner i:nth-of-type(3) {
    animation: loadicons 3s 2s infinite ease-in-out;
  }
}
</style>