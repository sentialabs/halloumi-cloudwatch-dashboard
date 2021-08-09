const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'Sentia MPC',
  authorAddress: 'support.mpc@sentia.com',
  cdkVersion: '1.73.0',
  jsiiFqn: 'projen.AwsCdkConstructLibrary',
  name: 'halloumi-cloudwatch-dashboard',
  repositoryUrl: 'https://github.com/sentiampc/halloumi-cloudwatch-dashboard.git',

  /* AwsCdkConstructLibraryOptions */
  cdkAssert: true, /* Install the @aws-cdk/assert library? */
  cdkDependencies: [
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-elasticache',
    '@aws-cdk/core',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  cdkTestDependencies: [
    '@aws-cdk/aws-ec2',
  ], /* AWS CDK modules required for testing. */
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
  dependabot: true, /* Include dependabot configuration. */
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
});

project.synth();
