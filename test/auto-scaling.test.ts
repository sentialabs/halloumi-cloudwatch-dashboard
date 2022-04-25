import { expect, haveResource } from '@aws-cdk/assert';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

describe('dashboard - AutoScaling', () => {
  it('uses L2 Module', () => {
    const stack = getTestStack();
    const vpc = mockVpc(stack);
    const ASG = new autoscaling.AutoScalingGroup(stack, 'MyFleet', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.M4, ec2.InstanceSize.MICRO),
      machineImage: new ec2.AmazonLinuxImage(),
      vpc,
    });
    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            Ref: 'MyFleetASG88E55886',
          },
          ' - Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","',
          {
            Ref: 'MyFleetASG88E55886',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetASG88E55886',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetASG88E55886',
          },
          '",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","',
          {
            Ref: 'MyFleetASG88E55886',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","',
          {
            Ref: 'MyFleetASG88E55886',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [ASG] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));

  });
  it('uses L1 Module', () => {
    const stack = getTestStack();
    const ASG = new autoscaling.CfnAutoScalingGroup(stack, 'MyFleet', {
      minSize: '1',
      maxSize: '2',
    });
    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            Ref: 'MyFleet',
          },
          ' - Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","',
          {
            Ref: 'MyFleet',
          },
          '",{"yAxis":"right","id":"m1"}]],"annotations":{"horizontal":[{"label":"Max Instances in ASG","value":2,"yAxis":"left"}]},"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleet',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleet',
          },
          '",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","',
          {
            Ref: 'MyFleet',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","',
          {
            Ref: 'MyFleet',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [ASG] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));

  });
  it('uses imported name values', () => {
    const stack = getTestStack();
    new autoscaling.CfnAutoScalingGroup(stack, 'MyFleet', {
      minSize: '1',
      maxSize: '2',
    });
    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# MyFleet - Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","MyFleet",{"yAxis":"right","id":"m1"}]],"annotations":{"horizontal":[{"label":"Max Instances in ASG","value":2,"yAxis":"left"}]},"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","MyFleet",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","MyFleet",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","MyFleet",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","MyFleet",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [{ name: 'MyFleet', max_capacity: 2 }] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));

  });
  it('mixin L1 and L2 Module', () => {
    const stack = getTestStack();
    const vpc = mockVpc(stack);
    const ASG_L1 = new autoscaling.CfnAutoScalingGroup(stack, 'MyFleet_L1', {
      minSize: '1',
      maxSize: '2',
    });
    const ASG_L2 = new autoscaling.AutoScalingGroup(stack, 'MyFleet_L2', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.M4, ec2.InstanceSize.MICRO),
      machineImage: new ec2.AmazonLinuxImage(),
      vpc,
    });

    let body = {
      'Fn::Join': [
        '',
        [
          '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# ',
          {
            Ref: 'MyFleetL1',
          },
          ' - Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL1',
          },
          '",{"yAxis":"right","id":"m1"}]],"annotations":{"horizontal":[{"label":"Max Instances in ASG","value":2,"yAxis":"left"}]},"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL1',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL1',
          },
          '",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL1',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL1',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"text","width":24,"height":1,"x":0,"y":31,"properties":{"markdown":"# ',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          ' - Auto Scaling Group"}},{"type":"metric","width":12,"height":6,"x":0,"y":32,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"GroupInServiceInstances (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/AutoScaling","GroupInServiceInstances","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{"left":{"min":0,"label":"Instances","showUnits":false}}}},{"type":"metric","width":12,"height":6,"x":0,"y":38,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Average CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":44,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"Maximum CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","CPUUtilization","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          '",{"stat":"Maximum","yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":50,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkIn","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":56,"properties":{"view":"timeSeries","region":"',
          {
            Ref: 'AWS::Region',
          },
          '","metrics":[[{"label":"NetworkOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/EC2","NetworkOut","AutoScalingGroupName","',
          {
            Ref: 'MyFleetL2ASG15DCFF60',
          },
          '",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [ASG_L1, ASG_L2] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));

  });
});

function mockVpc(stack: cdk.Stack) {
  return ec2.Vpc.fromVpcAttributes(stack, 'MyVpc', {
    vpcId: 'my-vpc',
    availabilityZones: ['az1'],
    publicSubnetIds: ['pub1'],
    privateSubnetIds: ['pri1'],
    isolatedSubnetIds: [],
  });
}
function getTestStack(): cdk.Stack {
  return new cdk.Stack(undefined, 'TestStack', { env: { account: '1234', region: 'us-east-1' } });
}