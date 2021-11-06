<template>
  <v-app>
    <AppCenter/>
    <Footer/>
  </v-app>
</template>

<script>
import AppCenter from './components/AppCenter';
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
      AppCenter: AppCenter,
      Footer: Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
</style>
