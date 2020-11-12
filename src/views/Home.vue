<template>
  <div id="home">
    <SectionAddToSlack></SectionAddToSlack>
    <SectionFeatureSet></SectionFeatureSet>
    <SectionFAQ></SectionFAQ>
    <section-feedback></section-feedback>
    <SectionContactForm></SectionContactForm>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionAddToSlack from "@/components/section-add-to-slack.vue";
import SectionContactForm from "@/components/section-contact-form.vue";
import SectionFeatureSet from "@/components/section-feature-set.vue";
import SectionFAQ from "@/components/section-faq.vue";
import SectionFeedback from "@/components/section-feedback.vue";

export default {
  name: "home",
  components: {
    SectionAddToSlack,
    SectionContactForm,
    SectionFeatureSet,
    SectionFAQ,
    SectionFeedback
  }
};
</script>
