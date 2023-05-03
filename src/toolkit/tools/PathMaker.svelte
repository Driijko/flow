<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  let d = "M 0 0";
  // for (let i = 0; i < 17; i++) {
  //   d += `L ${100 * i} ${1600} M ${(100 * i) + 100} 0`;
  // }
  // for (let i = 0 ; i < 10; i++) {
  //   d+= `M ${0} ${i * 100} L ${1600} ${i * 100}`;
  // }
  for (let i = 0; i < 17; i++) {
    d += `L ${100 * i} ${1600} M ${(300 * i) + 100} 0`;
  }
  for (let i = 0 ; i < 10; i++) {
    d+= `M ${0} ${i * 100} L ${1600} ${i * 200}`;
  }

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<svg viewBox="0 0 1600 900" >
  <path d={d} stroke="hsla(0, 100%, 50%, 0.2)" stroke-width="50" fill="black"/>
</svg>

<!-- STYLES //////////////////////////////////////// -->
<style>
  svg {
    width: 90%;
    border: 1px solid black;
  }
</style>