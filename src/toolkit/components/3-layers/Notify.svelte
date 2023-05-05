<!-- SCRIPTS ////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import ResizeNotifiy
  from "../4-layouts/partial/notifications/ResizeNotifiy.svelte";
  import AnimationsNotify 
  from "../4-layouts/partial/notifications/AnimationsNotify.svelte";
  import { notification, setNotification } from "../../scripts/notifyStore";

  // STATE ----------------------------------------
  let notifyComponent;

  // REACTIVE --------------------------------------
  $: if ($notification.name === "resize") {
    notifyComponent = ResizeNotifiy;
  } else if ($notification.name === "animations") {
    notifyComponent = AnimationsNotify;
  }

  $: if (!($notification.name === "")) {
    const timerId = setTimeout(()=> {
      setNotification("", 0);
      notifyComponent = null;
      clearTimeout(timerId);
    }, $notification.duration);
  }

</script>

<!-- MARKUP ///////////////////////////////////// -->
{#if notifyComponent}
  <div>
    <svelte:component this={notifyComponent} />
  </div>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
div {
  z-index: 3;
  position: absolute;
  top: 0%;
}
</style>