export default function scaffoldBadgeDetails(vcs, visibility) {
  return {
    text: 'CircleCI',
    link: `https://circleci.com/gh/${vcs.owner}/${vcs.name}`,
    img: `https://img.shields.io/circleci/${'Private' === visibility ? 'token/<token here>/' : ''}` +
      `project/github/${vcs.owner}/${vcs.name}/master.svg`
  };
}
