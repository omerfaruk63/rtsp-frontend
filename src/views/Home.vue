<template>
  <div class="home">
    <live-stream/>
  </div>
</template>

<script>
// @ is an alias to /src
import LiveStream from '../components/liveStream.vue'

export default {
  name: 'Home',
  components: {
    LiveStream
  }
}
</script>
