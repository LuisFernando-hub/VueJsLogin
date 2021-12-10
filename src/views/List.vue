<template>
  <div class="container mt-2">
      <template v-if="!isTasksEmpty">
        <div v-for="(task, index) in tasks" :key="index">
            <b-card :title="task.subject" class="mb-2">
                <b-card-text>{{task.description}}</b-card-text>
            <b-button variant="outline-secondary" class="mr-2" @click="edit(index)" >Editar</b-button>
            <b-button variant="outline-danger" class="mr-2" @click="remove(task, index)" >Excluir</b-button>
            </b-card>
        </div>
      </template>
    <template v-else>
        <div class="empty-data mt-2">
            <img src="../assets/empty-data.svg" class="empty-data-image">
            <b-button variant="outline-primary" class="mt-2" size="lg" to="/form" > Criar Tarefa </b-button>
        </div>
    </template>
    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa" >
        <div class="d-block text-center">
            Deseja realmente excluir essa tarefa? {{taskSelected.subject}}
        </div>
        <div class="mt-3 d-flex justify-content-end">
            <b-button variant="outline-secondary" class="mr-2" @click="hideModal" >Cancelar</b-button>
            <b-button variant="outline-danger" class="mr-2" @click="confirmRemove" >Excluir</b-button>
        </div>
    </b-modal>
  </div>
</template>

<script>

import TasksModel from "@/models/TasksModel";

export default {
  name: "List",

  data() {
     return {
         tasks: [],
         taskSelected: []
     }
  },

  async created() {
    this.tasks = await TasksModel.get();
    // console.log(tasks);
    // this.tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [] ;
  },

  methods: {
      edit(index) {
          this.$router.push({ name: "Form", params: { index }});
      },

      remove(task, index) {
          this.taskSelected = task;
          this.taskSelected.index = index;
          this.$refs.modalRemove.show();
      },

      hideModal() {
          this.$refs.modalRemove.hide();
      },

      confirmRemove() {
          this.tasks.splice(this.taskSelected.index, 1);
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          this.hideModal();
      }
  },


  computed: {
      isTasksEmpty() {
         return this.tasks.length == 0;
      }
  }
}
</script>


<style>
.empty-data {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
}


.empty-data-image {
    width: 300px;
    height: 300px;
}


</style>