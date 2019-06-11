import Vue from 'vue'
import App from './App.vue'

// Server bus created to pass the selected server from Server.vue to ServerDetails so that the selected servers details can be displayed without going through the parent
export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
