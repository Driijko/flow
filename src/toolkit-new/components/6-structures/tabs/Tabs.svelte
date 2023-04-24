<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // STATE --------------------------------------
  let currentTab = 0;

  // EVENT HANDLERS --------------------------------
  function handleClick(element, newTab) {
    if (element.checked) {
      currentTab = newTab;
    }
  };
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
    <label for="a">A</label>
    <input type="radio" name="tab" id="a" checked={currentTab === 0}
      on:click={e => handleClick(e.target, 0)} 
    />
  </li>
  <li>
    <label for="b">B</label>
    <input type="radio" name="tab" id="b" checked={currentTab === 1}
      on:click={e => handleClick(e.target, 1)} 
    />
  </li>
  <li>
    <label for="c">C</label>
    <input type="radio" name="tab" id="c" checked={currentTab === 2}
      on:click={e => handleClick(e.target, 2)} 
    />
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
  input {
    border: 4px solid black;
  }
  input:checked {
    background-color: grey;
  }
</style>