<template>
  <div>
      <b-container>
          <b-row>
              <b-col>
                  <real-time-demo v-if="visible" :url="url"/>
              </b-col>
              <b-col>
                  <b-form-select @change="changeCamera" v-model="selected" :options="options"></b-form-select>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>

import axios from 'axios'
import RealTimeDemo from './RealTimeDemo.vue'
export default {
    data() {
        return {
            visible: false,
            selected: null,
            divSocket: null,
            image: null,
            url : null,
            options: [{value : 'disable', text : 'Kapat'}],
        }
    },
    components: {
    RealTimeDemo
  },
    methods: {
        showStream() {
            this.visible = true;
        },
    
        changeCamera(value){
            this.visible = false;
            if(value === 'disable'){
                this.visible = false;
            }else{
                this.visible = false;
                axios.get('http://localhost:6147/start/'+value)
                    .then(response => {
                        var uri = response.data;
                        this.url = "http://localhost:6147" + uri;
                        this.visible = true;
                        /*this.divSocket = io("http://localhost:6147" + uri);
                        this.divSocket.on('data', function(data) {
                            var bytes = new Uint8Array(data);
                             return this.increment()
                            this.imageBase64 ="data:image/png;base64," + base64ArrayBuffer(bytes);
                        });*/
                    })
            }
        },
       
    },    
    created(){
        axios.get('http://localhost:6147/cams-list')
        .then(response => {
            var data = response.data;
            data.forEach(element => {
                var temp = {value : element.id, text : element.name}
                this.options.push(temp);
            });
        })
    },
}
</script>

<style>
</style>