# API Reference

**Classes**

Name|Description
----|-----------
[Dashboard](#halloumi-cloudwatch-dashboard-dashboard)|An AWS CloudWatch Dashboard.


**Structs**

Name|Description
----|-----------
[HalloumiDashboard](#halloumi-cloudwatch-dashboard-halloumidashboard)|*No description*



## class Dashboard  <a id="halloumi-cloudwatch-dashboard-dashboard"></a>

An AWS CloudWatch Dashboard.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer


Creates a Dashboard based on the Halloumi best practices.

```ts
new Dashboard(scope: Construct, id: string, props?: HalloumiDashboard)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  the scope into which to import this dashboard.
* **id** (<code>string</code>)  the logical ID of the returned dashboard construct.
* **props** (<code>[HalloumiDashboard](#halloumi-cloudwatch-dashboard-halloumidashboard)</code>)  *No description*
  * **dashboardName** (<code>string</code>)  Name of the dashboard. __*Default*__: automatically generated name
  * **end** (<code>string</code>)  The end of the time range to use for each widget on the dashboard when the dashboard loads. __*Default*__: When the dashboard loads, the end date will be the current time.
  * **periodOverride** (<code>[PeriodOverride](#aws-cdk-aws-cloudwatch-periodoverride)</code>)  Use this field to specify the period for the graphs when the dashboard loads. __*Default*__: Auto
  * **start** (<code>string</code>)  The start of the time range to use for each widget on the dashboard. __*Default*__: When the dashboard loads, the start time will be the default time range.
  * **widgets** (<code>Array<Array<[IWidget](#aws-cdk-aws-cloudwatch-iwidget)>></code>)  Initial set of widgets on the dashboard. __*Default*__: No widgets
  * **autoScaling** (<code>Array<[AutoScalingGroup](#aws-cdk-aws-autoscaling-autoscalinggroup) &#124; [CfnAutoScalingGroup](#aws-cdk-aws-autoscaling-cfnautoscalinggroup)></code>)  List of AutoScaling. __*Default*__: None
  * **elasticache** (<code>Array<[CfnReplicationGroup](#aws-cdk-aws-elasticache-cfnreplicationgroup)></code>)  List of Elasticache. __*Default*__: None
  * **loadBalancer** (<code>Array<[BaseLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-baseloadbalancer) &#124; [CfnLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-cfnloadbalancer)></code>)  List of LoadBalancers. __*Default*__: None
  * **rds** (<code>Array<[CfnDBCluster](#aws-cdk-aws-rds-cfndbcluster)></code>)  List of RDS. __*Default*__: None




## struct HalloumiDashboard  <a id="halloumi-cloudwatch-dashboard-halloumidashboard"></a>






Name | Type | Description 
-----|------|-------------
**autoScaling**? | <code>Array<[AutoScalingGroup](#aws-cdk-aws-autoscaling-autoscalinggroup) &#124; [CfnAutoScalingGroup](#aws-cdk-aws-autoscaling-cfnautoscalinggroup)></code> | List of AutoScaling.<br/>__*Default*__: None
**dashboardName**? | <code>string</code> | Name of the dashboard.<br/>__*Default*__: automatically generated name
**elasticache**? | <code>Array<[CfnReplicationGroup](#aws-cdk-aws-elasticache-cfnreplicationgroup)></code> | List of Elasticache.<br/>__*Default*__: None
**end**? | <code>string</code> | The end of the time range to use for each widget on the dashboard when the dashboard loads.<br/>__*Default*__: When the dashboard loads, the end date will be the current time.
**loadBalancer**? | <code>Array<[BaseLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-baseloadbalancer) &#124; [CfnLoadBalancer](#aws-cdk-aws-elasticloadbalancingv2-cfnloadbalancer)></code> | List of LoadBalancers.<br/>__*Default*__: None
**periodOverride**? | <code>[PeriodOverride](#aws-cdk-aws-cloudwatch-periodoverride)</code> | Use this field to specify the period for the graphs when the dashboard loads.<br/>__*Default*__: Auto
**rds**? | <code>Array<[CfnDBCluster](#aws-cdk-aws-rds-cfndbcluster)></code> | List of RDS.<br/>__*Default*__: None
**start**? | <code>string</code> | The start of the time range to use for each widget on the dashboard.<br/>__*Default*__: When the dashboard loads, the start time will be the default time range.
**widgets**? | <code>Array<Array<[IWidget](#aws-cdk-aws-cloudwatch-iwidget)>></code> | Initial set of widgets on the dashboard.<br/>__*Default*__: No widgets



