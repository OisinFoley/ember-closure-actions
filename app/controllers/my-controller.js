import Ember from 'ember';

export default Ember.Controller.extend({
  // init(){
  //   this._super(...arguments);
  // },
  // showMessage:false,
  // actions:{
  //   showPopup(){
  //     //return console.log("hi there oisin");
  //     this.toggleProperty('showMessage');
  //   }
  // }

  showPopup(){
    alert('hello world');
  }

});
