<template>
  <div class="">
    <div
      class=""
      style="
        position: fixed;
        inset: 0px;
        background-color: rgba(0,0,0,.8);
      "
    >
      <div
        class="outline-none flex items-center p-4 md:p-8 rounded-2xl my-8"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg"
        >
          <div class="overflow-y-scroll max-h-[80vh] w-full no-scrollbar">
            <IconClose @click="closeModal" />
            <h2
              v-if="name == 'Niagahoster'"
              class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold"
            >
              Niagahoster
            </h2>
            <h2
              v-else
              class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold"
            >
              {{ project_name }} Project
            </h2>
            <div class="grid grid-cols-1 my-6">
              <div class="space-y-2" v-if="name != 'Niagahoster'">
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                >
                  <IconName />
                  <span class="font-medium">Name :</span>&nbsp;{{ name }}
                </p>
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center text-[15px] sm:text-lg"
                >
                  <IconProject />
                  <span class="font-medium">Project :</span>&nbsp; {{ project }}
                </p>
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center text-[15px] sm:text-lg"
                >
                  <IconFramework />
                  <span class="font-medium">Framework :</span>&nbsp;{{ framework }}
                </p>
              </div>
              <!-- hidden -->
              <div class="space-y-2 hidden">
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                >
                  <IconName />
                  Name :&nbsp;<span class="font-medium">{{ name }}</span>
                </p>
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center text-[15px] sm:text-lg"
                >
                  <IconLink />
                  Link :&nbsp;<span
                    class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                    ><a
                      :href="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      >{{ link }}</a
                    ></span
                  >
                </p>
              </div>
              <!-- end hidden -->
            </div>
            <div class="my-8" v-if="description && name != 'Niagahoster'">
              <p class="mt-4 font-medium">Descriptions:</p>
              <p
                v-for="desc in description"
                class="dark:text-white text-2line font-normal text-[15px] sm:text-sm mt-2"
              >
                <span class="ml-4">{{ desc }}</span>
              </p>
            </div>
            <img
              v-for="img in images"
              alt="blog details image"
              :src="img"
              width="620"
              decoding="async"
              data-nimg="1"
              class="w-full h-auto object-cover rounded-xl mt-6 border-[1px] border-[##9ca3af]"
              loading="lazy"
              style="color: transparent"
            />
            <div v-if="name == 'Niagahoster'" class="mt-5">
              <p class="mt-4 font-medium">Descriptions:</p>
              <p
                v-for="desc in description"
                class="dark:text-white text-2line font-normal text-[15px] sm:text-sm mt-3"
              >
                <span class="ml-4">{{ desc }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from "./icons/portfolio/IconClose.vue";
import IconProject from "./icons/portfolio/IconProject.vue";
import IconFramework from "./icons/portfolio/IconFramework.vue";
import IconName from "./icons/portfolio/IconName.vue";
import IconLink from "./icons/portfolio/IconLink.vue";

export default {
  components: { IconClose, IconProject, IconFramework, IconName, IconLink },
  name: 'PortfolioModal',
  props: ['project_name', 'project', 'framework', 'name', 'link', 'images', 'description'],
  computed: {
    longText() {
        return (this.name.length > 20 || this.link.lenth > 20)
    }
  },
  methods: {
    closeModal() {
        this.$emit("close-modal");
    },
  }
};
</script>

<style scoped>
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
.text-4xl {
    font-size: 1.5625rem;
}
.small-font {
    font-size: .9rem;
    line-height: 1.75rem;
}
</style>
