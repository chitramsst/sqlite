<template lang="">
  <div class="w-full mx-auto flex flex-row bg-[#1d1e22] h-screen text-[#d4d4dc]">
      <div class="h-full min-h-[810px] rounded-3xl p-10 w-full">
        <router-view />
      </div>
    </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      sidebarVisibility: true,
    };
  },
  methods: {
     logout(){
      localStorage.setItem("user",null);
      this.$router.push({
        name: 'login'
      })
     }
  },
  watch: {
    sidebarVisibility() {
      this.sidebarVisibility = this.sidebarVisibility;
    },
  },
};
</script>
<style lang=""></style>
