<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import AudioBkgPausePlayButton 
  from "../../6-elements/interface/audio-bkg/AudioBkgPausePlayButton.svelte";
  import AudioBkgTimer from "./AudioBkgTimer.svelte";
  import AudioBkgVolumeModalOpener 
  from "../../6-elements/interface/modals/AudioVolumeModalButton.svelte";
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="audio-bkg-player">
  <h3>{$audioBkgTrack.name}</h3>
  <AudioBkgPausePlayButton />
  <AudioBkgTimer />
  <AudioBkgVolumeModalOpener />
</div>