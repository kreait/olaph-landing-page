<template class="has-navbar-fixed-bottom">
    <div>
        <!-- Auth Begin -->
        <br>
        <form class="ws-margin" @submit.prevent="handleSubmit">
            <div class="field has-addons has-addons-right">
                <div class="control is-expanded">
                    <input class="input" v-model="password" type="password"
                           :class="{ 'is-danger': submitted && !password }" placeholder="Password"/><br>
                </div>
                <div class="control">
                    <input class="button is-primary" type="submit" value="submit"/>
                </div>
                <p v-show="errorThrown" class="is-danger">Something went wrong or the password is incorrect</p>
            </div>
        </form>
        <br><br>
        <!-- Auth End -->

        <!-- Responses-Form Begin -->
        <div class="ws-margin" v-for="answers in randomAnswers" :key="answers.id">
            <h5 class="title is-5">{{answers.id}}</h5><br>
            <h6 class="subtitle is-6">{{answers.description}}</h6>
            <div class="field has-addons has-addons-centered" v-for="(message, index) in answers.messages" :key="index">
                <div class="control is-expanded">
                    <input class="input" type="text" v-model="answers.messages[index]" placeholder="">
                </div>
                <div class="control">
                    <a class="button is-danger" v-if="index != (Object.keys.length - 1)"
                       v-on:click="removeAnswer(answers, index)">Remove</a>
                </div>
            </div>
            <div class="field has-addons has-addons-left">
                <div class="control">
                    <a class="button is-success" v-on:click="addAnswer(answers)">Add Response</a>
                </div>
            </div>
            <br><br>

            <nav class="navbar is-fixed-bottom">
                <div class="control navbar-item navbar-start">
                    <a class="button is-warning" v-on:click="updateAnswers()">Save Entries</a>
                </div>
                <div class="navbar-item has-dropdown-up is-hoverable navbar-end">
                    <a class="navbar-link">Show Placeholders</a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">{date} - shows the current date</a>
                        <a class="navbar-item">{current_standup} - shows the current standup</a>
                        <a class="navbar-item">{next_standup} - shows the next standup after the current one</a>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Responses-Form End -->
    </div> 
</template>
<script>
    import http from './../core/http'

    export default {
        data() {
            return {
                submitted: false,
                password: '',
                token: 'token',
                errorThrown: false,
                randomAnswers: [],
                placeholderShown: false
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                this.token = btoa(this.password);
                localStorage.setItem('token', this.token);
                this.getAnswers();
            },
            updateAnswers(n) {
                this.putAnswers();
                alert("Entries updated!")
            },
            getAnswers() {
                http.get("/random-answers").then(response => {
                    this.randomAnswers = response.data;
                }).catch(() => {
                    this.errorThrown = true
                });
            },
            putAnswers() {
                this.randomAnswers.forEach(function (element) {
                    http.put("/random-answers/" + element.id, {messages: element.messages});
                });
            },
            addAnswer: function (Object) {
                //Name of the Document
                //console.log(Object.id)
                Object.messages.push('')
            },
            removeAnswer: function (Object, index) {
                //alert(index)
                Object.messages.splice(index, 1)
            },
            mounted() {
                this.addAnswer();
                this.removeAnswer()
            }
        }
    }
</script>