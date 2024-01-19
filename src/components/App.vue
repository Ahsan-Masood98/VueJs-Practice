<template>
  <the-header title="RememberMe"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>
<script>
import StoredResourses from './learning-resources/StoredResourses.vue';
import TheHeader from './layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
    'stored-resource': StoredResourses,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google....',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
