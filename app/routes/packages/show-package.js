import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model(params) {
    this.set('packageName', params.id);
    return this.get("api").getPackage(params.id);
  },

  afterModel(model) {
    model.packageName = this.get('packageName');
  }

});
