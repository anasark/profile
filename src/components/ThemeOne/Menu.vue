<template>
  <RouterLink
    @click="clickHandle"
    to="/"
    :class="{
      [mobile_menu_class]: is_mobile,
      [dekstop_menu_class]: !is_mobile,
    }"
    class="cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center"
  >
    <IconHome />
    Home
  </RouterLink>

  <RouterLink
    @click="clickHandle"
    to="/resume"
    :class="{
      [mobile_menu_class]: is_mobile,
      [dekstop_menu_class]: !is_mobile,
    }"
    class="cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center"
  >
    <IconResume />
    Resume
  </RouterLink>

  <RouterLink
    @click="clickHandle"
    to="/portfolio"
    class="cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center"
    :class="{
      [mobile_menu_class]: is_mobile,
      [dekstop_menu_class]: !is_mobile,
    }"
  >
    <IconPortfolio />
    Portfolio
  </RouterLink>

  <RouterLink
    @click="clickHandle"
    to="/blogs"
    class="cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center"
    :class="{
      [mobile_menu_class]: is_mobile,
      [dekstop_menu_class]: !is_mobile,
    }"
  >
    <IconBlog />
    Blog
  </RouterLink>
</template>

<script>
import IconHome from "../icons/menu/IconHome.vue";
import IconResume from "../icons/menu/IconResume.vue";
import IconPortfolio from "../icons/menu/IconPortfolio.vue";
import IconBlog from "../icons/menu/IconBlog.vue";

export default {
  name: "Menu",
  props: ["is_mobile"],
  data() {
    return {
      dekstop_menu_class:
        "w-full h-20 rounded-[10px] bg-[#F3F6F6] mx-2.5 dark:text-[#A6A6A6] justify-center flex-col dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]",
      mobile_menu_class:
        "pl-4 py-2.5 md:px-4 xl:px-5 dark:text-white dark:hover:text-[#FA5252] hover:text-[#FA5252] is-mobile",
    };
  },
  components: { IconResume, IconHome, IconPortfolio, IconBlog },
  methods: {
    clickHandle() {
      if (this.is_mobile) {
        this.$emit("toggle-menu-mobile");
      }
    },
  },
};
</script>

<style scoped>
span > img {
  height: 1em;
  width: 1em;
}
.is-mobile > span {
  margin-right: 0.5rem;
}
.router-link-exact-active.is-mobile {
  color: #fa5252;
}
</style>
