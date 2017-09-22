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
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFitlerPop()">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterby}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{cur: priceChecked == 'all'}" @click="priceChecked='all'">All</a></dd>
                <dd v-for='(price, index) in priceFilter'>
                  <a href="javascript:void(0)" :class="{'cur': priceChecked == index}" @click="setPriceFilter(index)" >{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="good in goodsList" :key=good.productId>
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+good.productImage" alt=""></a>
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
      <div class="md-overay" v-show="overLayFlag" @click="closePop"></div>
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
        goodsList: [],
        priceFilter: [
          {
            startPrice: '0:00',
            endPrice: '500.00'
          },
          {
            startPrice: '500:00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000:00',
            endPrice: '2000.00'
          }
        ],
        priceChecked: 'all',
        filterby: false,
        overLayFlag: false
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
          this.goodsList = res.result.list
          console.log(this.goodsList)
        })
      },
      setPriceFilter (index) {
        console.log(index)
        this.priceChecked = index
        this.closePop()
      },
      showFitlerPop () {
        this.filterby = true
        this.overLayFlag = true
      },
      closePop () {
        this.filterby = false
        this.overLayFlag = false
      }
    }
  }
</script>

<style>
  .filterby-show{
    z-index: 999
  }
  .md-overay{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: absolute;
    z-index: 99;
    top: 0;
  }
</style>
