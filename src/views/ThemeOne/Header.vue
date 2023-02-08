<script setup>
import Menu from "@/components/ThemeOne/Menu.vue";
</script>

<template>
  <div
    class="container w-full bg-[#ebf7ff] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px] aos-init aos-animate"
    data-aos="fade"
  >
    <div class="w-full flex justify-between lg:justify-end px-4">
      <span
          @click="toggleMenuMobile"
          :class="{
            'lg:opacity-0 lg:invisible visible opacity-100': menu_mobile_show,
            'lg:hidden dark:text-white': !menu_mobile_show,
          }"
          class="bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3"
        >
          <svg
            v-if="!menu_mobile_show"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
            ></path>
          </svg>
          <svg
            v-else
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            ></path>
          </svg>
        </span>
      <div class="flex items-center ">
        <span
          @click="toggleDarkMode"
          :class="{
            'bg-[#4D4D4D]': dark_mode,
            'bg-white text-black hover:text-white': !dark_mode,
          }"
          class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer"
        >
          <svg
            v-if="dark_mode"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white text-3xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-else
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-3xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>

  <nav
    :class="{ hidden: !menu_mobile_show, 'block lg:hidden': menu_mobile_show }"
    ref="menuMobile"
  >
    <ul
      :class="{
        'flex my-12': !menu_mobile_show,
        'block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]':
          menu_mobile_show,
      }"
    >
      <Menu v-bind:is_mobile="true" @toggle-menu-mobile="toggleMenuMobile"/>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      dark_mode: "darkMode",
    }),
  },
  data() {
    return {
      menu_mobile_show: false,
    };
  },
  methods: {
    toggleDarkMode() {
      localStorage.setItem("dark_mode", !this.dark_mode);
      this.$store.commit("toggleDarkMode");
      this.addClassDark();
    },
    toggleMenuMobile() {
      this.menu_mobile_show = !this.menu_mobile_show;
    },
    addClassDark() {
      if (this.dark_mode) {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    },
  },
  mounted() {
    let darkMode = localStorage.getItem("dark_mode");
    if (typeof darkMode === "undefined" || darkMode === null) {
      localStorage.setItem("dark_mode", this.dark_mode);
    } else {
      this.$store.commit("setDarkMode", darkMode);
    }
    this.addClassDark();
  },
};
</script>
