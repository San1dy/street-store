<template lang="pug">
footer.footer
  .container
    .footer-bottom
      p © 2023 Онлайн магазин Street Store
</template>
  

<style scoped>
.footer {
  border-radius: 20px; 
  padding: 10px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
	width: 70%;
	margin: auto;
	margin-top: 50px;
	margin-bottom: 10px;
}
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
}

.footer-section {
  margin-bottom: 10px; 
}

.section-title {
  color: #fff; 
  margin-bottom: 10px; 
}

.section-links {
  list-style: none; 
  padding: 0; 
}

.section-links li {
  color: #666; 
  margin-bottom: 5px; 
}

.footer-actions {
  display: flex;
  gap: 10px; 
}

.action-button {
  padding: 10px 20px; 
  border: none; 
  border-radius: 20px; 
  color: white;
  background-color: #e06c6c; 
  cursor: pointer;
}

a {
  text-decoration: none;
}

.action-button.outline {
  color: #e06c6c; 
  background-color: transparent; 
  border: 1px solid #e06c6c; 
}

.footer-social {
  display: flex;
  gap: 10px; 
}

.footer-social a {
  color: #e06c6c; 
  font-size: 1.5em; 
}

.footer-bottom {
  text-align: center; 
  color: #605E61; 
  width: 100%; 
  margin-top: 20px; 
}


@media (max-width: 1080px) {
  .events {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 480px) {
  .events {
    grid-template-columns: 1fr;
  }
}
</style>

