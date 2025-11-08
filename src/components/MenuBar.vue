<!-- src/components/MenuBar.vue -->
<template>
  <nav class="menu-bar">
    <div class="menu-container">
      <h1 class="logo">MyApp</h1>
      <ul class="menu-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/form">Form</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
  <div id="content"></div>
</template>

<style scoped>
.menu-bar {
  background-color: #2563eb;
  color: white;
  padding: 0.7rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.menu-container {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.menu-links {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}

.menu-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.menu-links a:hover {
  opacity: 0.85;
}
</style>
