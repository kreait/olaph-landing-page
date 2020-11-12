<template>
  <section class="section has-background-link">
    <div class="container">
      <div class="content">
        <h2 class="title is-1 has-text-white">How Olaph works</h2>
        <div class="columns is-variable is-8 m-t-xl is-vcentered">
          <div class="column is-6">
            <img
              class="has-shadow round-edges"
              src="../assets/olaph-create.gif"
            />
          </div>
          <div class="column is-6">
            <h3
              class="title is-2 has-text-white"
              style="font-family: 'Fredoka One', cursive;"
            >Create</h3>
            <p class="is-size-3 has-text-white">With one easy command, you create your own stand-ups inside Slack for multiple teams.</p>
          </div>
        </div>
        <div class="columns is-variable is-8 m-t-xl is-vcentered">
          <div class="column is-6 is-hidden-tablet">
            <img
              class="has-shadow round-edges"
              src="../assets/olaph-repsonse.gif"
            />
          </div>
          <div class="column is-6">
            <h3 class="title is-2 has-text-white">Response</h3>
            <p class="is-size-3 has-text-white">When it's stand-up time, Olaph will ask you the defined questions for each stand-up.</p>
          </div>
          <div class="column is-6 is-hidden-mobile">
            <img
              class="has-shadow round-edges"
              src="../assets/olaph-response-2.gif"
            />
          </div>
        </div>
        <div class="columns is-variable is-8 m-t-xl is-vcentered">
          <div class="column is-6">
            <img
              class="has-shadow round-edges"
              src="../assets/olaph-share.gif"
            />
          </div>
          <div class="column is-6">
            <h3 class="title is-2 has-text-white">Share</h3>
            <p class="is-size-3 has-text-white">As soon as you answered all questions, they'll be shared in the broadcast channel of your stand-up team.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionFeatureSet"
};
</script>
