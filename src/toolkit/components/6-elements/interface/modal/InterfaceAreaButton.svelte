<!-- SCRIPTS /////////////////////////// -->
<script>
  import { interfaceArea, modals } from "../../../../data/dynamic/modalsStore";
</script>

<!-- MARKUP ///////////////////////////////////////// -->
<button type="button" on:click={()=> modals.toggle("interfaceArea")}>
  Interface Area Button
</button>