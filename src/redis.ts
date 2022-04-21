import { TextWidget, MathExpression, GraphWidget, Metric, IWidget } from '@aws-cdk/aws-cloudwatch';

export class Redis {

  static metrics(name:string): IWidget[] {
    let header = new TextWidget({
      width: 24,
      height: 1,
      markdown: `# ${name} - Redis`,
    });

    let metrics = [
      'CPUUtilization',
      'FreeableMemory',
      'SwapUsage',
      'NetworkBytesIn',
      'NetworkBytesOut',
      'CurrConnections',
      'Evictions',
      'Reclaimed',
      'CacheHits',
      'CacheMisses',
      'ReplicationBytes',
      'ReplicationLag',
      'BytesUsedForCache',
    ];

    let graph = Array();
    graph.push(header);

    metrics.forEach(metric => {
      graph.push(
        Redis.metricGraph(metric, name),
      );
    });
    return graph;
  }

  static metricGraph(metric: string, name: string): IWidget {
    let cloudwatchMetric = new Metric({
      namespace: 'AWS/ElastiCache',
      metricName: metric,
      dimensionsMap: {
        CacheClusterId: name,
      },
    });
    let graphWidget = new GraphWidget({
      height: 6,
      width: 12,
    });
    graphWidget.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: `${metric} (expected)`,
        color: '#666666',
        usingMetrics: {
          m1: cloudwatchMetric,
        },
      }),
    );
    graphWidget.addRightMetric(cloudwatchMetric);
    return graphWidget;
  }
}