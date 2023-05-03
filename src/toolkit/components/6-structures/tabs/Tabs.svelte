<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // STATE --------------------------------------
  let currentTab = 0;
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if currentTab === 0}
  <p>Tab 1</p>
{:else if currentTab === 1}
  <p>Tab 2</p>
{:else if currentTab === 2}
  <p>Tab 3</p>
{/if}

<ul>
  <li>
    <button type="button" on:click={()=> currentTab = 0}
      class:selected={currentTab === 0}
    >1</button>
  </li>
  <li>
    <button type="button" on:click={()=> currentTab = 1}
      class:selected={currentTab === 1}
    >2</button>
  </li>
  <li>
    <button type="button" on:click={()=> currentTab = 2}
      class:selected={currentTab === 2}
    >3</button>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
button.selected {
  background-color: hsl(0, 0%, 80%);
}
</style>