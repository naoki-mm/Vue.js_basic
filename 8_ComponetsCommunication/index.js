var myChild = {

  template: '<p>子:　年齢{{age}}才\
            <button v-on:click="emitAgeEvent">年齢+1</button></p>',

  props:['age'],

  // 追加---
  methods: { 
    emitAgeEvent: function(){
      this.$emit('change-age',this.age)
    }
  }
  // -----

};

var myName = {
  data: function () {
    return {
      age: 10,
      name: 'たかし',
      num: 1210
    }
  },
  components: {
    'my-child': myChild
  },

  // 変更
  template: '<p>親　　名前:{{name}} 学籍番号:{{num}} 年齢:{{age}}才<br>\
  <my-child v-bind:age="age" v-on:change-age="getAge"></my-child></p>',

  // 追加---
  methods: {
    getAge: function(age_from_child){
      this.age = age_from_child + 1;
    }
  }
  // -----
};
var app = new Vue({
  el: '#app',
  components: {
    'my-name' : myName
  }
});