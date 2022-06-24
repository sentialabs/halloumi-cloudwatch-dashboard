import { Duration } from 'aws-cdk-lib';
import { TextWidget, MathExpression, GraphWidget, Metric, IWidget } from 'aws-cdk-lib/aws-cloudwatch';

export class LoadBalancer {

  static metrics(name?:string, full_name?: string): IWidget[] {
    let header = new TextWidget({
      width: 24,
      height: 1,
      markdown: `# ${name} - Application Load Balancer`,
    });
    let requestCountMetric = new Metric({
      namespace: 'AWS/ApplicationELB',
      metricName: 'RequestCount',
      dimensionsMap: {
        LoadBalancer: full_name!,
      },
      period: Duration.seconds(300),
      statistic: 'Sum',
    });
    let responseTimeMetric = new Metric({
      namespace: 'AWS/ApplicationELB',
      metricName: 'TargetResponseTime',
      dimensionsMap: {
        LoadBalancer: full_name!,
      },
      period: Duration.seconds(300),
    });
    let requestCount = new GraphWidget({
      height: 6,
      width: 12,
    });
    requestCount.addRightMetric(requestCountMetric);
    requestCount.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'RequestCount (expected)',
        period: Duration.seconds(300),
        color: '#666666',
        usingMetrics: {
          m1: requestCountMetric,
        },
      }),
    );
    let responseTime = new GraphWidget({
      height: 6,
      width: 12,
    });
    responseTime.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'TargetResponseTime (expected)',
        period: Duration.seconds(300),
        color: '#666666',
        usingMetrics: {
          m1: responseTimeMetric,
        },
      }),
    );
    responseTime.addRightMetric(responseTimeMetric);
    return [header, requestCount, responseTime];
  }
}