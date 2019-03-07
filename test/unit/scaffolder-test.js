import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as configScaffolder from '../../src/config-scaffolder';
import scaffold from '../../src';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(configScaffolder, 'default');

    configScaffolder.default.resolves();
  });

  teardown(() => sandbox.restore());

  test('that the config is defined', async () => {
    const vcsHostOwner = any.word();
    const vcsHostRepositoryName = any.word();
    const projectRoot = any.string();

    assert.deepEqual(
      await scaffold({projectRoot, vcs: {owner: vcsHostOwner, name: vcsHostRepositoryName}}),
      {
        badge: {
          text: 'CircleCI',
          link: `https://circleci.com/gh/${vcsHostOwner}/${vcsHostRepositoryName}`,
          img: `https://img.shields.io/circleci/project/github/${vcsHostOwner}/${vcsHostRepositoryName}/master.svg`
        }
      }
    );
    assert.calledWith(configScaffolder.default, projectRoot);
  });
});
