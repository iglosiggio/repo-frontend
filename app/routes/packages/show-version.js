import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model(params) {
    this.set('distributionName', params.distro);
    this.set('packageName', params.id);
    return this.get("api").getPackageInDistribution(params.distro, params.id);
  },

  afterModel(model) {
    model.distributionName = this.get('distributionName');
    model.packageName = this.get('packageName');
  }

});
