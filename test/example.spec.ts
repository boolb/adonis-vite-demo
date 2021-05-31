import test from 'japa'


test.group('Welcome', () => {
  test('uno', async (assert) => {
    assert.equal(1, 1);
  })
})
