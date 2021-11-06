<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">
        <v-title
            class="custom_font_size"
        >Будем рады видеть Вас на мероприятии!</v-title>

        <v-spacer></v-spacer>

        <v-btn
            target="_blank"
            href="https://www.linkedin.com/in/stanislav-bolshakov-47328820b/"
            dark
            icon
        >
          <v-icon
              elevation="12"
              tile
              size="24px"
          >
            mdi-linkedin
          </v-icon>
        </v-btn>

        <v-btn
            target="_blank"
            href="https://www.instagram.com/cgconferences/"
            class="mx-4"
            dark
            icon
        >
          <v-icon
              elevation="12"
              tile
              size="24px"
          >
            mdi-instagram
          </v-icon>
        </v-btn>

        <v-btn
            target="_blank"
            href="https://www.youtube.com/channel/UCmx1KU_bxD2-wZ04g1isf1w"
            dark
            icon
        >
          <v-icon
              elevation="12"
              tile
              size="24px"
          >
            mdi-youtube
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>CG Conferences</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    items: [
        {
          icon: 'mdi-linkedin',
          social: 'https://www.linkedin.com/in/stanislav-bolshakov-47328820b/'
        },
        {
          icon: 'mdi-instagram',
          social: 'https://www.instagram.com/cgconferences/'
        },
        {
          icon: 'mdi-youtube',
          social:'https://www.youtube.com/channel/UCmx1KU_bxD2-wZ04g1isf1w'
        },
    ],
  }),
}
</script>

<style scoped>

</style>
