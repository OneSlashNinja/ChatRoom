(function(){
    var socket = io();

    var vue = new Vue({
        el:'#app',
        data: {
            userName: "",
            userList:[],
            userLoggedIn: false,
            message: "",
            messagesHist:[]
        },
        methods: {
            login: function(userName){
                socket.emit('join', userName);
                this.userLoggedIn = true;
            },
            sendMessage: function(message){
                socket.emit('message', message);
                this.message = "";
                return false;
            },
            initSocket: function(){
                socket.on('message', function(data){
                    this.messagesHist.push(data);
                }.bind(this));

                socket.on('refreshUserList', function(users){
                    this.userList = users;
                }.bind(this));
            }
        }
    });

    vue.initSocket();
}());