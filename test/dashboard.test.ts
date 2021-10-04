import { expect, haveResource } from '@aws-cdk/assert';
import { PeriodOverride } from '@aws-cdk/aws-cloudwatch';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

describe('dashboard', () => {
  it('basic', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard');
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT24H","periodOverride":"inherit","widgets":[]}' }));
  });
  it('name', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { dashboardName: 'TheName' });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardName: 'TheName' }));
  });
  it('start', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { start: '-PT6H' });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT6H","periodOverride":"inherit","widgets":[]}' }));
  });
  it('periodOverride', () => {
    const stack = new cdk.Stack();
    new Dashboard(stack, 'Dashboard', { periodOverride: PeriodOverride.AUTO });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT24H","periodOverride":"auto","widgets":[]}' }));
  });
});