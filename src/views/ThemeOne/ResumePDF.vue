<template>
  <div class="pdf-container">
    <div class="flex flex-col sm:flex-row justify-between items-center my-4">
      <h1 class="text-xl font-bold">My Resume</h1>
      <a
        :href="pdfUrl"
        download
        class="dark:text-[#FA5252] text-[#FA5252] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] router-link-exact-active cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center w-40 h-10 rounded-[10px] bg-[#F3F6F6] mx-0 dark:text-[#A6A6A6] justify-center flex-col dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
      >
        Download PDF
      </a>
    </div>

    <div class="w-full sm:w-1/2 md:w-full">
      <div class="h-[60vh] sm:h-[80vh] overflow-auto border rounded-md shadow">
        <iframe
          :key="iframeKey"
          :src="pdfUrl"
          width="100%"
          height="100%"
          class="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pdfUrl = 'data/resume.pdf'
const iframeKey = ref(Date.now())

// Optional: debounce resize for performance
let resizeTimeout
const handleResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    iframeKey.value = Date.now()
  }, 200)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.pdf-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
