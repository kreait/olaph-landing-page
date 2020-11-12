<template>
    <section class="section">
        <div class="container">
            <div class="content">
                <div class="columns">
                    <div class="column">
                        <h2 class="is-1 title">{{ workspaces }}</h2>
                        <h3 class="is-4 subtitle">Workspaces</h3>
                    </div>
                    <div class="column">
                        <h2 class="is-1 title">{{ standups }}</h2>
                        <h3 class="is-4 subtitle">Stand-Ups</h3>
                    </div>
                    <div class="column">
                        <h2 class="is-1 title">{{ members }}</h2>
                        <h3 class="is-4 subtitle">Members</h3>
                    </div>
                    <div class="column">
                        <h2 class="is-1 title">{{ questions }}</h2>
                        <h3 class="is-4 subtitle">Answered Questions</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import http from './../core/http'
    export default {
        name: "dashboard",
  data() {
    return {
      workspaces: "",
      standups: "",
      members: "",
      questions: ""
    };
  },
  methods: {
    getMetrics: function() {
      http.get(
        "/actuator/customers"
      ).then(response => {
        var data = response.data
        this.workspaces = data.workspaces
        this.standups = data.standups
        this.members = data.members
        this.questions = data.questions
      });
    }
  },
  mounted() {
    this.getMetrics();
  }
};
</script>
