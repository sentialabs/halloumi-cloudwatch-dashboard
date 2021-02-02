import { expect, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

test('dashboard - LoadBalancer', () => {
  const stack = new cdk.Stack();
  let body = {
    'Fn::Join': [
      '',
      [
        '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# Hello-World - Application Load Balancer"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"RequestCount (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","RequestCount","LoadBalancer","hello-world",{"stat":"Sum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"TargetResponseTime (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","TargetResponseTime","LoadBalancer","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
      ],
    ],
  };
  new Dashboard(stack, 'Dashboard', { loadBalancerFullName: 'hello-world', loadBalancerName: 'Hello-World' });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
});
