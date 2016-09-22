import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-inline-package-list', 'Integration | Component | repo inline package list', {
  integration: true
});

test('it renders', function(assert) {
  this.set('distro', 'brisa');
  this.set('packages', ['libnotify4', 'libssl1.0.0', 'libatk1.0-0', 'libpango1.0-0', 'libgtk2.0-0']);

  this.render(hbs`{{repo-inline-package-list distro=distro packages=packages}}`);

  assert.equal(5, this.$('a').length, 'Imprime 5 links.');
});
