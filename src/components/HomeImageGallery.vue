<template lang="pug">
section.gallery
  h2 Галерея
  p Посмотрите наши лучшие модели кроссовок в действии.
  div.gallery-wrapper(ref="scrollContainer")
    div.gallery-item(v-for="image in images" :key="image.id")
      img(:src="image.src" :alt="image.alt")
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/images/photo-1623684225794-a8f1f5037f5c.jpeg'), alt: 'Описание 1' },
        { id: 2, src: require('@/assets/images/photo-1532561685579-890e8f61456a.jpeg'), alt: 'Описание 2' },
				{ id: 3, src: require('@/assets/images/photo-1515955656352-a1fa3ffcd111.jpeg'), alt: 'Описание 2' },
				{ id: 4, src: require('@/assets/images/photo-1596936273467-b3af0c82af7a.jpeg'), alt: 'Описание 2' },
				{ id: 5, src: require('@/assets/images/photo-1552066344-2464c1135c32.jpeg'), alt: 'Описание 2' },
				{ id: 6, src: require('@/assets/images/photo-1549298916-f52d724204b4.jpeg'), alt: 'Описание 2' },
				{ id: 7, src: require('@/assets/images/photo-1524532787116-e70228437bbe.jpeg'), alt: 'Описание 2' },
				{ id: 8, src: require('@/assets/images/photo-1600185365926-3a2ce3cdb9eb.jpeg'), alt: 'Описание 2' },
      ]
    };
  },
  mounted() {
    this.enableHorizontalScroll();
  },
  methods: {
    enableHorizontalScroll() {
      const container = this.$refs.scrollContainer;
      if (container) {
        container.addEventListener('wheel', (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          container.scrollLeft += e.deltaY + e.deltaX;
        });
      }
    }
  }
};
</script>

<style scoped>
.gallery {
  text-align: center;
}

.gallery-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
  height: 320px;
}

.gallery-item {
  flex: 0 0 auto; 
  margin: 10px;
  transition: transform 0.1s;
  width: 300px; 
  height: 300px; 
  border-radius: 10px;
}
img {
  width: 300px;
  height: 300px; 
  object-fit: cover; 
  height: auto;
  display: block;
  border-radius: 10px;
}
img {
  height: 300px;
}
</style>
