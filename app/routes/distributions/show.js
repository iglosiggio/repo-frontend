import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model(params) {
    this.set('paramID', params.id);
    return this.get("api").getPackages(params.id);
  },
  afterModel(model) {
    model.set('distro', this.get('paramID'));
  }
});
