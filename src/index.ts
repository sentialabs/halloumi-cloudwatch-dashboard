import { Dashboard as cdkDashboard, DashboardProps, PeriodOverride } from '@aws-cdk/aws-cloudwatch';
import { AutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { Construct } from '@aws-cdk/core';
import { AutoScaling, SimpleAutoScalingGroup } from './auto-scaling';
import { LoadBalancer } from './load-balancer';
import { Rds } from './rds';
import { Redis } from './redis';

export { SimpleAutoScalingGroup } from './auto-scaling';
export interface HalloumiDashboard extends DashboardProps {
  /**
   * Name of the Load Balancer.
   *
   * If set, must only contain alphanumerics, dash (-) and underscore (_)
   *
   * @default - None
   * @stability stable
   */
  readonly loadBalancerName?: string;

  /**
   * Full Name of the Load Balancer.
   *
   * If set, must only contain alphanumerics, dash (-) and underscore (_)
   *
   * @default - None
   * @stability stable
   */
  readonly loadBalancerFullName?: string;

  /**
   * List of AutoScaling.
   *
   * If set, must only contain a list of AutoScaling
   *
   * @default - None
   * @stability stable
   */
   readonly autoScaling?: AutoScalingGroup[] | SimpleAutoScalingGroup[];

  /**
   * Name of the RDS.
   *
   * If set, must only contain alphanumerics, dash (-) and underscore (_)
   *
   * @default - None
   * @stability stable
   */
  readonly rdsName?: string;

  /**
   * Name of the Elasticache.
   *
   * If set, must only contain alphanumerics, dash (-) and underscore (_)
   *
   * @default - None
   * @stability stable
   */
  readonly elasticacheName?: string;
}

/**
 * An AWS CloudWatch Dashboard.
 *
 * @example
 * // create a dashboard for AutoScaling
 * new Dashboard(this, 'dashboard', {
 *    autoScalingName: 'my-auto-scaling',
 *    autoScalingMaxCapacity: 10
 * });
 *
 */
export class Dashboard extends Construct {
  /**
   * Creates a Dashboard based on the Halloumi best practices.
   *
   * @param scope the scope into which to import this dashboard
   * @param id the logical ID of the returned dashboard construct
   */
  constructor(scope: Construct, id: string, props?: HalloumiDashboard) {
    super(scope, id);

    let start = props?.start ? props.start : '-PT24H';
    let periodOverride = props?.periodOverride ? props.periodOverride : PeriodOverride.INHERIT;

    const dashboard = new cdkDashboard(this, id, {
      dashboardName: props?.dashboardName,
      start: start,
      end: props?.end,
      periodOverride: periodOverride,
      widgets: props?.widgets,
    });

    if (props?.loadBalancerFullName && props?.loadBalancerName) {
      const lbWidgets = LoadBalancer.metrics(props.loadBalancerName, props.loadBalancerFullName);
      lbWidgets.forEach(widget => {
        dashboard.addWidgets(widget);
      });
    }

    if (props?.autoScaling) {
      for (let i=0; i<props.autoScaling.length; i++) {
        let auto_scaling_group = props.autoScaling[i];
        if (auto_scaling_group instanceof AutoScalingGroup){
          let autoScalingWidgets = AutoScaling.metrics(auto_scaling_group.autoScalingGroupName);
          autoScalingWidgets.forEach(widget => {
            dashboard.addWidgets(widget);
          }); 
        } else if (auto_scaling_group instanceof SimpleAutoScalingGroup){
            let autoScalingWidgets = AutoScaling.metrics(auto_scaling_group.autoScalingGroupName, auto_scaling_group.autoScalingGroupMaxCapacity);
            autoScalingWidgets.forEach(widget => {
              dashboard.addWidgets(widget);
            });
        }
      }
    }

    if (props?.rdsName) {
      const rdsWidgets = Rds.metrics(props.rdsName);
      rdsWidgets.forEach(widget => {
        dashboard.addWidgets(widget);
      });
    }

    if (props?.elasticacheName) {
      const redisWidgets = Redis.metrics(props.elasticacheName);
      redisWidgets.forEach(widget => {
        dashboard.addWidgets(widget);
      });
    }
  }
}