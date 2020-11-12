<template>
    <section class="section has-background-dark">
        <div class="container">
            <div class="content">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div id="checkmark" class="">
                            <i class="fas fa-exclamation-circle fa-10x has-text-danger has-text-centered"></i>
                        </div>
                        <div id="successBox" class="box">
                            <h1 class="has-text-danger">Error!</h1>
                            <p class="column is-size-4">something went wrong
                                <br/>
                                please try it again, or contact us at
                                <a href="mailto:hello@olaph.io"
                                   class="is-info is-medium"
                                   title="Open Mail Client">hello@olaph.io</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionSuccess"
    };

</script>
<style lang="scss" scoped>
</style>
