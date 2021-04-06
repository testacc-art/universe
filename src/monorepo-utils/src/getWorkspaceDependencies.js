// @flow strict

import sanitizeWorkspaces from './sanitizeWorkspaces';
import ShellCommand from './ShellCommand';
import type { WorkspaceDependencies } from './Workspaces.flow';

/**
 * This function returns the workspace dependencies
 */
export default function getWorkspaceDependencies(): WorkspaceDependencies {
  // TODO: fixme (for `yarn --version` >=2.0)
  // New command: `yarn workspaces list --verbose --json`, output:
  //
  // {"location":".","name":null,"workspaceDependencies":["src/babel-preset-adeira","src/eslint-config-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"scripts","name":"@adeira/universe-internal-scripts","workspaceDependencies":["src/flow-config-parser","src/js","src/monorepo-npm-publisher","src/monorepo-utils","src/signed-source"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/adeira.dev","name":"@adeira/docs","workspaceDependencies":["src/babel-preset-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/babel-plugin-transform-sx-tailwind","name":"@adeira/babel-plugin-transform-sx-tailwind","workspaceDependencies":["src/murmur-hash","src/sx-tailwind"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/babel-preset-adeira","name":"@adeira/babel-preset-adeira","workspaceDependencies":["src/fixtures-tester","src/monorepo-utils"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/css-colors","name":"@adeira/css-colors","workspaceDependencies":["src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/eslint-config-adeira","name":"@adeira/eslint-config","workspaceDependencies":["src/eslint-plugin-adeira","src/eslint-plugin-sx"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/eslint-fixtures-tester","name":"@adeira/eslint-fixtures-tester","workspaceDependencies":["src/flow-types-eslint","src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/eslint-plugin-adeira","name":"eslint-plugin-adeira","workspaceDependencies":["src/eslint-fixtures-tester","src/flow-types-eslint"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/eslint-plugin-sx","name":"eslint-plugin-sx","workspaceDependencies":["src/eslint-fixtures-tester","src/flow-types-eslint"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/example-relay","name":"@adeira/example-relay","workspaceDependencies":["src/fetch","src/fixtures-tester","src/graphql-bc-checker","src/graphql-global-id","src/graphql-relay","src/js","src/monorepo-utils","src/relay","src/sx","src/babel-preset-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/fetch","name":"@adeira/fetch","workspaceDependencies":["src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/fixtures-tester","name":"@adeira/fixtures-tester","workspaceDependencies":["src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/flow-config-parser","name":"@adeira/flow-config-parser","workspaceDependencies":["src/fixtures-tester","src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/flow-types-eslint","name":"@adeira/flow-types-eslint","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/graphql-bc-checker","name":"@adeira/graphql-bc-checker","workspaceDependencies":["src/signed-source","src/fixtures-tester"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/graphql-global-id","name":"@adeira/graphql-global-id","workspaceDependencies":["src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/graphql-relay","name":"@adeira/graphql-relay","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/graphql-relay-fauna","name":"@adeira/graphql-relay-fauna","workspaceDependencies":["src/graphql-global-id","src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/graphql-resolve-wrapper","name":"@adeira/graphql-resolve-wrapper","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/js","name":"@adeira/js","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/kochka.com.mx","name":"@adeira/kochka.com.mx","workspaceDependencies":["src/js","src/relay","src/sx","src/sx-design","src/babel-preset-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/monorepo-npm-publisher","name":"@adeira/monorepo-npm-publisher","workspaceDependencies":["src/babel-preset-adeira","src/fixtures-tester","src/monorepo-utils"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/monorepo-scanner","name":"@adeira/monorepo-scanner","workspaceDependencies":["src/js","src/monorepo-utils","src/fixtures-tester"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/monorepo-shipit","name":"@adeira/monorepo-shipit","workspaceDependencies":["src/fixtures-tester","src/js","src/monorepo-utils"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/monorepo-utils","name":"@adeira/monorepo-utils","workspaceDependencies":["src/js"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/murmur-hash","name":"@adeira/murmur-hash","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/relay","name":"@adeira/relay","workspaceDependencies":["src/fetch","src/js","src/monorepo-utils","src/signed-source"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/signed-source","name":"@adeira/signed-source","workspaceDependencies":[],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/sx","name":"@adeira/sx","workspaceDependencies":["src/css-colors","src/js","src/murmur-hash","src/signed-source","src/fixtures-tester"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/sx-design","name":"@adeira/sx-design","workspaceDependencies":["src/js","src/babel-preset-adeira","src/sx","src/sx-jest-snapshot-serializer"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/sx-jest-snapshot-serializer","name":"@adeira/sx-jest-snapshot-serializer","workspaceDependencies":["src/sx"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/sx-tailwind","name":"@adeira/sx-tailwind","workspaceDependencies":["src/js","src/signed-source","src/sx","src/babel-preset-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/sx-tailwind-website","name":"@adeira/sx-tailwind-website","workspaceDependencies":["src/sx","src/babel-plugin-transform-sx-tailwind","src/babel-preset-adeira"],"mismatchedWorkspaceDependencies":[]}
  // {"location":"src/ya-comiste-backoffice","name":"@adeira/ya-comiste-backoffice","workspaceDependencies":["src/js","src/relay","src/sx","src/sx-design"],"mismatchedWorkspaceDependencies":[]}
  const stdout = new ShellCommand(null, 'yarn', '--json', 'workspaces', 'info')
    .runSynchronously()
    .getStdout();

  const sanitizeStdout = () => {
    const data = JSON.parse(stdout);
    if (data.data === undefined) {
      // yarn updated how they return data from yarn workspaces info --json, this is to support 1.22.0
      return data;
    }
    // This is how the data has to be parsed prior to 1.22.0
    return JSON.parse(data.data);
  };

  return sanitizeWorkspaces(sanitizeStdout());
}
