var app = new Vue({
  el: '#app',
  data: {
      count: 0
  },

  beforeCreate: function(){
    console.log('beforeCreate : this.$data=' +this.$data);
  },
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('created : this.$data=' + this.$data)
  },
  beforeMount: function(){
    console.log('beforeMount');
    console.log(this.$el); //DOMへアクセス不可
  },
  mounted: function(){
    console.log(this.$el); //DOMへアクセス可能
    console.log('mountend');
  },
  beforeUpdate: function(){
    alert('beforeUpdate count = ' + this.count)
    console.log('beforeUpdate count='+this.count);

  },
  updated: function(){
    console.log('updated count='+this.count);
  },
  beforeDestroy: function(){
    console.log('beforeDestroy');
  },
  destroyed: function(){
    console.log('destroyed');
  },
  methods: {
    callDelete: function(){
      this.$destroy();
    },
    addCount: function(){
      this.count += 1;
    }
  }
})