<template lang="pug">
section.team
  h1 Наша команда
  .team-members
    .team-member(v-for="member in teamMembers" :key="member.name")
      img(:src="member.photo" :alt="`Фото ${member.name}`")
      .member-info
        h2 {{ member.name }}
        p {{ member.role }}
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TeamComponent',
  setup() {
    const teamMembers = ref([
      { name: 'Алексей', role: 'Основатель', photo: require('@/assets/images/photo-1569598409550-55537a83a662.jpeg') },
      { name: 'Елена', role: 'Менеджер по продажам', photo: require('@/assets/images/photo-1541385767762-a55c33eb0c80.jpeg') },
      { name: 'Иван', role: 'Дизайнер', photo: require('@/assets/images/photo-1621624666561-84d0107001dc.jpeg') },
      { name: 'Мария', role: 'Маркетолог', photo: require('@/assets/images/photo-1681075401974-907cc62a4373.jpeg') }
    ]);

    return {
      teamMembers
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  color:#f7070b;
}
.team {
  text-align: center;
  margin: 20px;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.team-member {
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding:  2rem;
  box-shadow: 10px 10px 10px #605E61 ;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.member-info {
  margin-top: 15px;
}

.member-info h2 {
  margin: 10px 0;
  font-size: 1.5em; 
  color: #605E61;
}

.member-info p {
  font-size: 1.2em; 
  color: #605E61;
}

@media (max-width: 1240px) {
  .team-members {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 1080px) {
  .member-info h2 {
    font-size: 1.4em;
  }
  .member-info p {
    font-size: 1.1em;
  }
}

@media (max-width: 720px) {
  .team-members {
    grid-template-columns: 1fr; 
  }
}

@media (max-width: 480px) {
  .member-info h2 {
    font-size: 1.3em;
  }
  .member-info p {
    font-size: 1em;
  }
}

@media (max-width: 320px) {
  .member-info h2 {
    font-size: 1.2em;
  }
  .member-info p {
    font-size: 0.9em;
  }
}
</style>


