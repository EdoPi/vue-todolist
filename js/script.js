var app = new Vue({
  el: '#root',
  data: {
    input: 'scrivi qualcosa',
    listInput:[],
  },
  methods:{
    pushList: function (){
      /*
      return this.listInput.push(this.input)
      this.input = '';*/
    this.listInput.push(this.input);
    this.input = '';
    console.log(this.listInput);
    return

    },
    cleanList: function(){
      this.listInput = [];
    },
    removeFromList : function(i){
      var deleted = this.listInput.splice(i, 1);

        console.log(deleted);

        return
       /*
       this.listInput = this.listInput.filter((element) =>{
         return element != this.i
       });
       return this.listInput
       console.log(this.listInput); */
    }

  }
});

Vue.config.devtools = true;
