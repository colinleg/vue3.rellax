<template>
  <div class="home">
    <!-- <p class="rellax"  data-rellax-speed="7">Para 1</p>

    <div class="rellax" data-rellax-speed="-6">
       I parallax at all different speeds depending on your screen width.
    </div>

    <p class="rellax"  data-rellax-speed="15">Para </p> -->
    <div class="img1 rellax" data-rellax-speed="-6">sv</div>
    <div class="img2 rellax" data-rellax-speed="7">">vsdv</div>
    <div class="img3 rellax">sdvsd</div>
    <div class="img4 rellax">sdvsd</div>
  </div>


</template>

<script>
  import Rellax from 'rellax'

export default {
  // data(){
  //   return(){
  //     rellax: null
  //   }
  // },
  mounted(){
    this.rellax = new Rellax('.rellax')
  }
}
</script>

<style lang="css">
  p{
    font-size: 6rem;
  }

  .img1{
    height: 6rem; width:20rem;
    background: url('../assets/img1.svg') no-repeat center center/contain;
    margin-bottom: 5rem;
  }
  .img2{
    height: 6rem; width:20rem; margin-left : 20rem;
    background: url('../assets/img2.png') no-repeat center center/contain;
    margin-bottom: 5rem;
  }
  .img3{
    height: 6rem; width:20rem; margin-left: 40rem;
    background: url('../assets/img3.jpg') no-repeat center center/contain;
    margin-bottom: 20rem;
  }
  /* .img4{
    height: 6rem; width:20rem;
    background: url('../assets/img4.jpg  ') no-repeat center center contain;
  } */
</style>