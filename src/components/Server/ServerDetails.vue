<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server # {{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            resetStatus() {
                // This updates status to normal on this instance and on the server details instance because it is an object. When and object is passed to another instance it is a reference type and is a pointer to the object in memory and so when it is changed it is changed in memory affecting both instances
                this.server.status = 'Normal';
            }
        },
        created() {
            // receiving data from a bus that is set in Server.vue
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
