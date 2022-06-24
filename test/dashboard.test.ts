import { Template } from 'aws-cdk-lib/assertions';
import { PeriodOverride } from 'aws-cdk-lib/aws-cloudwatch';
import * as cdk from 'aws-cdk-lib/core';
import { Dashboard } from '../src';

describe('dashboard', () => {
  it('basic', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard');
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT24H","periodOverride":"inherit","widgets":[]}' });
  });
  it('name', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { dashboardName: 'TheName' });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Dashboard', { DashboardName: 'TheName' });
  });
  it('start', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { start: '-PT6H' });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT6H","periodOverride":"inherit","widgets":[]}' });
  });
  it('periodOverride', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { periodOverride: PeriodOverride.AUTO });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT24H","periodOverride":"auto","widgets":[]}' });
  });
});