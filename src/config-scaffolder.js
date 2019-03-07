import writeYaml from '../third-party-wrappers/write-yaml';
import makeDir from '../third-party-wrappers/make-dir';

export default async function (projectRoot) {
  const configDirectory = await makeDir(`${projectRoot}/.circleci`);

  return writeYaml(`${configDirectory}/config.yml`, {
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
  });
}
