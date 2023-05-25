<!-- SCRIPTS /////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { siteMenuModal, modals } from "../../../../data/dynamic/modalsStore";
  import RightArrowIcon from "../../icons/arrows/RightArrowIcon.svelte";

  // ANIMATION -------------------------------------
  let animation;

  onMount(()=> {
    animation = (state,duration) => {
      gsap.set(".interface-area-button svg", {transformOrigin: "65% 50%"});
      if (state === "close") {
        gsap.to(".interface-area-button svg", {
          duration: duration,
          rotate: 0,
        });
      } else {
        gsap.to(".interface-area-button svg", {
          duration: duration,
          rotate: 180,
        });
      };
    };
  });

  // REACTIVE -------------------------------
  $: if (animation) {
    if ($siteMenuModal) {
      animation("open", 0.5);
    } else {
      animation("close", 0.5);
    }
  };

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<button class="interface-area-button" type="button"
  on:click={()=> modals.toggle("siteMenu")}
>
  <RightArrowIcon />
</button>