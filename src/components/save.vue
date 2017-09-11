<template>
  <div class="saveArticle" >
    
    <header>
    	<img src="../assets/back.png" @click="hideSave">
    </header>
    <div class="saveArticle_c">
    	<ul>
    		<li v-for="item in saveArticles" @click="goArticle(item.date)">
            <span class="title">{{ item.title }}</span>
            <span class="author">{{ item.author }}</span>  
        </li>
    	</ul>

    </div>
  </div>
</template>

<script>
export default {
	props: ['saveArticles'],
  data () {
    return {
    }
  },
  methods: {
    goArticle (data) {
      this.$emit('go',data.curr)
      this.hideSave()
    },
    hideSave () {
      this.$emit('hide')
    }
  }
}

</script>

<style scoped>
  .saveArticle{
    position: fixed;
    box-sizing: border-box;
    background: #fafafa;
    width: 100%;
    height: 100%;
    font-size: .35rem;
    left: -100%;
    transition:all .3s; 
    z-index: 99;
  }
  header{
    position: absolute;
    padding: .2rem;
  }
  .saveArticle_c{
    box-sizing: border-box;
    padding: 0 .2rem;
    margin-top: .8rem;
  }
  .saveArticle_c ul li{
    border-bottom: 1px solid #ccc;
    padding: .2rem 0;
    display: flex;
    justify-content: space-between;
  }
  .saveArticle_c ul li .author{
    font-size: .3rem;
    color:#ccc;
  }
</style>