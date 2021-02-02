import { expect, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

test('dashboard', () => {
  const stack = new cdk.Stack();
  new Dashboard(stack, 'Dashboard');
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT24H","periodOverride":"inherit","widgets":[]}' }));
});
test('dashboard - name', () => {
  const stack = new cdk.Stack();
  new Dashboard(stack, 'Dashboard', { dashboardName: 'TheName' });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardName: 'TheName' }));
});
test('dashboard - start', () => {
  const stack = new cdk.Stack();
  new Dashboard(stack, 'Dashboard', { start: '-PT6H' });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: '{"start":"-PT6H","periodOverride":"inherit","widgets":[]}' }));
});