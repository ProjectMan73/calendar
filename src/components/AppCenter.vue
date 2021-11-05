<template>
  <v-container class="d-flex flex-wrap justify-center">
    <div v-for="item in items" v-bind:key="item.id" class="pa-6">
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

              <v-text-field
                  v-model="forForMailSender.phone"
                  name="phone"
                  :counter="11"
                  label="Номер телефона"
                  required
              ></v-text-field>

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
          class="my-12"
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
        <v-card-actions>
          <v-btn
              color="deep-purple"
              text
              target="_blank"
              :href="item.meetupPlan"
          >
            Программа
          </v-btn>
          <v-spacer/>
          <v-btn
              color="blue"
              text
              @click="item.formIsOpen = true; forForMailSender.conference = item.name"
          >
            Зарегистрироваться
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'AppCenter',
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
        imageRef: require('../assets/avtoparks.png'),
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.imperialhotel.ru/',
            },
          date: '27 января 2022 г.',
          meetupPlan: '../Управление корпоративными финансами в России 2021.pdf',
      }, {
        formIsOpen: false,
        name: 'Управление корпоративными финансами в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/f91/f9185d03d0af6420ca55b7ff4bbeef89.png',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '24 марта 2022 г.',
        meetupPlan: '/Управление корпоративными финансами в России 2021.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление персоналом в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/webp/iblock/b47/sdpohqfypup6c0f45van00lbggpb8qce.webp',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '19 мая 2022 г.',
        meetupPlan: '/Управление персоналом в России 2021(1).pdf'
      }, {
        formIsOpen: false,
        name: 'Управление информационными технологиями в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/677/677295e7fe03c74c44f966d571eb4e9d.png',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.hyattrestaurants.com/en/dining/russia/moscow',
            },
        date: '02 сентября 2022 г.',
        meetupPlan: '/Управление информационными технологиями в России 2021.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление корпоративным правом в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/8be/t6f71h8w9s0kcmkdykagkghzd2i16682.png',
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.imperialhotel.ru/',
            },
        date: '06 октября 2022 г.',
        meetupPlan: '/Управление корпоративным правом в России 2021.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление производством в России 2022 г.',
        imageRef: '',
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.imperialhotel.ru/',
            },
        date: '08 декабря 2022 г.',
        meetupPlan: ''
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
</style>

