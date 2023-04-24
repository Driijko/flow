<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import { fly } from "svelte/transition"
</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="tab-content" 
  in:fly="{{x: 200, duration: 500, delay: 500}}"
  out:fly="{{x: -200, duration: 500}}"
>
  <slot />
</div>