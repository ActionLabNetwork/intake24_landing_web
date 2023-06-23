<template>
  <v-container fluid class="pt-md-15 main-wrapper content">
    <!-- Heading-1 -->
    <v-row
      cols="12"
      md="5"
      lg="4"
      offset="0"
      offset-md="1"
      class="d-flex justify-center text-md-left"
    >
      <div>
        <div class="">
          <h1 class="heading_main-box text-center">
            Below are some templates which may be useful for emailing research
            participants.
          </h1>
        </div>
      </div>
    </v-row>

    <!-- heading-2 -->
    <v-row>
      <div class="mb-5" ref="parentElForHyphen">
        <p class="heading-text">
          <strong>
            Where participants need to visit the survey link and enter their
            username and password.
          </strong>
        </p>
        <div ref="fullSpan" class="mt-2 mb-2">{{ hyphens }}</div>
        <p class="text mb-8">Dear &lt;Participant Name&gt;</p>
        <p class="text mb-8">
          Thank you for agreeing to take part in &lt;Name of Study&gt;<br />
          We hope you’ll find it interesting and will enjoy taking part.
        </p>
        <p class="text text-center mb-3">
          <strong>We would like you to complete Intake24 today</strong>
        </p>
        <p class="text mb-8">
          We’d like you to tell us about everything you had to eat and drink
          yesterday. It should take around 15-20 minutes to complete.
        </p>
        <p class="text mt-3 mb-3">You just need to follow these steps –</p>
        <p class="text">
          1. Visit
          <a href="https://intake24.com/surveys/studyid/login" target="_blank">
            https://intake24.com/surveys/studyid/login
          </a>
        </p>
        <p class="text">
          2. Enter your username: &lt;username&gt; and password:
          &lt;password&gt;
        </p>
        <p class="text">3. Tell us what you had to eat and drink yesterday</p>
        <p class="text mb-8">
          We will email you to let you know when you’re due to complete your
          next day – so please check your email regularly over the next few
          days.
        </p>
        <p class="text">
          As a thank you, participants that complete Intake24 on &lt;number
          days&gt; will receive a &lt;$XX&gt; voucher.
        </p>
        <p class="text">
          For further information on Intake24 please visit<a href=""
            ><span> Intake24.com</span> </a
          ><br />For further information on this study please contact Study
          contact email
        </p>
        <div ref="fullSpan" class="mt-2 mb-2">{{ hyphens }}</div>
      </div>
    </v-row>

    <!-- heading-3 -->
    <v-row>
      <div class="mt-15" ref="parentElForHyphen">
        <p class="heading-text">
          <strong>Where the URL logs the user in automatically.</strong>
        </p>
        <div ref="fullSpan" class="mt-2 mb-2">{{ hyphens }}</div>

        <p class="text mb-8">Dear &lt;Participant Name&gt;</p>
        <p class="text mb-8">
          Thank you for agreeing to take part in &lt;Name of Study&gt;
        </p>
        <p class="text mb-8">
          We hope you’ll find it interesting and will enjoy taking part.
        </p>
        <p class="text text-center mb-3">
          <strong>We would like you to complete Intake24 today</strong>
        </p>
        <p class="text">
          We’d like you to tell us about everything you had to eat and drink
          yesterday. It should take around 15-20 minutes to complete.
        </p>
      </div>
    </v-row>

    <!-- heading-6 -->
    <v-row>
      <div class="">
        <p class="text mt-5">You just need to follow these steps –</p>
        <p class="text">
          1. Visit
          <a href="" target="_blank">
            https://intake24.com/surveys/&lt;studyid&gt;/&lt;dGrt7IxT&gt;
          </a>
        </p>
        <p class="text">2. Tell us what you had to eat and drink yesterday</p>
        <p class="text mb-5">
          We will email you to let you know when you’re due to complete your
          next day – so please check your email regularly over the next few
          days.
        </p>
        <p class="text">
          As a thank you, participants that complete Intake24 on &lt;number
          days&gt; will receive a &lt;$XX&gt; voucher.
        </p>
        <p class="text">
          For further information on Intake24 please visit
          <a href="http://intake24.com">
            <span> Intake24.com</span>
          </a>
          <br />For further information on this study please contact &lt;Study
          contact email&gt;
        </p>
        <div ref="fullSpan" class="mt-2 mb-10">{{ hyphens }}</div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const parentElForHyphen = ref<HTMLElement | null>(null)
const fullSpan = ref(null)
const hyphens = ref('')

const calculateHyphens = () => {
  if (!parentElForHyphen.value) return

  const testSpan = document.createElement('span')
  parentElForHyphen.value.appendChild(testSpan)
  testSpan.style.visibility = 'hidden'
  testSpan.textContent = '-'

  const singleHyphenWidth = testSpan.getBoundingClientRect().width
  const parentWidth = parentElForHyphen.value.getBoundingClientRect().width
  const numHyphens = Math.floor(parentWidth / singleHyphenWidth)

  hyphens.value = '-'.repeat(numHyphens)

  parentElForHyphen.value.removeChild(testSpan) // clean up test element
}

onMounted(() => {
  calculateHyphens()

  window.addEventListener('resize', calculateHyphens)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateHyphens)
})
</script>

<style scoped>
.heading-text {
  font-size: clamp(1.125rem, 1.034rem + 0.3883vw, 1.5rem);
}
.text {
  font-size: clamp(0.875rem, 0.784rem + 0.3883vw, 1.25rem);
}

.content {
  line-height: 2;
}
.main-wrapper {
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;
}
.heading_main-box {
  font-size: clamp(1rem, 0.9393rem + 0.2589vw, 1.25rem);
  font-weight: 400;
  background: rgba(17, 24, 39, 0.03);
  border-radius: 10px;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 15px;
  padding-right: 15px;
  color: #111827;
  margin-bottom: 70px;
  margin-top: 50px;
  text-align: center;
}

@media (min-width: 960px) {
  .main-wrapper {
    margin-top: 20px;
    max-width: 820px;
    margin-bottom: 30px;
    margin: auto;
  }
}
</style>
