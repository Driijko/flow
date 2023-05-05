<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import Router from "./toolkit/components/1-site/Router.svelte";
  import Notify from "./toolkit/components/3-layers/Notify.svelte";
  import AnimationsButton 
  from "./toolkit/components/6-elements/interface/modals/AnimationsButton.svelte";
  import { animationsOff } from "./toolkit/scripts/animationsStore";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<!-- <Router /> -->
<AnimationsButton />
<p>
  {$animationsOff}
</p>
<Notify />