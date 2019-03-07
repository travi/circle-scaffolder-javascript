import scaffoldConfig from './config-scaffolder';
import scaffoldBadgeDetails from './badge-scaffolder';

export default async function ({vcs, projectRoot, visibility}) {
  await scaffoldConfig(projectRoot);

  return {badge: scaffoldBadgeDetails(vcs, visibility)};
}
