<template>
  <div>
    <div
      class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
    >
      <img
        src="/images/profile.png"
        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        alt=""
      />
      <div class="pt-[100px] pb-8">
        <h1 class="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          {{ profile.name }}
        </h1>
        <h3
          class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"
        >
        {{ profile.profession }}
        </h3>
        <div class="p-4 lg:p-7 rounded-2xl bg-[#F3F6F6] dark:bg-[#1D1D1D]">
          <div
            class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5"
          >
            <iconGithub />
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Github</p>
              <p class="dark:text-white break-all">
                <a
                  class="hover:text-[#FA5252] duration-300 transition"
                  :href="`https://github.com/${profile.github}`"
                  >{{ profile.github }}</a
                >
              </p>
            </div>
          </div>
          <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
            <iconLinkedin />
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">LinkedIn</p>
              <a
                  class="hover:text-[#FA5252] duration-300 transition"
                  :href="`${profile.linkedin.link}`"
                  >{{ profile.linkedin.user }}</a
                >
            </div>
          </div>
          <div
            class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5"
          >
            <iconEmail />
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
              <p class="dark:text-white break-all">
                <a
                  class="hover:text-[#FA5252] duration-300 transition"
                  :href="`mailto:${profile.email}`"
                  >{{ profile.email }}</a
                >
              </p>
            </div>
          </div>
          <div
            class="flex py-2.5"
          >
            <iconLocation />
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
              <p class="dark:text-white break-all">{{ profile.location }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/js/profile";
import iconGithub from "./icons/social/IconGithub.vue";
import iconEmail from "./icons/social/IconEmail.vue";
import iconLinkedin from "./icons/social/IconLinkedin.vue";
import iconLocation from "./icons/social/IconLocation.vue";

export default {
  components: { iconGithub, iconEmail, iconLinkedin, iconLocation },
  computed: {
    profile() {
      return profile;
    }
  }
}
</script>