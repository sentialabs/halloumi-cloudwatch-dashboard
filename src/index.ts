import { AutoScalingGroup, CfnAutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { Dashboard as cdkDashboard, DashboardProps, PeriodOverride } from '@aws-cdk/aws-cloudwatch';
import { CfnReplicationGroup } from '@aws-cdk/aws-elasticache';
import { BaseLoadBalancer, CfnLoadBalancer } from '@aws-cdk/aws-elasticloadbalancingv2';
import { CfnDBCluster } from '@aws-cdk/aws-rds';
import { Construct } from '@aws-cdk/core';
import { AutoScaling } from './auto-scaling';
import { LoadBalancer } from './load-balancer';
import { Rds } from './rds';
import { Redis } from './redis';

export interface HalloumiDashboard extends DashboardProps {
  /**
   * List of LoadBalancers.
   *
   * If set, must only contain a list of LoadBalancer or Dictionary "{ 'name': string, 'full_name': string }"
   *
   * @default - None
   * @stability stable
   */
  readonly loadBalancer?: (BaseLoadBalancer | CfnLoadBalancer | { [name: string]: string; full_name: string })[];

  /**
   * List of AutoScaling.
   *
   * If set, must only contain a list of AutoScaling
   *
   * @default - None
   * @stability stable
   */
  readonly autoScaling?: (AutoScalingGroup | CfnAutoScalingGroup)[];

  /**
   * List of RDS.
   *
   * If set, must only contain a list of RDS
   *
   * @default - None
   * @stability stable
   */
  readonly rds?: (CfnDBCluster)[];

  /**
   * List of Elasticache.
   *
   * If set, must only contain a list of Elasticache
   *
   * @default - None
   * @stability stable
   */
  readonly elasticache?: (CfnReplicationGroup)[];
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

    if (props?.loadBalancer) {
      for (let i=0; i<props.loadBalancer.length; i++) {
        let loadBalancer = props.loadBalancer[i];
        let name;
        let full_name;
        if (loadBalancer instanceof BaseLoadBalancer) {
          name = loadBalancer.loadBalancerName;
          full_name = loadBalancer.loadBalancerFullName;
        } else if (loadBalancer instanceof CfnLoadBalancer) {
          name = loadBalancer.attrLoadBalancerName;
          full_name = loadBalancer.attrLoadBalancerFullName;
        } else {
          name = loadBalancer.name,
          full_name = loadBalancer.full_name;
        }
        const lbWidgets = LoadBalancer.metrics(name, full_name);
        lbWidgets.forEach(widget => {
          dashboard.addWidgets(widget);
        });
      }
    }

    if (props?.autoScaling) {
      for (let i=0; i<props.autoScaling.length; i++) {
        let auto_scaling_group = props.autoScaling[i];
        let maxCapacity;
        let name = auto_scaling_group.autoScalingGroupName;

        if (auto_scaling_group instanceof CfnAutoScalingGroup) {
          name = auto_scaling_group.ref;
          maxCapacity = parseInt(auto_scaling_group.maxSize);
          dashboard.node.addDependency(auto_scaling_group);
        }

        let autoScalingWidgets = AutoScaling.metrics(name, maxCapacity);
        autoScalingWidgets.forEach(widget => {
          dashboard.addWidgets(widget);
        });
      }
    }

    if (props?.elasticache) {
      for (let i=0; i<props.elasticache.length; i++) {
        let elasticache = props.elasticache[i];
        let name = elasticache.ref;
        let numNodes = elasticache.numNodeGroups || 1;

        for (let node=1; node<=numNodes; node++) {
          let nodeId = name + '-' + node.toString().padStart(3, '0');
          let elasticacheWidgets = Redis.metrics(nodeId);
          elasticacheWidgets.forEach(widget => {
            dashboard.addWidgets(widget);
          });
        }
      }
    }

    if (props?.rds) {
      for (let i=0; i<props.rds.length; i++) {
        let rds_cluster = props.rds[i];
        let name = rds_cluster.ref;

        let rdsWidgets = Rds.metrics(name);
        rdsWidgets.forEach(widget => {
          dashboard.addWidgets(widget);
        });
      }
    }
  }
}