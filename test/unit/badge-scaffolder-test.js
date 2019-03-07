import {assert} from 'chai';
import any from '@travi/any';
import scaffoldBadge from '../../src/badge-scaffolder';

suite('badge scaffolder', () => {
  test('that the public version is returned for `Public` projects', () => {
    const vcsHostOwner = any.word();
    const vcsHostRepositoryName = any.word();

    assert.deepEqual(
      scaffoldBadge({owner: vcsHostOwner, name: vcsHostRepositoryName}, 'Public'),
      {
        text: 'CircleCI',
        link: `https://circleci.com/gh/${vcsHostOwner}/${vcsHostRepositoryName}`,
        img: `https://img.shields.io/circleci/project/github/${vcsHostOwner}/${vcsHostRepositoryName}/master.svg`
      }
    );
  });

  test('that the private version is returned for `Private` projects', () => {
    const vcsHostOwner = any.word();
    const vcsHostRepositoryName = any.word();

    assert.deepEqual(
      scaffoldBadge({owner: vcsHostOwner, name: vcsHostRepositoryName}, 'Private'),
      {
        text: 'CircleCI',
        link: `https://circleci.com/gh/${vcsHostOwner}/${vcsHostRepositoryName}`,
        img: `https://img.shields.io/circleci/token/<token here>/project/github/${vcsHostOwner}/` +
          `${vcsHostRepositoryName}/master.svg`
      }
    );
  });
});
