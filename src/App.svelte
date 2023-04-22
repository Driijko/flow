<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import Router from "./toolkit-new/components/1-site/Router.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteSettings from "./toolkit-new/components/6-structures/SiteSettings.svelte";
  import OpeningPromptContent from "./toolkit-new/components/2-pages/opening-prompt/OpeningPromptContent.svelte";
    import OpeningPromptPage from "./toolkit-new/components/2-pages/opening-prompt/OpeningPromptPage.svelte";

  setUp();
</script>
<AudioBkg />
<OpeningPromptContent />
<!-- <Router /> -->