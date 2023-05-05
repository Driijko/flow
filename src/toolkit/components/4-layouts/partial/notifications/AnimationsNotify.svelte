<!-- SCRIPTS /////////////////////////////////// -->
<script>
  import { animationsOff } from "../../../../scripts/animationsStore";
</script>

<!-- MARKUP ////////////////////////////////////// -->
<div>
  {#if $animationsOff }
    <p>Background animations turned off.</p>
  {:else}
    <p>
      Background animations turned on.<br/>
      May affect performance on less powerful devices.
    </p>
  {/if}
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
div {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.5);
}
p {
  padding-left: 1vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  border-radius: 1vw;
}
@media screen and (orientation: portrait) {
  p {
    font-size: 5vw;
    width: 90%;
    height: 20%;
    text-align: center;
  }
}
@media screen and (orientation: landscape) {
  p {
    font-size: 2vw;
    width: 50%; 
    height: 50%;
  }
}
</style>