<template>
  <div class="about">
    <b-container>
      <h1>Image Gallery</h1>
      <b-row>
        <b-col cols="4" style="margin-bottom: 4px" v-for="(item,key) in images" :key="key">
          <b-img :src="item" @click="showModal(item)" fluid alt="Fluid image"></b-img>
        </b-col>
      </b-row>
    </b-container>
      <b-modal size="lg" centered  v-model="visible" class="img-modal">
            <b-img :src="modalImage" fluid alt="Fluid image"></b-img>
      </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      visible:false,
      modalImage:null,
      images:[
      ]
    }
  },
  created (){
     axios.get('http://localhost:6147/image-list')
        .then(response => {
            var data = response.data;
            this.images = data.reverse();
        })
  },
  methods: {
    showModal(item) {
      this.visible = true;
      this.modalImage = item;
      this.$refs['img-modal'].show();
    },
    hideModal() {
      this.visible = false;
        this.$refs['my-modal'].hide()
    },
  },
}
</script>
