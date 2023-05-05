<div>
  <p>
    Adjusting<br class="portrait" /> layout...
  </p>
</div>

<!-- STYLES ///////////////////////////////////////// -->
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
  text-align: center;
  background-color: white;
  width: 50%; 
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  border-radius: 1vw;
}
@media screen and (orientation: portrait) {
  p {
    font-size: 6vw;
  }
}
@media screen and (orientation: landscape) {
  p {
    font-size: 3vw;
  }
}
</style>