import { TextWidget, MathExpression, GraphWidget, Metric, IWidget } from 'aws-cdk-lib/aws-cloudwatch';

export class Rds {

  static metrics(name:string): IWidget[] {
    let header = new TextWidget({
      width: 24,
      height: 1,
      markdown: `# ${name} - RDS`,
    });

    let metrics = [
      'CPUUtilization',
      'FreeableMemory',
      'FreeLocalStorage',
      'DatabaseConnections',
      'DiskQueueDepth',
      'NetworkReceiveThroughput',
      'NetworkTransmitThroughput',
    ];

    let graph = Array();
    graph.push(header);

    metrics.forEach(metric => {
      graph.push(
        Rds.metricGraph(metric, name),
      );
    });
    return graph;
  }

  static metricGraph(metric: string, name: string): IWidget {
    let cloudwatchMetric = new Metric({
      namespace: 'AWS/RDS',
      metricName: metric,
      dimensionsMap: {
        DBInstanceIdentifier: name,
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