<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // STATE --------------------------------------
  let currentTab = 0;
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if currentTab === 0}
  <p>Tab 0</p>
{:else if currentTab === 1}
  <p>Tab 1</p>
{:else if currentTab === 2}
  <p>Tab 2</p>
{/if}

<ul>
  <li>
    <input type="radio" name="tab" id="a" checked={currentTab === 0}
      on:click={()=> currentTab = 0)} 
    />
    <label for="a">A</label>
  </li>
  <li>
    <input type="radio" name="tab" id="b" checked={currentTab === 1}
      on:click={()=> currentTab = 1)} 
    />
    <label for="b">B</label>
  </li>
  <li>
    <input type="radio" name="tab" id="c" checked={currentTab === 2}
      on:click={()=> currentTab = 2)} 
    />
    <label for="c">C</label>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
  input {
    display: none;
  }
  input:checked + label {
    background-color: grey;
  }
</style>