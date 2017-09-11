<template>
  <div class="menuRight on" @click="hide">
      <div class="rightContent on"  @click.stop>
        <div @click="Save" class="save">
          <img src="../../src/assets/收 藏.png" v-if="saved">
          <img src="../../src/assets/收 藏 (1).png" v-else>
            收藏
        </div>
        <div @click="goPrev" class="prev">
          <img src="../../src/assets/快退.png">
            前一天
        </div>
        <div @click="goRandom" class="random">
          <img src="../../src/assets/随机玩.png">
            随机
        </div>
        <div @click="goNext" class="next">
          <img src="../../src/assets/快进.png">
            后一天
        </div>
        <div @click="goToday" class="curr">
          <img src="../../src/assets/时钟 (1).png">
            今天
        </div>
      </div>


  </div>
</template>

<script>
export default {
  name: 'menuRight',
  props: ['data'],
  data () {
    return {
      saved: this.save
    }
  },
  methods: {
    Save () {

    },
    goPrev () {
      this.$emit('now',this.data.date.prev)
      this.hide()
    },
    goRandom () {
      this.$emit('random')
      this.hide()
    },
    goNext () {
      if(new Date().Format('yyyyMMdd') <= this.data.date.next){
        alert("已经是最新的文章了")
        return
      }
      this.$emit('now',this.data.date.next)
      this.hide()
    },
    goToday () {
      this.$emit('today')
      this.hide()
    },
    hide () {
      this.$emit('hide')
    }
  },
  moutend: {
    
  }
}

</script>

<style scoped>


.menuRight{
    position: fixed;
    background-color:transparent;
    color: rgb(143, 136, 136);
    text-align: center;
    height: 100%;
    width: 100%;
    top: 0;
    transition:background .3s,left 0s .3s;
    font-size: .2rem;
    left:100%;
z-index: 99;
  }
  .marR.on{
    background-color: rgba(221, 221, 97, 0.25);
    left:0;
    transition:background .3s,left 0s;
  }
  .marR .rightContent.on{
    right:0;
  }
  .rightContent{
    position: fixed;
    background-color: rgb(42,42,41);
    height: 100%;
    width: 20%;
    right:-26%;
    color: #B6B6B6;
    padding-top: 5%;
    font-size: .2rem;
    transition: .3s;
    
  }
  .rightContent div {
    padding: .2rem 0;
  }
  .rightContent img{
    width: .65rem;
    display: block;
    margin: 5px auto;
  }


/*.menuRight{
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99;
}
.tranRight{
  right: 0;
  transition:right .5s;
}
/*.on{
    background-color: rgba(119, 122, 108, 0.34);
    left:0;
    transition:background .5s,left 0s;
  }
.rightContent{
  position: absolute;
  height: 100%;
  width: 20%;
  color: #B6B6B6;
  background: #28292a;
  font-size: .2rem;
  padding-top: .3rem;
  right: -20%;
  transition:right .5s;
}
.rightContent div{
  padding: .15rem 0;
}

img{
  height: .5rem;
  display: block;
  margin: 5px auto;
}
*/
</style>