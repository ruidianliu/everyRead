<template>
  <div class="setting" @click.stop>
    <ul class="setContent">
    	<li class="fontSize">
    		<span>字号</span>
        <div>
          <span v-for="(size,index) in fontSize" @click="setSize(index)" :class="{on : index == defaultSize}" 
          v-html="size.content"></span>
        </div>
    	</li>
      <li class="background">
        <span>背景色</span>
        <div>
          <span v-for="(bgc,index) in bg" @click="setBg(index)" :style="{'background-color':bgc}" :key="bgc"><span v-show="index == defaultBg">√</span></span>
        </div>
      </li>
      <li class="night">
        <span>夜间模式</span>
        <div @click="setNight" :class="{on :night}">
          开关
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	fontSize: [
        {content: '小', val: '.25rem'},
        {content: '中', val: '.35rem'},
    		{content: '大', val: '.4rem'}
    	],
      bg: ['#fafafa','rgb(214, 153, 63)','rgb(241,129,201)','rgb(153, 214, 246)'],
      defaultSize: 0,
      defaultBg: 0,
      night:false
    }
  },
  methods: {
    setSize (index) {
      this.defaultSize = index
      this.$emit('setSize',this.fontSize[index].val)
    },
    setBg (index) {
      this.defaultBg = index
      this.night =false
      this.$emit('setBg',this.bg[index])
    },
    setNight () {
      this.night =! this.night
      this.$emit('setNight')
    }
  }
}

</script>

<style scoped>
  .setting{
    position: fixed;
    bottom: -100%;
    background-color:#fff;
    width: 100%;
    z-index: 3;
    padding: .2rem .3rem;
    box-sizing: border-box;
    font-size: .3rem;
    transition: .3s;
  }
  .setContent li{
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
  }
  .setContent li div{
      width: 70%;
      display: flex;
      justify-content: center;
      border: .01rem solid #000;
      border-radius: 5px;
  }
  .setContent li > span{
    color: rgb(143, 136, 136)
  }
  .setContent li div span{
    display: block;
    flex: 1;
    text-align: center;
  }
  .setContent .fontSize div span{
    padding: .1rem 0;
  }
  .setContent .fontSize div span.on{
    background: #000;
    color: #fff!important;
  }
  .setContent .fontSize div span:nth-child(2){
    border-left: 1px solid #000; 
    border-right: 1px solid #000; 
  }
  .setContent .background div,.setContent .night div{
    border-color: transparent;
  }
  .setContent .background div{
    justify-content: space-around;
  }
  .setContent .background div>span{
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    flex: none;
    border:1px solid #939393;
  }
  .setContent .night div{
    width: .8rem;
    padding: .1rem;
    border-radius: 30px;
    border: 2px solid #ccc;
    transition: .3s;
  }
  .setContent .night div.on{
    background: #000;
    color: #fff;
    border-color: #000;
  }

</style>