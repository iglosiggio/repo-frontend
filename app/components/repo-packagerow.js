import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "tr",
  classNameBindings: ['areInSelectedDistribution:selected'],
  areInSelectedDistribution: Ember.computed('currentDistribution', 'version.distribution', function() {
    return (this.get('currentDistribution') === this.get('version.distribution'));
  })
});
