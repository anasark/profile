<template>
  <aos-vue animation="fade-in" :once="true" :offset="-400">
    <div class="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div class="py-12">
        <h2 class="after-effect after:left-44">Resume</h2>
        <div
          class="mt-[30px]"
        >
          <div v-if="resume.education">
            <div class="flex items-center space-x-2 mb-4">
              <div class="text-6xl text-[#F95054]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-5xl dark:text-white font-medium">Education</h4>
            </div>
            <div
              v-for="education in resume.education"
              class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              :class="`${getColor()} dark:bg-[#1D1D1D]`"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >{{ education.date }}</span
              >
              <p class="font-medium">{{ education.level }}</p>
              <h3 class="text-xl dark:text-white">{{ education.school }}</h3>
              <p class="dark:text-[#b7b7b7]">{{ education.location }}</p>
            </div>
          </div>
          <div v-if="resume.experience">
            <div class="flex items-center space-x-2 mb-4">
              <div class="text-6xl text-[#F95054]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-5xl dark:text-white font-medium">Experience</h4>
            </div>
            <div
              v-for="experience in resume.experience"
              class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              :class="`${getColor()} dark:bg-[#1D1D1D]`"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >{{ experience.date }}</span
              >
              <h3 class="text-xl dark:text-white">{{ experience.position }}</h3>
              <p class="dark:text-[#b7b7b7] font-medium">{{ experience.company }}</p>
              <p class="dark:text-[#b7b7b7]">{{ experience.location }}</p>
              <div v-if="experience.description">
                <div class="pt-2 rounded-lg italic">
                  <p>Descriptions:</p>
                  <p v-for="decs in experience.description" class="m-2 pl-2">- {{ decs }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="resume.skills">
            <div class="flex items-center space-x-2 mb-4">
              <div class="text-6xl text-[#F95054]">
                <svg
                  mlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="currentColor"
                  height="1em"
                  width="1em">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h4 class="text-5xl dark:text-white font-medium">Skills & Tools</h4>
            </div>
            <div
              v-for="value, key in resume.skills"
              class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              :class="`${getColor()} dark:bg-[#1D1D1D]`"
            >
              <div class="pt-2 rounded-lg">
                <p class="font-medium">{{ key }}:</p>
                <p class="m-2 pl-2">{{ value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20 lg:rounded-b-2xl"
    >
      <div class="">
        <div class="col-span-1" v-if="resume.knowledge">
          <h4 class="text-5xl dark:text-white font-medium mb-8">Knowledges</h4>
          <div class="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
            <button v-for="knowledge in resume.knowledge" class="resume-btn text-[15px]">
              {{ knowledge }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script>
import color from "@/js/color";
import colors from "@/js/color-strong";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      resume: "getResume",
    })
  },
  methods: {
    getColor() {
      return color[Math.floor(Math.random()*color.length)]
    },
    getColors() {
      return colors[Math.floor(Math.random()*colors.length)]
        .replace('bg-[', '')
        .replace(']', '')
    }
  },
  mounted() {
    if (Object.keys(this.resume).length <= 0) {
      this.$store.dispatch("fetchResume");
    }
  }
}

</script>
