import { expect, haveResource } from '@aws-cdk/assert';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import { Dashboard, SimpleAutoScalingGroup } from '../src';

describe('dashboard - AutoScaling', () => {
  it('uses L1 Module', () => {
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
          "{\"start\":\"-PT24H\",\"periodOverride\":\"inherit\",\"widgets\":[{\"type\":\"text\",\"width\":24,\"height\":1,\"x\":0,\"y\":0,\"properties\":{\"markdown\":\"# ",
          {
            "Ref": "MyFleetASG88E55886"
          },
          " - Auto Scaling Group\"}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":1,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"GroupInServiceInstances (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/AutoScaling\",\"GroupInServiceInstances\",\"AutoScalingGroupName\",\"",
          {
            "Ref": "MyFleetASG88E55886"
          },
          "\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{\"left\":{\"min\":0,\"label\":\"Instances\",\"showUnits\":false}}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":7,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"Average CPUUtilization (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"CPUUtilization\",\"AutoScalingGroupName\",\"",
          {
            "Ref": "MyFleetASG88E55886"
          },
          "\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":13,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"Maximum CPUUtilization (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"CPUUtilization\",\"AutoScalingGroupName\",\"",
          {
            "Ref": "MyFleetASG88E55886"
          },
          "\",{\"stat\":\"Maximum\",\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":19,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"NetworkIn (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"NetworkIn\",\"AutoScalingGroupName\",\"",
          {
            "Ref": "MyFleetASG88E55886"
          },
          "\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":25,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"NetworkOut (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"NetworkOut\",\"AutoScalingGroupName\",\"",
          {
            "Ref": "MyFleetASG88E55886"
          },
          "\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}}]}"
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [ ASG ] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  
  })
  it('passing information directly', () => {
    const stack = getTestStack();
    let body = {
      'Fn::Join': [
        '',
        [
          "{\"start\":\"-PT24H\",\"periodOverride\":\"inherit\",\"widgets\":[{\"type\":\"text\",\"width\":24,\"height\":1,\"x\":0,\"y\":0,\"properties\":{\"markdown\":\"# hello - Auto Scaling Group\"}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":1,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"GroupInServiceInstances (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/AutoScaling\",\"GroupInServiceInstances\",\"AutoScalingGroupName\",\"hello\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"annotations\":{\"horizontal\":[{\"label\":\"Max Instances in ASG\",\"value\":3,\"yAxis\":\"left\"}]},\"yAxis\":{\"left\":{\"min\":0,\"label\":\"Instances\",\"showUnits\":false}}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":7,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"Average CPUUtilization (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"CPUUtilization\",\"AutoScalingGroupName\",\"hello\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":13,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"Maximum CPUUtilization (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"CPUUtilization\",\"AutoScalingGroupName\",\"hello\",{\"stat\":\"Maximum\",\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":19,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"NetworkIn (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"NetworkIn\",\"AutoScalingGroupName\",\"hello\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}},{\"type\":\"metric\",\"width\":12,\"height\":6,\"x\":0,\"y\":25,\"properties\":{\"view\":\"timeSeries\",\"region\":\"",
          {
            "Ref": "AWS::Region"
          },
          "\",\"metrics\":[[{\"label\":\"NetworkOut (expected)\",\"color\":\"#666666\",\"expression\":\"ANOMALY_DETECTION_BAND(m1, 2)\"}],[\"AWS/EC2\",\"NetworkOut\",\"AutoScalingGroupName\",\"hello\",{\"yAxis\":\"right\",\"id\":\"m1\"}]],\"yAxis\":{}}}]}"
        ],
      ],
    };
    new Dashboard(stack, 'Dashboard', { autoScaling: [ new SimpleAutoScalingGroup({autoScalingGroupName: 'hello', autoScalingGroupMaxCapacity: 3}) ] });
    expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
  })
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