<template>
  <div class="menuLeft" @click.stop>
    
    <div class="leftContent" >
      <div @click="toSave" class="mySave">
        <img src="../../src/assets/收藏.png" alt="">&nbsp;我的收藏
      </div>
      <div @click="toSet" class="set">
        <img src="../../src/assets/设置.png" alt="">&nbsp;阅读设置
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menuLeft',
  data () {
    return {
      
    }
  },
  methods: {
    toSave () {
      this.$emit('showSave',)
    },
    toSet () {
      this.$emit('setting')
    }
  }
}

</script>

<style scoped>
.menuLeft{
  position: relative;
  left:-30%;
  font-family: '微软雅黑'; 
}
.mySave{
  border-bottom:1px solid #000;

}
.leftContent{
  position: fixed;
  height: 100%;
  width: 30%;
  color: gray;
  background: #28292a;
  font-size: .26rem;
  padding-top: 1.5rem;
  vertical-align: center;
}
.leftContent div{
  padding: .2rem;
  /*margin: .2rem;*/
}

img{
  height: .3rem;

}

</style>