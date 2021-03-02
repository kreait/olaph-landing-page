<template>
  <div id="home">
    <SectionAddToSlack></SectionAddToSlack>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionAddToSlack from "@/components/section-add-to-slack.vue";

export default {
  name: "home",
  components: {
    SectionAddToSlack
  }
};
</script>
