import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [],
            newTodo: "",
            priority: ""
        },
        methods: {
            saveNewTodo: function() {
                if(this.priority == "High") {
                    this.todos.unshift({
                        name: this.newTodo,
                        priority: this.priority
                    })
                }else {
                    this.todos.push({
                        name: this.newTodo,
                        priority: this.priority
                    });
                }
                this.newTodo = "";
                this.priority = "";
            }
        }
    });
});