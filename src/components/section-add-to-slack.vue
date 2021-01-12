<template>
  <section class="section has-background-white is-fullheight hero">
    <div class="content columns is-vcentered hero-body">
      <div class="column is-4 is-offset-2 hero-width">
        <img class="is-hidden-tablet" src="@/assets/olaph_owl.svg" width="150"/>
        <p class="is-size-2">This is <strong>Olaph</strong>.<br/>He wants to support your team with their
          stand-ups.</p>
        <p class="is-size-6 has-background-danger has-text-white p-3">
          Sadly we have to inform you that Olaph is being shut down :( We are in the process of open sourcing
          the project though, so feel free to follow or contribute under
          <a class="has-text-white has-text-weight-bold"
             href="https://github.com/olaph-io">https://github.com/olaph-io</a>
        </p>
      </div>
      <div class="column is-4 is-offset-1 is-hidden-mobile">
        <img src="@/assets/olaph_owl.svg" width="350"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionAddToSlack",
  data() {
    return {
      url: this.$config.addToSlackUrl
    }
  }
};

</script>

<style lang="scss" scoped>
.section {
  margin-top: -6em;
}

.hero-body {
  margin-top: 6em;
}

@media all and (min-width: 768px) {
  .hero-width {
    max-width: 500px;
  }
}
</style>
