const app = new Vue ({
    el: '#app',
    data: {
        titulo: 'CRUD minimalista con VueJS',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea (){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea = '';
            localStorage.setItem('gym-VUE', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-VUE', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            this.tareas.splice(index, 1)
            localStorage.setItem('gym-VUE', JSON.stringify(this.tareas));
        }
    },
    created: function (){
        let datosDB = JSON.parse(localStorage.getItem('gym-VUE'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})