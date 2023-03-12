<template>
  <aos-vue animation="fade-in" :once="true" :offset="-400">
    <div class="container px-4 sm:px-5 md:px-10 lg:px-14">
      <div class="py-12">
        <h2 class="after-effect after:left-44">Resume</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"
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
                    d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-5xl dark:text-white font-medium">Education</h4>
            </div>
            <div
              v-for="education in resume.education"
              class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >{{ education.date }}</span
              >
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
                    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-5xl dark:text-white font-medium">Experience</h4>
            </div>
            <div
              v-for="experience in resume.experience"
              class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >{{ experience.date }}</span
              >
              <h3 class="text-xl dark:text-white">{{ experience.position }}</h3>
              <p class="dark:text-[#b7b7b7]">{{ experience.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="col-span-1" v-if="resume.skill">
          <h4 class="text-5xl dark:text-white font-medium mb-6">
            Working Skills
          </h4>
          <div class="mb-7" v-for="skill in resume.skill">
            <div class="flex justify-between py-1">
              <span
                class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]"
                >{{ skill.name }}</span
              ><span
                class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]"
                >{{ skill.percent }}%</span
              >
            </div>
            <svg
              class="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                class="rc-progress-line-trail"
                d="M 0.5,0.5
          L 99.5,0.5"
                stroke-linecap="round"
                stroke="#D9D9D9"
                stroke-width="1"
                fill-opacity="0"
              ></path>
              <path
                class="rc-progress-line-path"
                d="M 0.5,0.5
          L 99.5,0.5"
                stroke-linecap="round"
                :stroke="getColors()"
                stroke-width="1"
                fill-opacity="0"
                :style="`
                  stroke-dasharray: ${skill.percent}px, 100px;
                  stroke-dashoffset: 0px;
                  transition: stroke-dashoffset 0.3s ease 0s,
                    stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;
                `"
              ></path>
            </svg>
          </div>
        </div>
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
