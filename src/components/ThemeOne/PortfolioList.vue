<template>
  <div class="overflow-hidden rounded-lg">
    <img
      @click="detailPorto(porto)"
      alt="{{ porto.name }}"
      :src="porto.images[0]"
      width="300"
      height="300"
      decoding="async"
      data-nimg="1"
      class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
      style="color: transparent"
    />
  </div>
  <span
    class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
    >{{ porto.framework }}</span
  >
  <h2
    @click="detailPorto(porto)"
    class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
  >
    {{ porto.name }}
  </h2>
</template>

<script>
export default {
  props: [ 'porto' ],
  emits: [ 'detailPorto' ],
  methods: {
    detailPorto() {
      this.$emit("detail-porto");
    }
  }
};
</script>
