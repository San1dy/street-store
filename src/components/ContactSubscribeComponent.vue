<template lang="pug">
section.subscribe
  h1 Подписывайтесь на нас
  .social-icons
    a.social-icon(v-for="icon in socialIcons" :href="icon.link" :key="icon.name" :aria-label="`Подписаться на ${icon.name}`")
      i(:class="icon.class") Телеграм
</template>

<script>
export default {
  name: 'SubscribeComponent',
  data() {
    return {
      socialIcons: [
        { name: 'Facebook', class: 'fab fa-facebook-f', link: 'https://facebook.com' },
        { name: 'Twitter', class: 'fab fa-twitter', link: 'https://twitter.com' },
        { name: 'Instagram', class: 'fab fa-instagram', link: 'https://instagram.com' },
        { name: 'LinkedIn', class: 'fab fa-linkedin-in', link: 'https://linkedin.com' },
        { name: 'Twitch', class: 'fab fa-twitch', link: 'https://twitch.tv' }
      ]
    };
  }
};
</script>

<style scoped>
.subscribe {
  text-align: center;
  margin: 20px 0;
}

.social-icons {
  display: inline-flex;
  gap: 15px;
  justify-content: center;
  padding: 10px;
}

.social-icon {
  font-size: 24px; 
  color: #333; 
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #666; 
}
</style>
