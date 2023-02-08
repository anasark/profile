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
          <div class="overflow-y-scroll max-h-[80vh] no-scrollbar">
            <IconClose @click="closeModal" />
            <h2
              class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold"
            >
              {{ project_name }} Project
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 my-6">
              <div class="space-y-2">
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center text-[15px] sm:text-lg"
                >
                  <IconProject />
                  Project :&nbsp;
                  <span class="font-medium"> {{ project }}</span>
                </p>
                <p
                :class="{'small-font': longText}"
                  class="dark:text-white flex items-center text-[15px] sm:text-lg"
                >
                  <IconFramework />
                  Framework :&nbsp;<span class="font-medium">{{
                    framework
                  }}</span>
                </p>
              </div>
              <div class="space-y-2">
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
            </div>
            <p
              class="dark:text-white text-2line font-normal text-[15px] sm:text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              placeat magnam possimus iusto blanditiis pariatur labore explicabo
              quo repellat hic dolorum numquam asperiores, voluptatum fugiat
              reiciendis aspernatur, non, odio aperiam voluptas ex tempora
              vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum
              dolore natus, vel numquam accusamus. Nostrum eligendi recusandae
              qui tempore deserunt!
            </p>
            <img
              alt="blog details image"
              :src="'/images/portfolio/' + code + '/1.jpeg'"
              width="620"
              height="420"
              decoding="async"
              data-nimg="1"
              class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6 border-[1px] border-[##9ca3af]"
              loading="lazy"
              style="color: transparent"
            />
            <img
              alt="blog details image"
              :src="'/images/portfolio/' + code + '/2.jpeg'"
              width="620"
              height="420"
              decoding="async"
              data-nimg="1"
              class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6 border-[1px] border-[##9ca3af]"
              loading="lazy"
              style="color: transparent"
            />
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
  props: ['project_name', 'project', 'framework', 'name', 'link', 'code'],
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