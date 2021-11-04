<template>
  <v-app>
    <AppCenter/>
    <Sender/>
  </v-app>
</template>

<script>
import AppCenter from './components/AppCenter';
import Sender from "./components/Sender";

export default {
  name: 'App',

  components: {
    Sender,
      AppCenter: AppCenter,
  },

  data: () => ({
    //
  }),
};
</script>
