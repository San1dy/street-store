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
      { name: 'Елена', role: 'Менеджер', photo: require('@/assets/images/photo-1541385767762-a55c33eb0c80.jpeg') },
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
.team {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 2.5rem; 
  color: #050505; 
  margin-bottom: 1rem; 
}

.team-members {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.team-member {
  max-width: 100%; 
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding:  1rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
              -5px -5px 10px rgba(255, 255, 255, 0.6); 
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
              -8px -8px 16px rgba(255, 255, 255, 0.7); 
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
  margin-bottom:10px;
  font-size: 1.5rem; 
  color: #605E61; 
}

.member-info p {
  margin:0;
  font-size: 1.2rem; 
  color: #605E61; 
}

@media (max-width: 1079px) {
  .member-info {
  margin-top: 10px;
}

.member-info h2 {

  font-size: 1.2rem; 

}

.member-info p {

  font-size: 1.0rem; 

}
}

@media (max-width: 720px) {
  .member-info {
  margin-top: 5px;
}
  .team-member {
    padding: 0.5rem;
    border-radius: 15px;
  }

  .member-info h2 {
    font-size: 0.7rem;
    margin-bottom:5px;
    margin-top: 0; 
  }

  .member-info p {
    font-size: 0.5rem; 
  }
}

@media (max-width: 480px) {
  
  .team-members {

  grid-template-columns: repeat(2, 1fr); 
  gap: 5px;
  justify-content: center;
}
  
  .member-info {
  margin-top: 2px;
}
  .team-member {
    padding: 1rem;
    border-radius: 20px;
  }

  .team-member img {

  border-radius: 20px; 
}
  .member-info h2 {
    font-size: 1rem;
    margin-bottom:5px;
    margin-top: 0; 
  }

  .member-info p {
    font-size: 0.7rem; 
  }
}

</style>


