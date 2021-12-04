<template>
  <v-container class="d-flex flex-wrap justify-center">
    <Snowf
        class="snows"
        :amount="50"
        :size="10"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="require('../assets/snow.png')"
        :zIndex="null"
        :resize="true"
        color="black"
    />
    <div v-for="item in items" v-bind:key="item.id" class="pa-3">
      <v-dialog
          v-model="item.formIsOpen"
          width="500"
      >
        <v-card>
          <v-container>
            <form ref="form" @submit.prevent="sendEmail(item)">

              <v-text-field
                  v-model="forForMailSender.conference"
                  name="conference"
                  :disabled="item.formIsOpen"
              ></v-text-field>

              <v-text-field
                  v-model="forForMailSender.fio"
                  name="fio"
                  label="ФИО"
                  required
              ></v-text-field>

              <vue-tel-input-vuetify
                  v-model="forForMailSender.phone"
                  :defaultCountry='ru'
                  placeholder=""
                  :preferredCountries="['ru']"
                  name="phone"
                  maxLen="11"
                  label="Номер телефона"
                  required
              ></vue-tel-input-vuetify>

              <v-text-field
                  v-model="forForMailSender.email"
                  name="email"
                  label="Почта"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="forForMailSender.position"
                  name="position"
                  label="Должность"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="forForMailSender.company"
                  name="company"
                  label="Компания"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="forForMailSender.message"
                  name="message"
                  label="Сообщение"
              ></v-text-field>
              <v-checkbox
                  type="checkbox"
                  value="1"
                  required
              >
                <template v-slot:label>
                  <div>
                    Даю согласие на
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                            target="_blank"
                            href="https://legalacts.ru/doc/152_FZ-o-personalnyh-dannyh/glava-2/statja-6/"
                            @click.stop
                            v-on="on"
                        >
                          обработку персональных данных.
                        </a>
                      </template>
                      Открыть в новом окне
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>

              <v-btn
                  class="mr-4"
                  type="submit"
              >
                отправить
              </v-btn>
            </form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-card
          class="card my-12 pa-3"
          max-width="374"
          rounded

      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>

        <v-img
            max-width="auto"
            :src="item.imageRef"
        ></v-img>

        <v-card-title
            align="center"
            class="custom_font_size"
        >{{ item.name }}
        </v-card-title>

        <v-card-text
            class="custom_font_size_post"
        >
          <div>Москва, Россия.</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Место и дата проведения:</v-card-title>

        <v-card-text>
          <a :href="item.place.link"
             target="_blank">
            {{ item.place.title }}
          </a>
        </v-card-text>
        <v-card-text class="custom_font_size_post">
          {{ item.date }}
        </v-card-text>
        <v-card-subtitle>
        <v-btn
            text
            target="_blank"
            :href="item.video"
            :disabled="item.disable == 1"
        >
          <v-icon
              color="red"
              elevation="12"
              tile
          >
            mdi-youtube
          </v-icon>
          Видео-отчет
        </v-btn>
          <v-btn
              color="deep-purple"
              text
              target="_blank"
              :href="item.meetupPlan"
              :disabled="item.disable == 1"
          >
            {{item.status}}
          </v-btn>
          <v-btn
              class="custom_btn"
              color="blue"
              text
              @click="item.formIsOpen = true; forForMailSender.conference = item.name"
          >
            Зарегистрироваться
          </v-btn>
        </v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';
import '@mdi/font/css/materialdesignicons.css'
import Snowf from 'vue-snowf';

export default{
  name: 'AppCenter',
  components:{
    Snowf
  },
  data: () => ({
    forForMailSender: {
      fio: '',
      phone: '',
      email: '',
      position: '',
      company: '',
      message: '',
      conference: ''
    },
    items: [
      {
        formIsOpen: false,
        name: 'Управление корпоративным автопарком в России 2022 г.',
        imageRef: require('../assets/Fleet.png'),
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.imperialhotel.ru/',
            },
          date: '27 января 2022 г.',
          meetupPlan: './Управление корпоративным автопарком в России 2022.pdf',
          status: 'Программа мероприятия',
          video: 'https://www.youtube.com/watch?v=xKycP6HbS5c&t'
      }, {
        formIsOpen: false,
        name: 'Управление корпоративными финансами в России 2022 г.',
        imageRef: require('../assets/Finance.png'),
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '24 марта 2022 г.',
        meetupPlan: './Управление корпоративными финансами в России 2021.pdf',
        status: 'Программа мероприятия 2021г.',
        video: 'https://www.youtube.com/watch?v=IRPXw6WY-uU&t'
      }, {
        formIsOpen: false,
        name: 'Управление персоналом в России 2022 г.',
        imageRef: require('../assets/Personal.png'),
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '19 мая 2022 г.',
        meetupPlan: './Управление персоналом в России 2021(1).pdf',
        status: 'Программа мероприятия 2021г.',
        video: 'https://www.youtube.com/watch?v=sRe6qB8hYZo&t'
      }, {
        formIsOpen: false,
        name: 'Управление информационными технологиями в России 2022 г.',
        imageRef: require('../assets/InfoTech.png'),
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '02 сентября 2022 г.',
        meetupPlan: './Управление информационными технологиями в России 2021.pdf',
        status: 'Программа мероприятия 2021г.',
        video: 'https://www.youtube.com/watch?v=ib1aj-oHXUE&t'
      }, {
        formIsOpen: false,
        disable: 0,
        name: 'Управление корпоративным правом в России 2022 г.',
        imageRef: require('../assets/Pravo.png'),
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '06 октября 2022 г.',
        meetupPlan: './Управление корпоративным правом в России 2021.pdf',
        status: 'Программа мероприятия 2021г.',
        video: 'https://www.youtube.com/watch?v=Xgiej0-WZyM&t',
      }, {
        formIsOpen: false,
        disable: 1,
        name: 'Управление производством в России 2022 г.',
        imageRef: require('../assets/Manufacturing.png'),
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '08 декабря 2022 г.',
        meetupPlan: './Управление корпоративным правом в России 2021.pdf',
        status: 'Программа мероприятия',
        video: 'https://www.youtube.com/watch?v=Xgiej0-WZyM&t'

      },
    ],
  }),
  methods: {
    sendEmail(item) {
      console.log("Send started")
      const form = this.$refs.form[0];
      item.formIsOpen = false;
      console.log(this.forForMailSender)
      this.$nextTick(() => {
            emailjs.sendForm('service_r73ngfb', 'template_bjwlv3f', form, 'user_BbgeRZDLKK4r8lROZIEkx')
                .then((result) => {
                  console.log('SUCCESS!', result.text);
                }, (error) => {
                  console.log('FAILED...', error.text);
                });
          }
      )

    },
    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 7 && v <= 99999999999) return true;
      return 'Номер с 8';
    }
  }
}
</script>

<style lang="scss">
.custom_font_size {
  font-size: large !important;
  word-break: normal !important;
}

.custom_font_size_post {
  font-size: medium !important;
}

.form_container {
  opacity: 100% !important;

}
.custom_btn{
  letter-spacing: .7px !important;
}
.card{
  background-color: rgba(20, 23, 19, 0.05) !important;
  color: rgba(0,0,0,.87) !important;
}
.snows{
  z-index: 1 !important;
  pointer-events: none !important;
}
</style>

