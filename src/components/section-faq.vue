<template>
  <section id="faq" class="section">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="container column is-6 is-offset-3">
            <h2 class="title is-1 has-text-dark">FAQ</h2>
            <article class="message" :class="accordionClasses" v-for="item in items" :key="item">
              <div class="message-header has-background-link" v-on:click='item.trigger = !item.trigger'>
                <p class="is-size-4">{{ item.question }}</p>
              </div>
              <div class="message-body has-background-info" v-show="item.trigger">
                <div class="message-content">
                  <p class="is-size-5 has-text-left" v-html="item.answer">{{ item.answer }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionFAQ",
  data: function () {
    return {
      items: [
        {
          trigger: 'faq_1',
          trigger: false,
          question: 'What is Olaph?',
          answer: 'Olaph is a Slack bot which helps your team facilitating stand-ups inside a Slack channel.'
        },
        {
          trigger: 'faq_2',
          trigger: false,
          question: 'How do I install Olaph?',
          answer: 'Just click the Add to Slack button at the top, login to your Slack workspace and give permission to install Olaph to it.'
        },
        {
          trigger: 'faq_3',
          trigger: false,
          question: 'How do I create a stand-up?',
          answer: 'To create a stand-up, just type the command <strong>/create-standup</strong> inside any slack channel to open the stand-up creation window. Fill out the form and submit. That\'s it!'
        },
        {
          trigger: 'faq_4',
          trigger: false,
          question: 'How do I delete a stand-up?',
          answer: 'To delete a stand-up, just type the command <strong>/delete-standup</strong> in any Slack channel. Select the stand-up you want to delete in the drop-down and click Delete.'
        },
        {
          trigger: 'faq_5',
          trigger: false,
          question: 'How can I edit an existing stand-up?',
          answer: 'To edit a stand-up, just type the command <strong>/edit-standup</strong> in any Slack channel. Then simply select the stand-up you want to edit in the drop-down.'
        },
        {
          trigger: 'faq_6',
          trigger: false,
          question: 'How can I edit my posted answers?',
          answer: 'Right now it\'s not possible to change your answers after you entered them. We will provide the possibility to that in the near future though.'
        },
        {
          trigger: 'faq_7',
          trigger: false,
          question: 'How many stand-ups can I have?',
          answer: 'You are able to create as many stand-ups as you need.'
        },
        {
          trigger: 'faq_8',
          trigger: false,
          question: 'Why can\'t I see private channels?',
          answer: 'In order to make private channels visible to Olaph, you have to add Olaph to the channel for which you want to create a standup.'
        },
        {
          trigger: 'faq_9',
          trigger: false,
          question: 'How much does Olaph cost?',
          answer: 'Nothing! :)'
        }
      ],
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
strong {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bold;
}
.message-header {
  cursor: pointer;
}
</style>