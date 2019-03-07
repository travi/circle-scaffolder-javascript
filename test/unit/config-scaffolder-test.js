import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as yamlWriter from '../../third-party-wrappers/write-yaml';
import * as mkdir from '../../third-party-wrappers/make-dir';
import scaffoldConfig from '../../src/config-scaffolder';

suite('config scaffolder', () => {
  let sandbox;
  const projectRoot = any.string();
  const pathToCreatedDirectory = any.string();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(yamlWriter, 'default');
    sandbox.stub(mkdir, 'default');

    yamlWriter.default.resolves();
    mkdir.default.withArgs(`${projectRoot}/.circleci`).resolves(pathToCreatedDirectory);
  });

  teardown(() => sandbox.restore());

  test('that a base config is created', async () => {
    await scaffoldConfig(projectRoot);

    assert.calledWith(
      yamlWriter.default,
      `${pathToCreatedDirectory}/config.yml`,
      {
        version: 2.1,
        jobs: {
          build: {
            docker: [{image: 'circleci/node:8.12.0'}],
            steps: [
              'checkout',
              {run: 'npm install'},
              {run: 'npm test'}
            ]
          }
        }
      }
    );
  });
});
