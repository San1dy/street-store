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
.team {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 2.5rem; /* Подходящий размер шрифта */
  color: #050505; /* Яркий цвет для привлечения внимания */
  margin-bottom: 1rem; /* Добавляем отступ снизу */
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Авто-подбор количества элементов в строке */
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.team-member {
  max-width: 100%; /* Убираем фиксированную ширину для адаптивности */
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding:  2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),
              -5px -5px 10px rgba(255, 255, 255, 0.6); /* Мягкие тени для неоморфизма */
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25),
              -8px -8px 16px rgba(255, 255, 255, 0.7); /* Более выраженные тени при наведении */
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 10px; /* Скругляем углы изображения */
}

.member-info {
  margin-top: 15px;
}

.member-info h2 {
  margin: 10px 0;
  font-size: 1.5rem; /* Увеличенный размер для имени */
  color: #605E61; /* Цвет шрифта */
}

.member-info p {
  font-size: 1.2rem; /* Размер шрифта для роли */
  color: #605E61; /* Цвет шрифта */
}

/* Медиа-запросы для адаптивности */
@media (max-width: 1079px) {
  .team-members {
    grid-template-columns: repeat(2, 1fr); /* Две колонки на экранах до 1079px */
  }
}

@media (max-width: 720px) {
  .team-members {
    grid-template-columns: repeat(1, 1fr); /* Одна колонка на экранах до 720px */
  }

  .team-member {
    /* Уменьшаем размеры элементов и контента */
    padding: 0.75rem;
  }

  .member-info h2 {
    font-size: 1rem; /* Уменьшаем размер шрифта для имени */
  }

  .member-info p {
    font-size: 0.8rem; /* Уменьшаем размер шрифта для роли */
  }
}

</style>


