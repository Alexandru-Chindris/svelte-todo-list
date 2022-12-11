<script>
  import Todos from "./componets/Todos.svelte";

  let todos = [
    //{ id: 1, name: "", completed: true }      add here todos in this format
  ];
</script>

<Todos {todos} />