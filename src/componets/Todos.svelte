<script>
    import FilterButton from './FilterButton.svelte'

    let newTodoName = ''
    
    export let todos = []

    $: totalTodos = todos.length
    $: completedTodos = todos.filter((todo) => todo.completed).length

    function removeTodo(todo) {
        todos = todos.filter((t) => t.id !== todo.id)
        
    }
    function addTodo() {
        todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }]
        newTodoName = ''
    }
    let newTodoId
        $: {
            if (totalTodos === 0) {
            newTodoId = 1;
        } else {
            newTodoId = Math.max(...todos.map((t) => t.id)) + 1;
        }
    }
    let filter = 'all'
    const filterTodos = (filter, todos) =>
    filter === 'active' ? todos.filter((t) => !t.completed) : filter === 'completed' ? todos.filter((t) => t.completed) :todos
  </script>

<h1>Svelte to-do list</h1>

<!-- Todos.svelte -->
<div class="todoapp stack-large">
    <!-- NewTodo -->
    <form on:submit|preventDefault={addTodo}>
      <h2 class="label-wrapper">
        <label for="todo-0" class="label__lg"> What needs to be done? </label>
      </h2>
      <input
      bind:value={newTodoName}
      type="text"
      id="todo-0"
      autocomplete="off"
      class="input input__lg" />
      <button type="submit" class="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  
    <!-- Filter -->
    <FilterButton bind:filter={filter} />
  
    <!-- TodosStatus -->
    <h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
    
    <!-- To-dos -->
    <ul class="todo-list stack-large" aria-labelledby="list-heading">
        {#each filterTodos(filter, todos) as todo (todo.id)}
        <li class="todo">
        <div class="stack-small">
            <div class="c-cb">
                <input type="checkbox" id="todo-{todo.id}"
                on:click={() => todo.completed = !todo.completed}
                checked={todo.completed}/>
            <label for="todo-{todo.id}" class="todo-label"> {todo.name} </label>
            </div>
            <div class="btn-group">
            <button type="button" class="btn btn__danger" on:click={() => removeTodo(todo)}>
            Delete 
            <span class="visually-hidden">{todo.name}</span>
            </button>
            </div>
        </div>
        </li>
        {:else}
        <li>Nothing to do here!</li>
        {/each}
    </ul>
    <hr />
  </div>