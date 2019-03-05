export default function ({vcs}) {
  return {
    badge: {
      text: 'CircleCI',
      link: `https://circleci.com/gh/${vcs.owner}/${vcs.name}`,
      img: `https://img.shields.io/circleci/project/github/${vcs.owner}/${vcs.name}/master.svg`
    }
  };
}
