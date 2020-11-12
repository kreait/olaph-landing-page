<template>
  <section class="section has-background-white">
    <div class="container">
      <div class="is-centered">
        <div class="content">
          <h2 class="is-1 title">Contact Us</h2>
          <div class="field has-addons">
            <div class="control has-icons-left ">
              <input
                class="input is-medium"
                type="text"
                placeholder="Find a repository"
                value="hello@olaph.io"
                readonly
              >
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <div class="control">
              <a
                href="mailto:hello@olaph.io"
                class="button is-link is-medium"
                title="Open Mail Client"
              >
                <span class="icon is-small is-left">
                  <i class="fas fa-external-link-alt"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "SectionContactForm"
};
</script>

<style lang="scss" scoped>
.field {
  width: 250px;
  margin: auto;
}
</style>
