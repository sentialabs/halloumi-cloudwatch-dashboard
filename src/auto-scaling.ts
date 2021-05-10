import { IWidget, TextWidget, Metric, GraphWidget, MathExpression, GraphWidgetProps } from '@aws-cdk/aws-cloudwatch';

export class AutoScaling {
  static metrics(name?:string, max_capacity?: number): IWidget[] {
    let header = new TextWidget({
      width: 24,
      height: 1,
      markdown: `# ${name} - Auto Scaling Group`,
    });
    let groupInServiceInstancesMetric = new Metric({
      namespace: 'AWS/AutoScaling',
      metricName: 'GroupInServiceInstances',
      dimensions: {
        AutoScalingGroupName: name,
      },
    });
    let leftAnnotations: any = null;
    if ( typeof(max_capacity) == 'number') {
      leftAnnotations = [
        {
          label: 'Max Instances in ASG',
          value: max_capacity,
        },
      ];
    }
    let GroupInServiceInstancesProps:GraphWidgetProps = {
      height: 6,
      width: 12,
      leftYAxis: {
        min: 0,
        label: 'Instances',
        showUnits: false,
      },
      leftAnnotations: leftAnnotations,
    };
    let GroupInServiceInstances = new GraphWidget(GroupInServiceInstancesProps);
    GroupInServiceInstances.addRightMetric(groupInServiceInstancesMetric);
    GroupInServiceInstances.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'GroupInServiceInstances (expected)',
        color: '#666666',
        usingMetrics: {
          m1: groupInServiceInstancesMetric,
        },
      }),
    );

    let cpuUtilizationAverageMetric = new Metric({
      namespace: 'AWS/EC2',
      metricName: 'CPUUtilization',
      dimensions: {
        AutoScalingGroupName: name,
      },
      statistic: 'Average',
    });
    let cpuUtilizationAverage = new GraphWidget({
      height: 6,
      width: 12,
    });
    cpuUtilizationAverage.addRightMetric(cpuUtilizationAverageMetric);
    cpuUtilizationAverage.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'Average CPUUtilization (expected)',
        color: '#666666',
        usingMetrics: {
          m1: cpuUtilizationAverageMetric,
        },
      }),
    );

    let cpuUtilizationMaximumMetric = new Metric({
      namespace: 'AWS/EC2',
      metricName: 'CPUUtilization',
      dimensions: {
        AutoScalingGroupName: name,
      },
      statistic: 'Maximum',
    });
    let cpuUtilizationMaximum = new GraphWidget({
      height: 6,
      width: 12,
    });
    cpuUtilizationMaximum.addRightMetric(cpuUtilizationMaximumMetric);
    cpuUtilizationMaximum.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'Maximum CPUUtilization (expected)',
        color: '#666666',
        usingMetrics: {
          m1: cpuUtilizationMaximumMetric,
        },
      }),
    );

    let networkInMetric = new Metric({
      namespace: 'AWS/EC2',
      metricName: 'NetworkIn',
      dimensions: {
        AutoScalingGroupName: name,
      },
      statistic: 'Average',
    });
    let networkIn = new GraphWidget({
      height: 6,
      width: 12,
    });
    networkIn.addRightMetric(networkInMetric);
    networkIn.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'NetworkIn (expected)',
        color: '#666666',
        usingMetrics: {
          m1: networkInMetric,
        },
      }),
    );

    let networkOutMetric = new Metric({
      namespace: 'AWS/EC2',
      metricName: 'NetworkOut',
      dimensions: {
        AutoScalingGroupName: name,
      },
      statistic: 'Average',
    });
    let networkOut = new GraphWidget({
      height: 6,
      width: 12,
    });
    networkOut.addRightMetric(networkOutMetric);
    networkOut.addLeftMetric(
      new MathExpression({
        expression: 'ANOMALY_DETECTION_BAND(m1, 2)',
        label: 'NetworkOut (expected)',
        color: '#666666',
        usingMetrics: {
          m1: networkOutMetric,
        },
      }),
    );

    return [header, GroupInServiceInstances, cpuUtilizationAverage, cpuUtilizationMaximum, networkIn, networkOut];
  }
}