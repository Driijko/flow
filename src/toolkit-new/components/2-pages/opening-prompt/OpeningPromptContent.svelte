<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import SiteSettings from "../../6-structures/SiteSettings.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<main class="foreground">
  <p>Welcome to FLOW</p>
  <p>
    For the best experience the following settings are recommeded:
  </p>
  <SiteSettings />
  <p>
    You can change these settings later in the menu.
  </p>
  <a on:click|preventDefault href="link">Ready</a>
</main>