<template>
  <aos-vue animation="fade-in" :once="true" :offset="-400" style="padding-bottom: 1px;">
    <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="lg:py-12">
        <h2 class="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
        <div class="my-masonry-grid">
          <div class="my-masonry-grid_column">
            <div
              v-for="blog in blogLeft"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425] "
              :class="`${getColor()} dark:bg-transparent`"
            >
            <div class="overflow-hidden rounded-lg">
              <a :href="blog.link" target="_blank">
                <img
                  class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                  :src="blog.image"
                  alt="blog"
                />
              </a>
            </div>
            <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
              <span>{{ blog.date }}</span>
            </div>
            <a :href="blog.link" target="_blank">
              <h3
                class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
              >
                {{ blog.title }}
              </h3>
            </a>
            </div>
          </div>
          <div class="my-masonry-grid_column">
            <div
              v-for="blog in blogRight"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
            <div class="overflow-hidden rounded-lg">
              <a :href="blog.link" target="_blank">
                <img
                  class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                  :src="blog.image"
                  alt="blog"
                />
              </a>
            </div>
            <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
              <span>{{ blog.date }}</span>
            </div>
            <a :href="blog.link" target="_blank">
              <h3
                class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
              >
                {{ blog.title }}
              </h3>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script>
import blogs from "@/js/blogs";
import colors from "@/js/color";

export default {
  computed: {
    blogLeft() {
      return blogs.filter((v, i) => i % 2 === 0);
    },
    blogRight() {
      return blogs.filter((v, i) => i % 2 === 1);
    },
  },
  methods: {
    getColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>
