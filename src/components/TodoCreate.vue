<template>
<div>
    <h1>Crear Libro</h1>
    <form @submit.prevent="addTodo">
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
</div>
</template>

<script>
import {
    db
} from "../firebase.js";
import router from "../router";
export default {
    name: "TodoCreate",
    data() {
        return {
            name: "",
            clasf: "",
            autor: "",
            edito: ""
        };
    },

    methods: {
        async addTodo() {
            await db.collection("todos").add({
                name: this.name,
                clasf: this.clasf,
                autor: this.autor,
                edito: this.edito
            });

            this.name = "";
            this.clasf = "";
            this.autor = "";
            this.edito = "";
            router.push("/");
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
