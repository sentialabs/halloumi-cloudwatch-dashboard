import { expect, haveResource } from '@aws-cdk/assert';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

describe('dashboard - LoadBalancer', () => {
  it('uses L2 Module (Application Load Balancer)', () => {
    const stack = new cdk.Stack();
    const vpc = new ec2.Vpc(stack, 'Stack');

    // WHEN
    const elb = new elbv2.ApplicationLoadBalancer(stack, 'LB', {
      vpc,
      internetFacing: true,
    });

    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerName',
            ],
          },
          ' - Application Load Balancer"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"RequestCount (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","RequestCount","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerFullName',
            ],
          },
          '",{"stat":"Sum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"TargetResponseTime (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","TargetResponseTime","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerFullName',
            ],
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { loadBalancer: [elb] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  });
  it('uses L2 Module (Network Load Balancer)', () => {
    const stack = new cdk.Stack();
    const vpc = new ec2.Vpc(stack, 'Stack');

    // WHEN
    const elb = new elbv2.NetworkLoadBalancer(stack, 'LB', {
      vpc,
      internetFacing: true,
    });

    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerName',
            ],
          },
          ' - Application Load Balancer"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"RequestCount (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","RequestCount","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerFullName',
            ],
          },
          '",{"stat":"Sum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"TargetResponseTime (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","TargetResponseTime","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB8A12904C',
              'LoadBalancerFullName',
            ],
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { loadBalancer: [elb] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  });
  it('uses L1 Module', () => {
    const stack = new cdk.Stack();
    // const vpc = new ec2.Vpc(stack, 'Stack');

    // WHEN
    const elb = new elbv2.CfnLoadBalancer(stack, 'LB', {
    });

    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerName',
            ],
          },
          ' - Application Load Balancer"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"RequestCount (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","RequestCount","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerFullName',
            ],
          },
          '",{"stat":"Sum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"TargetResponseTime (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","TargetResponseTime","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerFullName',
            ],
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { loadBalancer: [elb] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  });
  it('uses load balancer names', () => {
    const stack = new cdk.Stack();
    // const vpc = new ec2.Vpc(stack, 'Stack');

    // WHEN
    const elb = new elbv2.CfnLoadBalancer(stack, 'LB', {
    });

    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerName',
            ],
          },
          ' - Application Load Balancer"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"RequestCount (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","RequestCount","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerFullName',
            ],
          },
          '",{"stat":"Sum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"TargetResponseTime (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ApplicationELB","TargetResponseTime","LoadBalancer","',
          {
            'Fn::GetAtt': [
              'LB',
              'LoadBalancerFullName',
            ],
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { loadBalancer: [{ name: elb.attrLoadBalancerName, full_name: elb.attrLoadBalancerFullName }] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  });
});

