import Ember from 'ember';

export default Ember.Controller.extend({
  // showPopup(){
  //   alert('hello world');
  // }

  init(){
    this._super(...arguments);
  },
  showMessage:false,
  counter:0,
  actions:{
    showPopup(){
      //return console.log("hi there oisin");
      this.toggleProperty('showMessage');
      this.set('counter', this.get('counter') + 1);
    }
  }

});
