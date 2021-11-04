<template>
  <v-app>
    <AppCenter/>
  </v-app>
</template>

<script>
import AppCenter from './components/AppCenter';

export default {
  name: 'App',

  components: {
      AppCenter: AppCenter,
  },

  data: () => ({
    //
  }),
};
</script>
