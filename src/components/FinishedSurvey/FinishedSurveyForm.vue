<template>
  <div class="d-flex flex-column align-center">
    <div class="form-wrapper">
      <h1 class="heading mb-5 text-center">Thank you for your participation in the survey</h1>
      <p class="sub-heading text-center mb-10">
        Your food and drinks intake information has been recorded. Thank you for your participation!
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      loading: false,
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
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
