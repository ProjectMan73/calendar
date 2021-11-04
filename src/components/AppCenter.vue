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
                  value="1"
                  label="Не против поделиться данными :3"
                  type="checkbox"
                  required
              ></v-checkbox>

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
              :href=item.meetupPlan
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
        name: 'Управление корпоративным парком в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/689/6897490bedd940b3915e3fca547406be.png',
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.ya.ru',
            },
        date: '27 января 2022 г.',
        meetupPlan: '/test.pdf',
      }, {
        formIsOpen: false,
        name: 'Управление корпоративными финансами в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/f91/f9185d03d0af6420ca55b7ff4bbeef89.png',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.ya.ru',
            },
        date: '24 марта 2022 г.',
        meetupPlan: '/test.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление персоналом в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/webp/iblock/b47/sdpohqfypup6c0f45van00lbggpb8qce.webp',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.ya.ru',
            },
        date: '19 мая 2022 г.',
        meetupPlan: '/test.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление информационными технологиями в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/677/677295e7fe03c74c44f966d571eb4e9d.png',
        place:
            {
              title: 'Отель Арарат Парк Хаятт',
              link: 'https://www.ya.ru',
            },
        date: '02 сентября 2022 г.',
        meetupPlan: '/test.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление корпоративным правом в России 2022 г.',
        imageRef: 'https://all-events.ru/upload/iblock/8be/t6f71h8w9s0kcmkdykagkghzd2i16682.png',
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.ya.ru',
            },
        date: '06 октября 2022 г.',
        meetupPlan: '/test.pdf'
      }, {
        formIsOpen: false,
        name: 'Управление производством в России 2022 г.',
        imageRef: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
        place:
            {
              title: 'Отель Империал Парк отель & SPA',
              link: 'https://www.ya.ru',
            },
        date: '08 декабря 2022 г.',
        meetupPlan: '/test.pdf'
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
            emailjs.sendForm(process.env.SERVICEID, process.env.TEMPLATEID, form, process.env.USERID)
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

