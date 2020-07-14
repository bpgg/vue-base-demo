<template>
  <div id="TodoListPage">
    <todo-list>
      <todo-list-item :key="item.id" v-for="item in list" :title="item.title">
        <template v-slot:pre-icon="{user:person}">{{ person.firstName }}</template>

        <template #default></template>

        <template #suf-icon="slotProps">
          <span v-if="slotProps.value>1">🤮---{{slotProps.value}}</span>
          <span v-else>🆒---{{slotProps.value}}</span>
        </template>
      </todo-list-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList/TodoList";
import TodoListItem from "@/components/TodoList/TodoListItem";

export default {
  name: "TodoListPage",
  components: {
    TodoList,
    TodoListItem
  },
  data() {
    return {
      list: [
        { id: "1", title: "课程1" },
        { id: "2", title: "课程2" }
      ]
    };
  }
};
</script>