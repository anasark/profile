<template>
  <div class="pdf-container">
    <h1 class="text-xl font-bold mb-4">My Resume</h1>
    <iframe
      :src="pdfUrl"
      width="100%"
      height="800px"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div class="mt-4 justify-items-end">
      <a :href="pdfUrl" download class=" dark:text-[#FA5252] text-[#FA5252] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] router-link-exact-active cursor-pointer transition-all duration-300 ease-in-out font-poppins text-gray-lite font-medium flex text-xtiny items-center w-40 h-10 rounded-[10px] bg-[#F3F6F6] mx-0 dark:text-[#A6A6A6] justify-center flex-col dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
        Download PDF
      </a>
    </div>
  </div>
</template>

<script setup>
const pdfUrl = 'data/resume.pdf'
</script>

<style scoped>
.pdf-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
