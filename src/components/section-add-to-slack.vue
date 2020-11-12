<template>
    <section class="section has-background-white is-fullheight hero">
        <div class="content columns is-vcentered hero-body">
            <div class="column is-4 is-offset-2 hero-width">
                <img class="is-hidden-tablet" src="@/assets/olaph_owl.svg" width="150"/>
                <p class="is-size-2">This is <strong>Olaph</strong>.<br/>He wants to support your team with their
                    stand-ups.</p>
                <a v-bind:href="url"><img class="round-edges has-shadow" alt="Add to Slack"
                                          src="https://platform.slack-edge.com/img/add_to_slack.png"
                                          srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 1.5x"/></a>
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
