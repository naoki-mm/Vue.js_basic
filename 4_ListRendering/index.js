var app = new Vue({
    el: '#app',
    data: {
      team: [
        { name: "たかし", id:1 },
        { name: "あきら", id:2 },
        { name: "つとむ", id:3 }
      ]
    }, // ,を忘れないで！
    methods: {
      addMember: function(){
        var ids = this.team.map(function(member) {
        return member.id;
      });

      var max_id = ids.reduce(function(a, b) {
        return Math.max(a, b);
      });

      this.team.push(
          {name: "ななし",id:max_id + 1}
        );
      }
    }
})