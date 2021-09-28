var app = new Vue({
  el: '#app',
  data:{
    todolists: [
      {id:1, content:"歯磨き" ,isCompleted: false},
      {id:2, content:"買い物", isCompleted: false},
      {id:3, content:"勉強", isCompleted: false}
    ]
  },

  methods: {
    addTask: function(){

      var new_content = this.$refs.new_content.value;
      if (new_content.trim().length == 0){
        return;
      }
      var ids = this.todolists.map(function(todo) {
        return todo.id;
      });
      var max_id = ids.reduce(function(a, b) {
        return Math.max(a, b);
      });

      this.todolists.push(
        {content: new_content,id:max_id+1,isCompleted: false ,isEditing: false}
      );
    },

    deleteTask: function(item){
      var index = this.todolists.indexOf(item);
      this.todolists.splice(index,1);
    }
  }
});