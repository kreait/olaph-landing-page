<template>
    <div>
        <section class="section has-background-white">
            <div class="content columns is-vcentered">
                <div class="column is-6 is-offset-3">
                    <h2 class="title is-1">BETA</h2>
                    <p class="is-size-3"><strong>Olaph</strong> is still very young and needs your help to grow into a fine owl.</p>
                </div>
            </div>
        </section>
        <section class="section has-background-link">
            <div class="content is-vcentered">
                <h2 class="title is-1 has-text-white">How to share Feedback</h2>
                <div class="columns is-variable is-8 is-vcentered m-t-xl">
                    <div class="column is-4 is-offset-2">
                        <p class="is-size-3 has-text-white">You can share it publicly via our Feedback tool.</p>
                    </div>
                    <div class="column is-4">
                        <a target="_blank" href="https://feedback.olaph.io" class="button is-large round-edges has-shadow">Share Feedback</a>
                    </div>
                </div>
                <div class="columns is-variable is-8 is-vcentered m-t-xl">
                    <div class="column is-4 is-offset-2">
                        <div class="is-centered">
                            <div class="content">
                                <div class="field has-addons">
                                    <div class="control has-icons-left margin-auto">
                                        <input class="input is-medium" type="text" value="hello@olaph.io" readonly>
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <p class="is-size-3 has-text-white">Or you can drop us a message.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "beta",
};
</script>

<style scoped>
.margin-auto {
  margin: auto;
}
</style>
