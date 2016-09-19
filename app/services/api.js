import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  getDistributions() {
    return this.get('ajax').request('/distributions');
  },

  getPackages(distribution) {
    return this.get('ajax').request(`/distributions/${distribution}/packages`);
  },

  getPackage(packageName) {
    return this.get('ajax').request(`/packages/${packageName}`);
  }
});
