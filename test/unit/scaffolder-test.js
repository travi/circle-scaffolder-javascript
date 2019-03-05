import {assert} from 'chai';
import any from '@travi/any';
import scaffold from '../../src';

suite('scaffolder', () => {
  test('that the config is defined', async () => {
    const vcsHostOwner = any.word();
    const vcsHostRepositoryName = any.word();

    assert.deepEqual(
      await scaffold({vcs: {owner: vcsHostOwner, name: vcsHostRepositoryName}}),
      {
        badge: {
          text: 'CircleCI',
          link: `https://circleci.com/gh/${vcsHostOwner}/${vcsHostRepositoryName}`,
          img: `https://img.shields.io/circleci/project/github/${vcsHostOwner}/${vcsHostRepositoryName}/master.svg`
        }
      }
    );
  });
});
