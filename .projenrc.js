const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Sentia MPC',
  authorAddress: 'support.mpc@sentia.com',
  cdkVersion: '2.0.0',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'halloumi-cloudwatch-dashboard',
  repositoryUrl: 'https://github.com/sentiampc/halloumi-cloudwatch-dashboard.git',

  /* AwsCdkConstructLibraryOptions */
  docgen: true, /* Automatically generate API.md from jsii. */
  eslint: true, /* Install eslint. */
  publishToPypi: {
    distName: 'halloumi-cloudwatch-dashboard',
    module: 'halloumi_cloudwatch_dashboard',
  }, /* Publish to pypi. */
  license: 'Apache-2.0', /* License's SPDX identifier. */
  /* NodeProjectOptions */
  antitamper: false, /* Checks that after build there are no modified files on git. */
  defaultReleaseBranch: 'master', /* The name of the main release branch. */
  // dependabot: true, /* Include dependabot configuration. */
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  gitignore: [
    '.vscode/',
  ],
  majorVersion: 2,
});

project.synth();
