<template>
    <div>
      <mall-header></mall-header>
      <mall-bread>
        <span>Goods</span>
      </mall-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)">All</a></dd>
                <dd>
                  <a href="javascript:void(0)">0 - 100</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="good in goodsList" :key=good.productId>
                    <div class="pic">
                      <a href="#"><img src="static/1.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{good.productName}}</div>
                      <div class="price">{{good.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <mall-footer></mall-footer>
    </div>
</template>
<script>
  import MallHeader from '@/components/Header'
  import MallFooter from '@/components/Footer'
  import MallBread from '@/components/Bread'
  import axios from 'axios'
  export default{
    data () {
      return {
        goodsList: []
      }
    },
    components: {
      MallHeader,
      MallFooter,
      MallBread
    },
    mounted () {
      this.getGoodsList()
    },
    methods: {
      getGoodsList () {
        axios.get('/goods').then((result) => {
          console.log(result)
          var res = result.data
          this.goodsList = res.result
          console.log(this.goodsList)
        })
      }
    }
  }
</script>
