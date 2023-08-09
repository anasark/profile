<template>
  <aos-vue
    animation="fade-in"
    :once="true"
    :offset="-400"
    style="padding-bottom: 1px"
  >
    <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="lg:py-12">
        <h2 class="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>
        <ul
          class="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12"
          v-if="getCategory"
        >
          <li :class="{ 'text-[#FA5252]': filtereKey === null }" class="mr-4 md:mx-4" @click="filterPorto()">All</li>
          
          <li
            v-for="cat in getCategory"
            :class="{ 'text-[#FA5252]': filtereKey === cat }"
            class="mr-4 md:mx-4" @click="filterPorto(cat)">
              {{  cat  }}
          </li>
        </ul>
        <div class="my-masonry-grid">
          <div class="my-masonry-grid_column hidden lg:block">
            <div
              v-for="porto in portoLeft"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="porto" @detail-porto="detailPorto(porto)"/>
            </div>
          </div>
          <div class="my-masonry-grid_column hidden lg:block">
            <div
              v-for="porto in portoRight"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="porto" @detail-porto="detailPorto(porto)"/>
            </div>
          </div>
          <div class="my-masonry-grid_column block lg:hidden">
            <div
              v-for="port in porto"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="port" @detail-porto="detailPorto(port)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>

  <modal 
    v-if="project_name != null"
    v-bind:project_name="project_name"
    v-bind:project="project"
    v-bind:framework="framework"
    v-bind:name="name"
    v-bind:link="link"
    v-bind:images="images"
    v-bind:description="description"
    @close-modal="closePorto"
  />
</template>

<script>
import modal from "@/components/ThemeOne/PortfolioModal.vue";
import list from "@/components/ThemeOne/PortfolioList.vue";
import colors from "@/js/color";
import { mapGetters } from "vuex";

export default {
  components: { modal, list },
  computed: {
    ...mapGetters({
      portfolio: "getPortfolio",
    }),
    portoLeft() {
      if (this.porto) {
        return this.porto.filter((v, i) => i % 2 === 0);
      }
    },
    portoRight() {
      if (this.porto) {
        return this.porto.filter((v, i) => i % 2 === 1);
      }
    },
    getCategory() {
      let cat = [];
      if (this.portfolio) {
        let object = this.portfolio
        for (var index in object) { 
          var keys = object[index]?.framework;
          let key = keys.split(", "); 
          for (var i in key) {
            if (!cat.includes(key[i])) {
              cat.push(key[i])
            }
          }
        }
      } 

      return cat
    }
  },
  watch: {
    filtereKey: {
      handler() {
        if (this.filtereKey !== null) {
          this.porto = this.portfolio.filter((v, i) => v.framework.includes(this.filtereKey))
        } else {
          this.porto = this.portfolio
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      porto: null,
      filtereKey: null,
      project_name: null,
      project: null,
      framework: null,
      name: null,
      link: null,
      images: null,
      description: null,
    };
  },
  methods: {
    filterPorto(key = null) {
      this.filtereKey = key;
    },
    getColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    },
    detailPorto(porto) {
      this.project_name = porto.type
      this.project = porto.project
      this.framework = porto.framework
      this.name = porto.name
      this.link = porto.url
      this.images = porto.images
      this.description = porto.description
    },
    closePorto() {
      this.project_name = null
      this.project = null
      this.framework = null
      this.name = null
      this.link = null
      this.images = null
      this.description = null
    }
  },
  mounted() {
    if (Object.keys(this.portfolio).length <= 0) {
      this.$store.dispatch("fetchPortfolio");
    }
    setTimeout(() => {this.porto = this.portfolio}, 500)
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
