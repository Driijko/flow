<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import OpeningPromptPage from "./toolkit-new/components/2-pages/opening-prompt/OpeningPromptPage.svelte";
  import LoadingPage from "./toolkit-new/components/2-pages/LoadingPage.svelte";
  import Router from "./toolkit-new/components/1-site/Router.svelte";

  setUp();
</script>

<AudioBkg />
<!-- <OpeningPromptPage /> -->
<!-- <LoadingPage /> -->
<Router />