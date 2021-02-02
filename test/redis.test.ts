import { expect, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '../src';

test('dashboard - Redis', () => {
  const stack = new cdk.Stack();
  let body = {
    'Fn::Join': [
      '',
      [
        '{"start":"-PT24H","periodOverride":"inherit","widgets":[{"type":"text","width":24,"height":1,"x":0,"y":0,"properties":{"markdown":"# hello-world - Redis"}},{"type":"metric","width":12,"height":6,"x":0,"y":1,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"CPUUtilization (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","CPUUtilization","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":7,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"FreeableMemory (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","FreeableMemory","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":13,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"SwapUsage (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","SwapUsage","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":19,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkBytesIn (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","NetworkBytesIn","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":25,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"NetworkBytesOut (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","NetworkBytesOut","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":31,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"CurrConnections (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","CurrConnections","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":37,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"Evictions (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","Evictions","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":43,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"Reclaimed (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","Reclaimed","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":49,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"CacheHits (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","CacheHits","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":55,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"CacheMisses (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","CacheMisses","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":61,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"ReplicationBytes (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","ReplicationBytes","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":67,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"ReplicationLag (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","ReplicationLag","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}},{"type":"metric","width":12,"height":6,"x":0,"y":73,"properties":{"view":"timeSeries","region":"',
        {
          Ref: 'AWS::Region',
        },
        '","metrics":[[{"label":"BytesUsedForCache (expected)","color":"#666666","expression":"ANOMALY_DETECTION_BAND(m1, 2)"}],["AWS/ElastiCache","BytesUsedForCache","CacheClusterId","hello-world",{"yAxis":"right","id":"m1"}]],"yAxis":{}}}]}',
      ],
    ],
  };
  new Dashboard(stack, 'Dashboard', { elasticacheName: 'hello-world' });
  expect(stack).to(haveResource('AWS::CloudWatch::Dashboard', { DashboardBody: body }));
});
