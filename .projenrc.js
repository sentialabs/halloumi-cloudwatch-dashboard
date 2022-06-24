const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Sentia MPC',
  authorAddress: 'support.mpc@sentia.com',
  cdkVersion: '2.1.0',
  name: 'halloumi-cloudwatch-dashboard',
  repositoryUrl: 'https://github.com/sentiampc/halloumi-cloudwatch-dashboard.git',
  bundledDeps: ['@types/jest@27.4.1'],
  docgen: true, /* Automatically generate API.md from jsii. */
  eslint: true, /* Install eslint. */
  publishToPypi: {
    distName: 'halloumi-cloudwatch-dashboard',
    module: 'halloumi_cloudwatch_dashboard',
  }, /* Publish to pypi. */
  license: 'Apache-2.0', /* License's SPDX identifier. */
  antitamper: false, /* Checks that after build there are no modified files on git. */
  defaultReleaseBranch: 'master', /* The name of the main release branch. */
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  gitignore: [
    '.vscode/',
  ],
  majorVersion: 2,
});

project.synth();
