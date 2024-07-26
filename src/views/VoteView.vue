<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <template v-for="submissions in sortedSubmitssions" v-bind:key="submissions.id">
        <div class="vote">
          <div class="col-2">
            <img src="https://placehold.co/60" alt="Image" />
          </div>
          <div>
            <section>
              <div>
                <h2>{{ submissions.title }}</h2>
                <span class="vote--button" v-on:click="upvote(submissions.id)">
                  ^{{ submissions.votes }}
                </span>
              </div>
              <div>visitors deserve to see</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
          </div>
        </div>
        <hr />
      </template>
    </template>
  </Card>
</template>

<script>
import submissions from '../storage/seeds' // Pfad zur Datei anpassen

export default {
  name: 'App',
  data() {
    return {
      submissions
    }
  },
  computed: {
    sortedSubmitssions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes
      })
    }
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find((submission) => submission.id === submissionId)
      submission.votes++
    }
  }
}
</script>

<style scoped>
.vote {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
}
.vote--button {
  color: blue;
  font-size: 20px;
  font-weight: bold;
}
</style>