<template>
  <div class="d-flex flex-column align-center">
    <div class="form-wrapper">
      <h1 class="heading mb-5 text-center">Get in touch</h1>
      <p class="sub-heading text-center mb-10">
        If you would like to use Intake24 in your research or are interested in
        adapting the system for your country please get in touch:
        <a :href="'mailto:' + supportEmail">
          {{ supportEmail }}
        </a>
      </p>
      <div>
        <v-form ref="form">
          <div class="first-name-text">
            <v-text-field
              v-model="name"
              class="custom-text-field pl-2"
              placeholder="Name"
              variant="plain"
              hide-details="auto"
              dense
              required
            ></v-text-field>
          </div>

          <div class="first-name-text">
            <v-text-field
              v-model="email"
              hide-details="auto"
              class="custom-text-field pl-2"
              variant="plain"
              placeholder="Email address"
              flat
              required
            ></v-text-field>
          </div>
          <div class="first-name-text">
            <v-text-field
              v-model="message"
              hide-details="auto"
              class="custom-text-field pl-2"
              variant="plain"
              placeholder="Message "
              flat
              required
            ></v-text-field>
          </div>
          <v-btn
            class="btn rounded-pill mb-10"
            @click="saveForm"
            v-if="loading == false"
          >
            Send
          </v-btn>
          <v-btn class="btn rounded-pill mb-10" v-else> Submitting... </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
export default {
  data() {
    return {
      loading: false,
      name: '',
      email: '',
      message: '',
      supportEmail: import.meta.env.VITE_SUPPORT_EMAIL,
    }
  },
  methods: {
    async saveForm() {
      if (this.name != '' && this.email != '' && this.message != '') {
        this.loading = true
        try {
          let data = {
            name: this.name,
            email: this.email,
            message: this.message,
          }
          const response = await axios.post(
            'https://intake24-website-backend.vercel.app/api/system/contact-us',
            data,
          )
          if (response.data.success == true) {
            this.loading = false
            this.$notify({ title: 'Contact Form Submitted', type: 'success' })
            this.name = ''
            this.email = ''
            this.message = ''
          }
        } catch (error) {
          this.loading = false
          this.$notify({ title: 'Something Went Wrong', type: 'error' })
        }
      } else {
        this.$notify({ title: 'Please Insert All Fields', type: 'error' })
      }
    },
  },
}
</script>

<style scoped>
.custom-text-field input::placeholder {
  color: #595959;
}
.v-field__input {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 10px !important;
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  width: 100%;
}

.v-text-field input {
  padding-left: 10px;
  padding-top: -10px !important;
}

.img-top {
  margin-top: 60px;
}

.v-field__input {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 10px !important;
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  width: 100%;
}

.custom-text-field {
  margin-bottom: 15px;
  height: 55px;
  left: 228px;
  outline: none !important;
  padding-top: -10px !important;
  box-shadow: none !important;
  top: 558px;
  background: #f9f9f9;
  border: 1px solid #ececec;
  border-radius: 10px;
}
.text-field {
  border-radius: 10px;
}
.first-name-text {
  margin: auto;
  border-radius: 20px;
}
.sub-heading {
  text-align: center;
  margin-bottom: 70px;
  margin: auto;
  color: #060606;
  font-size: 16px;
  font-weight: 400;
}
.form-wrapper {
  background: #ffffff;
  box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
}
.wrapper {
  margin-top: 132px;
  margin-bottom: 98px;
}
.heading {
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  line-height: 1.1em;
}
.btn {
  height: 50px;
  margin: auto;
  box-shadow: none !important;
  background-color: #ee672d;
  color: #fff;
  width: 200px;
  text-align: center;
  display: flex;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 500;
  align-items: center;
  font-size: 20px;
}
@media only screen and (min-width: 600px) {
  .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }
  .first-name-text {
    width: 420px;
    margin: auto;
    border-radius: 20px;
  }
  .custom-text-field {
    width: 420px;
    margin-bottom: 15px;
    height: 55px;
    left: 228px;
    outline: none !important;
    box-shadow: none !important;
    top: 558px;
    background: #f9f9f9;
    border: 1px solid #ececec;
    border-radius: 10px;
  }
  img {
    width: 400px;
  }
  .sub-heading {
    text-align: center;
    width: 472px;
    margin-bottom: 70px;
    margin: auto;
    color: #060606;
    font-size: 20px;
    font-weight: 400;
  }
  .btn {
    height: 50px;
    margin: auto;
    box-shadow: none !important;
    background-color: #ee672d;
    color: #fff;
    width: 200px;
    text-align: center;
    display: flex;
    font-size: 16px;
    margin-top: 30px;
    font-weight: 500;
    align-items: center;
    font-size: 20px;
  }
  .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
  }
}
@media only screen and (min-width: 960px) {
  .wrapper {
    width: 1300px;
  }
  .first-name-text {
    width: 420px;
    margin: auto;
    border-radius: 20px;
  }
  .custom-text-field {
    width: 420px;
    margin-bottom: 15px;
    height: 55px;
    left: 228px;
    outline: none !important;
    box-shadow: none !important;
    top: 558px;
    background: #f9f9f9;
    border: 1px solid #ececec;
    border-radius: 10px;
  }
  .heading {
    font-size: 40px;
    padding-top: 96px;
    font-weight: semibold;
    margin: auto;
    color: #060606;
    inline-size: 500px;
    line-height: 1.1em;
  }
  img {
    width: 500px;
  }
  .btn {
    height: 50px;
    font-size: 20px;
  }
  .sub-heading {
    text-align: center;
    width: 472px;
    margin-bottom: 70px;
    margin: auto;
    color: #060606;
    font-size: 20px;
    font-weight: 400;
  }
  .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
    margin: auto;
  }
  .img-top {
    margin-top: 0px;
  }
}
</style>
