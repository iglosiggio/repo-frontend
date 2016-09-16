import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-header', 'Integration | Component | repo header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{repo-header}}`);
  assert.ok(this.$().text());
});
