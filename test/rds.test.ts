import { expect, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

test('dashboard - RDS', () => {
  const stack = new cdk.Stack();
  let body = {
    'Fn::Join': [
      '',
      [
        '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# hello-world - RDS"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","CPUUtilization","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"FreeableMemory (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","FreeableMemory","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"FreeLocalStorage (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","FreeLocalStorage","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"DatabaseConnections (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","DatabaseConnections","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"DiskQueueDepth (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","DiskQueueDepth","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":31,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkReceiveThroughput (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","NetworkReceiveThroughput","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":37,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkTransmitThroughput (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/RDS","NetworkTransmitThroughput","DBInstanceIdentifier","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
      ],
    ],
  };
  new Dashboard(stack, 'Dashboard', { rdsName: 'hello-world' });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
});
