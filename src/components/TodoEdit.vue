<template>
<div>
    <h1>Editar Libro</h1>

    <form @submit.prevent="updateTodo">
        <p>
            Nombre de mi Libro:
            <input type="text" v-model="name" />
        </p>
        <p>
            Autor:
            <input type="text" v-model="autor" />
        </p>
        <p>
            Editorial:
            <input type="text" v-model="edito" />
        </p>
        <p>
            Clasificacion:
            <select v-model="clasf">
                <option value="infantil">Infantil</option>
                <option value="juvenil">Juvenil</option>
                <option value="narrativa">Narrativa</option>
                <option value="horror">Horror</option>
            </select>
        </p>
        <button type="submit">Aceptar</button>
    </form>
    <hr>
    <button @click="eliminar = !eliminar" v-if="eliminar===false">Eliminar</button>
    <div v-if="eliminar===true">
        <h1>Estas seguro de que desea Eliminar?</h1>
        <button @click="deleteTodo">Aceptar y Borrar</button>
        <button @click="eliminar = !eliminar">Cancelar</button>
    </div>

</div>
</template>

<script>
import {db} from '../firebase.js'
import router from '../router'
export default {
    name: "TodoEdit",
    data() {
        return {
            name: "",
            clasf: "",
            autor: "",
            edito: "",
            eliminar: false
        };
    },

    created() {
        this.getTodo();
    },

    methods: {
        async getTodo() {
            const id = this.$route.params.id;
            const data = await db.collection("todos").doc(id).get();
            const todo = data.data();
            this.name = todo.name;
            this.clasf = todo.clasf;
            this.edito = todo.edito;
            this.autor = todo.autor;
        },
        async updateTodo() {
            const id = this.$route.params.id;
            await db.collection("todos").doc(id).set({
                name: this.name,
                clasf: this.clasf,
                autor: this.autor,
                edito: this.edito
            })
            router.push("/");
        },

        async deleteTodo() {
            const id = this.$route.params.id;
            await db.collection("todos").doc(id).delete()
            router.push("/");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
