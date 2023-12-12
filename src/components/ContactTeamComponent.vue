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
export default {
  name: 'TeamComponent',
  data() {
    return {
      teamMembers: [
        { name: 'Алексей', role: 'Основатель', photo: require('@/assets/images/photo-1569598409550-55537a83a662.jpeg') },
        { name: 'Елена', role: 'Менеджер по продажам', photo: require('@/assets/images/photo-1541385767762-a55c33eb0c80.jpeg') },
        { name: 'Иван', role: 'Дизайнер', photo: require('@/assets/images/photo-1621624666561-84d0107001dc.jpeg') },
        { name: 'Мария', role: 'Маркетолог', photo: require('@/assets/images/photo-1681075401974-907cc62a4373.jpeg') }
      ]
    };
  }
};
</script>

<style scoped>
.team {
  text-align: center;
  margin: 20px;
}

.team-members {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.team-member {
  background: #FFF;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 300px;
}
h1{
  font-size: 3em;
}
.team-member:hover {
  transform: translateY(-5px);
}

.team-member img {
  max-width: 100%;
  border-radius: 10px;
  height: auto;
}

.member-info {
  margin-top: 10px;
}

.member-info h2 {
  margin: 10px 0;
  font-size: 25px;
  color: #333;
}

.member-info p {
  font-size: 20px;
  color: #666;
}
</style>
