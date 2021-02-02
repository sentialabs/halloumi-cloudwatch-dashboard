import { expect, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

test('dashboard - AutoScaling', () => {
  const stack = new cdk.Stack();
  let body = {
    'Fn::Join': [
      '',
      [
        '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# hello-world - ECS Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","hello-world",{"yAxis":"right","id":"m1"}]],"annotations":{"horizontal":[{"label":"Max Instances in ASG","value":10,"yAxis":"left"}]},"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","hello-world",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
      ],
    ],
  };
  new Dashboard(stack, 'Dashboard', { autoScalingName: 'hello-world', autoScalingMaxCapacity: 10 });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
});
