import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-loader', 'Integration | Component | repo loader', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repo-loader}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#repo-loader}}
      template block text
    {{/repo-loader}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
