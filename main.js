const app = new Vue({
    el: "#main",
    data:{
        tarea: null,
        tareas: [
            "Estudiar Vue", 
            "Practicar Vue", 
            "Seguir aprendiendo Vue"]
    },
    methods:{
        agregarNuevaTarea(){
            this.tareas.unshift(this.tarea)
        }
    }
})