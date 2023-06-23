<template class="time-line-class">
  <div class="time-line-class">
    <v-container fluid class="wrapper-main">
      <v-timeline>
        <!--Item 1-->
        <v-timeline-item class="expentioniright second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2022</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading"
                    >Intake24 developed for use in Malaysia and Indonesia</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading">
                    The system is being developed for Malaysia including
                    translation into Malay, Mandarin and Tamil along with the
                    addition of local foods and portion images. Once developed,
                    Intake24 Malaysia will undergo relative validation against
                    interviewer-led recalls (Monash Malaysia).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 1 Closed-->
        <!--Item 2-->
        <v-timeline-item class="expentionleft second-wrapper">
          <template v-slot:opposite>
            <span class="text-year"> 2020</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion1"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Intake24 selected and developed for use in the Australian
                    National Nutrition and Physical Activity survey</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen1">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >The Australian Bureau of Statistics and Food Standards
                    Australia and New Zealand developed and deployed the system
                    for the 2023 National Nutrition and Physical Activity Survey
                    including creating methods for bulk uploading of food
                    databases (Monash University, ABS, FSANZ).</span
                  >
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 2 Closed-->
        <!--Item 2-->
        <v-timeline-item class="expentioniright second-wrapper">
          <template v-slot:opposite>
            <span class="text-year"> 2019</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion2"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Intake24 developed for use in the South Asian Biobank
                    study</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen2">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >Intake24 was adapted for Sri Lanka, India, Pakistan and
                    Bangladesh through the addition of local foods and portion
                    size images for use in the South Asia Biobank study
                    (Cambridge University along with local country teams).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 2 Closed-->
        <!--Item 3-->
        <v-timeline-item class="expentionleft second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2018</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion3"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Development of Intake24 for Australia, used in Scottish
                    Health Survey, and selected for used in the UK National Diet
                    and Nutrition Surveys</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen3">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >In 2018 Intake24 was pilot tested alongside the main data
                    collection for the Scottish Health Survey. Almost 80% of
                    those who agreed to complete Intake24 completed 1 or more
                    recalls (Newcastle University). Following a review of
                    automated dietary assessment tools Intake24 was selected as
                    the new method for dietary data collection in the UK
                    National Diet and Nutrition Surveys (NDNS) and the system
                    was further developed for implementation in NDNS (Cambridge
                    University, Monash University and Newcastle University).
                    Intake24 was adapted for use in Australia (Monash University
                    and Newcastle University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 3 Closed-->
        <!--Item 4-->
        <v-timeline-item class="expentioniright second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2016</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion4"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Development of Intake24 for Denmark, Portugal and UAE
                  </span>
                  <div class="pl-3">
                    <span v-if="accordionOpen4">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >Further international versions of the system were developed
                    for Portugal and Denmark for use in the NoHoW study
                    including translation in addition to adding local foods and
                    portion images (Newcastle University, The Parker Institute
                    Denmark and the University of Lisbon). The system was
                    developed for use in the UAE Healthy Futures study including
                    implementing right to left text direction for Arabic script
                    (Newcastle University, New York University Abu Dhabi).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 4 Closed-->
        <!--Item 6-->
        <v-timeline-item class="expentionleft second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2015</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion5"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Development of Intake24 for New Zealand</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen5">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >Intake24 was adapted for use in New Zealand by including
                    regional foods linked to the local food composition database
                    and new portion size images. The system was used as an
                    interviewer administered tool in the LiLACS study with Māori
                    and non-Māori people aged 80 years and over (Newcastle
                    University and University of Auckland).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 6 Closed-->
        <!--Item 7-->
        <v-timeline-item class="expentioniright second-wrapper">
          <template v-slot:opposite>
            <span class="text-year"> 2014</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion6"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Field testing of Intake24 in the Scottish Health Survey
                    Population</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen6">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading"
                    >Intake24 was field tested in the Scottish Health Survey
                    population (n=230). Feedback on the system was predominantly
                    positive. Users reported the system to be easy and enjoyable
                    to use (88%), felt it accurately captured their diet (71%)
                    and did not take too long to complete (87%) (Newcastle
                    University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 7 Closed-->
        <!--Item 8-->
        <v-timeline-item class="expentionleft second-wrapper">
          <template v-slot:opposite>
            <span class="text-year"> 2012</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion7"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading"
                    >Development and relative validation of Intake24</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen7">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading">
                    Intake24 development was a four-stage iterative process of
                    user interaction and evaluation with the first stage testing
                    the SCRAN24 system. Feedback was collected using think
                    aloud, eye tracking, semi-structured interviews, and a
                    system usability scale. Intake24 was compared with
                    interviewer-led recalls in people aged 11-24 years(n=180)
                    mean intakes for energy and the macronutrients were very
                    similar (Newcastle University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 8 Closed-->
        <!--Item 9-->
        <v-timeline-item class="expentioniright second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2010</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion8"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Development of SCRAN24 - Prototype computer-based 24hr
                    recall</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen8">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading">
                    IPSAS was developed into a prototype self-completed dietary
                    recall system for use with children aged 11 years and over
                    (SCRAN). Focus groups used paper-based activities to
                    simulate a range of tasks within the software. Small scale
                    testing found the system was well received by the young
                    people and could be completed in a reasonable time
                    (Newcastle University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 9 Closed-->
        <!--Item 10-->
        <v-timeline-item class="expentionleft second-wrapper">
          <template v-slot:opposite>
            <span class="text-year">2007</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion9"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading">
                    Development and validation of IPSAS and the Young Person’s
                    Food Atlas</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen9">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading">
                    IPSAS and the Food photographs were further developed to
                    cover the top 100 foods (UK) and were tested with parents
                    and their children against weighed food diaries (n=300).
                    Mean estimates were within 5% of the weighed diary and
                    children of 11 years and over were as good as their parents
                    at estimating portion size (Newcastle University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 10 Closed-->
        <!--Item 11-->
        <v-timeline-item class="expentioniright second-wrapper-last">
          <template v-slot:opposite>
            <span class="text-year">2004</span>
          </template>
          <div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title
                  expand-icon="mdi-chevron-right"
                  collapse-icon="mdi-chevron-down"
                  class="icons-start"
                  @click="toggleAccordion10"
                >
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#EE672D"
                      />
                      <circle cx="9" cy="9" r="6" fill="#EE672D" />
                      <circle cx="9" cy="9" r="2" fill="white" />
                    </svg>
                  </span>
                  <span class="button-accordian-heading"
                    >Pilot study to develop portion size tools for use with
                    children.</span
                  >
                  <div class="pl-3">
                    <span v-if="accordionOpen10">
                      <svg
                        width="17"
                        height="9"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10L11.3435 1.66753C10.9563 1.29482 10.3437 1.29482 9.95651 1.66753L1.3 10"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    <span v-else>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
                          stroke="#EE672D"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <span class="button-accordian-subheading">
                    Three portion size tools were developed and tested with
                    children 4 to 16 years; Food models, food photographs and a
                    computer system (IPSAS). Children (n=200) were served 20
                    foods and estimated the amount eaten using the tools. Food
                    photographs and IPSAS showed good accuracy with precision
                    increasing with age (Newcastle University).
                  </span>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-timeline-item>
        <!--Item 11 Closed-->
      </v-timeline>
    </v-container>
  </div>
</template>

<script lang="ts">
// import { PropType } from 'vue';
// import { useDisplay } from 'vuetify/lib/framework.mjs';
// const display = useDisplay();
export default {
  data() {
    return {
      accordionOpen: false,
      accordionOpen1: false,
      accordionOpen2: false,
      accordionOpen3: false,
      accordionOpen4: false,
      accordionOpen5: false,
      accordionOpen6: false,
      accordionOpen7: false,
      accordionOpen8: false,
      accordionOpen9: false,
      accordionOpen10: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.accordionOpen = !this.accordionOpen;
    },
    toggleAccordion1() {
      this.accordionOpen1 = !this.accordionOpen1;
    },
    toggleAccordion2() {
      this.accordionOpen2 = !this.accordionOpen2;
    },
    toggleAccordion3() {
      this.accordionOpen3 = !this.accordionOpen3;
    },
    toggleAccordion4() {
      this.accordionOpen4 = !this.accordionOpen4;
    },
    toggleAccordion5() {
      this.accordionOpen5 = !this.accordionOpen5;
    },
    toggleAccordion6() {
      this.accordionOpen6 = !this.accordionOpen6;
    },
    toggleAccordion7() {
      this.accordionOpen7 = !this.accordionOpen7;
    },
    toggleAccordion8() {
      this.accordionOpen8 = !this.accordionOpen8;
    },
    toggleAccordion9() {
      this.accordionOpen9 = !this.accordionOpen9;
    },
    toggleAccordion10() {
      this.accordionOpen10 = !this.accordionOpen10;
    },
  },
};
</script>

<style>
.icons-start {
  display: flex;
  justify-content: start;
}

.time-line-class .v-field__input {
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: var(--v-field-input-min-height);
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  width: 100%;
  --v-field-input-min-height: max(
    var(--v-input-control-height, 56px),
    1.625rem + var(--v-field-input-padding-top) +
      var(--v-field-input-padding-bottom)
  );
}

.time-line-class .second-wrapper-last {
  padding-bottom: 200px;
}

.time-line-class
  .v-timeline--vertical.v-timeline--align-center
  .v-timeline-divider {
  justify-content: start !important;
}
.time-line-class .button-accordian-heading {
  font-size: 13px !important;
  color: #060606 !important;
  line-height: 20px;
  padding-left: 8px;
  font-weight: 500 !important;
}

.time-line-class .button-accordian-subheading {
  font-size: 12px !important;
  color: #060606 !important;
  font-weight: 400 !important;
}
.time-line-class .v-expansion-panels {
  max-width: 400px !important;
}

.time-line-class
  .v-timeline--vertical.v-timeline
  .v-timeline-item:nth-child(2n)
  .v-timeline-item__body {
  padding-bottom: 40px;
}

.time-line-class
  .v-timeline--vertical.v-timeline
  .v-timeline-item:nth-child(2n + 1)
  .v-timeline-item__body {
  padding-bottom: 40px;
}

.time-line-class .v-timeline-divider__after {
  background-color: #ee672d !important;
}

.time-line-class .v-timeline-divider__before {
  background-color: #ee672d !important;
}

.time-line-class .v-timeline .v-timeline-divider__inner-dot {
  background: #fff !important;
}

.time-line-class
  .v-expansion-panel-title--active
  > .v-expansion-panel-title__overlay,
.v-expansion-panel-title[aria-haspopup="menu"][aria-expanded="true"]
  > .v-expansion-panel-title__overlay {
  opacity: 0 !important;
}
.time-line-class
  .v-timeline-divider__dot--size-default
  .v-timeline-divider__inner-dot {
  width: 12px !important;
  height: 12px !important;
  background: #ee672d !important;
}
.time-line-class .v-timeline-divider__dot--size-default {
  width: 12px !important;
  height: 12px !important;
  z-index: 999;
  position: relative;
}

.time-line-class
  i.mdi-chevron-right.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default {
  color: #ee672d !important;
}
.time-line-class
  i.mdi-chevron-down.mdi.v-icon.notranslate.v-theme--light.v-icon--size-default {
  color: #ee672d !important;
}

.time-line-class
  .v-timeline-divider__dot.v-timeline-divider__dot--size-default {
  position: relative;
}
.time-line-class
  .expentioniright
  .v-timeline-divider__dot.v-timeline-divider__dot--size-default:before {
  content: "";
  position: absolute;
  width: 26px;
  background-color: #ee672d;
  border-right: 1px solid #ee672d;
  height: 2px;
  left: 10px;
}
.time-line-class
  .v-timeline-divider__dot.v-timeline-divider__dot--size-default {
  position: relative;
}
.time-line-class
  .expentionleft
  .v-timeline-divider__dot.v-timeline-divider__dot--size-default:before {
  content: "";
  position: absolute;
  width: 26px;
  background-color: #ee672d;
  border-right: 1px solid #ee672d;
  height: 2px;
  right: 10px;
}

.time-line-class .text-year {
  font-size: 14px;
  text-align: start;
  font-weight: 500;
}

.time-line-class .v-timeline--vertical.v-timeline--align-center {
  align-items: start !important;
}

@media only screen and (min-width: 400px) {
  .time-line-class .text-year {
    font-size: 18px;
    text-align: start;
    font-weight: 600;
  }
  .time-line-class .button-accordian-heading {
    font-size: 15px !important;
    color: #060606 !important;
    line-height: 20px;
    font-weight: 500 !important;
  }

  .time-line-class .button-accordian-subheading {
    font-size: 14px !important;
    color: #060606 !important;
    font-weight: 400 !important;
  }
}

@media only screen and (min-width: 800px) {
  .time-line-class .text-year {
    font-size: 18px;
    text-align: start;
    font-weight: 600;
  }

  .time-line-class .button-accordian-heading {
    font-size: 16px !important;
    color: #060606 !important;
    line-height: 20px;
    font-weight: 500 !important;
  }

  .time-line-class .button-accordian-subheading {
    font-size: 16px !important;
    color: #060606 !important;
    font-weight: 400 !important;
  }
}

.time-line-class .img-top {
  margin-top: 60px;
}

.time-line-class .custom-text-field {
  margin-bottom: 15px;
  height: 55px;
  left: 228px;
  outline: none !important;
  box-shadow: none !important;
  top: 558px;
  background: #f9f9f9;
  padding-left: 20px;
  border: 1px solid #ececec;
  border-radius: 10px;
}
.time-line-class .text-field {
  border-radius: 10px;
}
.time-line-class .first-name-text {
  margin: auto;
  border-radius: 20px;
}
.time-line-class .sub-heading {
  text-align: center;
  margin-bottom: 70px;
  margin: auto;
  color: #060606;
  font-size: 16px;
  font-weight: 400;
}
.time-line-class .form-wrapper {
  background: #ffffff;
  box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
}
.time-line-class .wrapper {
  margin-top: 132px;
  margin-bottom: 98px;
}
.time-line-class .heading {
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  line-height: 1.1em;
}
.time-line-class .btn {
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
  .time-line-class .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }
  .time-line-class .first-name-text {
    width: 420px;
    margin: auto;
    border-radius: 20px;
  }
  .time-line-class .custom-text-field {
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
  .time-line-class img {
    width: 400px;
  }
  .time-line-class .sub-heading {
    text-align: center;
    width: 472px;
    margin-bottom: 70px;
    margin: auto;
    color: #060606;
    font-size: 20px;
    font-weight: 400;
  }
  .time-line-class .btn {
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
  .time-line-class .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
  }
}
@media only screen and (min-width: 960px) {
  .time-line-class .wrapper {
    width: 1000px;
  }
  .time-line-class .first-name-text {
    width: 420px;
    margin: auto;
    border-radius: 20px;
  }
  .time-line-class .custom-text-field {
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
  .time-line-class .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }
  .time-line-class img {
    width: 400px;
  }
  .time-line-class .sub-heading {
    text-align: center;
    width: 472px;
    margin-bottom: 70px;
    margin: auto;
    color: #060606;
    font-size: 20px;
    font-weight: 400;
  }
  .time-line-class .btn {
    height: 50px;
    font-size: 20px;
  }
  .time-line-class .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
    margin: auto;
  }
  .time-line-class .img-top {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 1280px) {
  .time-line-class .wrapper {
    width: 1300px;
  }
  .time-line-class .first-name-text {
    width: 420px;
    margin: auto;
    border-radius: 20px;
  }
  .time-line-class .custom-text-field {
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
  .time-line-class .heading {
    font-size: 40px;
    padding-top: 96px;
    font-weight: semibold;
    margin: auto;
    color: #060606;
    inline-size: 500px;
    line-height: 1.1em;
  }
  .time-line-class img {
    width: 500px;
  }
  .time-line-class .btn {
    height: 50px;
    font-size: 20px;
  }
  .time-line-class .sub-heading {
    text-align: center;
    width: 472px;
    margin-bottom: 70px;
    margin: auto;
    color: #060606;
    font-size: 20px;
    font-weight: 400;
  }
  .time-line-class .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
    margin: auto;
  }
  .time-line-class .img-top {
    margin-top: 0px;
  }
}
</style>
