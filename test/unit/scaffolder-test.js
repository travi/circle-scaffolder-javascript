import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as configScaffolder from '../../src/config-scaffolder';
import * as badgeScaffolder from '../../src/badge-scaffolder';
import scaffold from '../../src';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(configScaffolder, 'default');
    sandbox.stub(badgeScaffolder, 'default');

    configScaffolder.default.resolves();
  });

  teardown(() => sandbox.restore());

  test('that the config is defined', async () => {
    const projectRoot = any.string();
    const vcs = any.simpleObject();
    const visibility = any.word();
    const badgeDetails = any.simpleObject();
    badgeScaffolder.default.withArgs(vcs, visibility).returns(badgeDetails);

    assert.deepEqual(await scaffold({projectRoot, vcs, visibility}), {badge: badgeDetails});
    assert.calledWith(configScaffolder.default, projectRoot);
  });
});
