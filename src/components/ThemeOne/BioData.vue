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
            <span
              class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                ></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
              <p class="dark:text-white break-all">
                <a
                  class="hover:text-[#FA5252] duration-300 transition"
                  :href="`tel:${profile.number}`"
                  >{{ profile.number }}</a
                >
              </p>
            </div>
          </div>
          <div
            class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5"
          >
            <span
              class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
                ></path>
              </svg>
            </span>
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
            class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5"
          >
            <span
              class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
              <p class="dark:text-white break-all">{{ profile.location }}</p>
            </div>
          </div>
          <div class="flex py-2.5">
            <span class="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#0072b1] shadow-md">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </span>
            <div class="text-left ml-2.5">
              <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">LinkedIn</p>
              <a
                  class="hover:text-[#FA5252] duration-300 transition"
                  :href="`mailto:${profile.linkedin.link}`"
                  >{{ profile.linkedin.user }}</a
                >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/js/profile";
export default {
  computed: {
    profile() {
      return profile;
    }
  }
}
</script>