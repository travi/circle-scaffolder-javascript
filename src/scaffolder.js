import scaffoldConfig from './config-scaffolder';

export default async function ({vcs, projectRoot}) {
  await scaffoldConfig(projectRoot);

  return {
    badge: {
      text: 'CircleCI',
      link: `https://circleci.com/gh/${vcs.owner}/${vcs.name}`,
      img: `https://img.shields.io/circleci/project/github/${vcs.owner}/${vcs.name}/master.svg`
    }
  };
}
