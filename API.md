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
  * **autoScalingMaxCapacity** (<code>number</code>)  Max Capacity of the AutoScaling. __*Default*__: 0
  * **autoScalingName** (<code>string</code>)  Name of the AutoScaling. __*Default*__: None
  * **elasticacheName** (<code>string</code>)  Name of the Elasticache. __*Default*__: None
  * **loadBalancerFullName** (<code>string</code>)  Full Name of the Load Balancer. __*Default*__: None
  * **loadBalancerName** (<code>string</code>)  Name of the Load Balancer. __*Default*__: None
  * **rdsName** (<code>string</code>)  Name of the RDS. __*Default*__: None




## struct HalloumiDashboard  <a id="halloumi-cloudwatch-dashboard-halloumidashboard"></a>






Name | Type | Description 
-----|------|-------------
**autoScalingMaxCapacity**? | <code>number</code> | Max Capacity of the AutoScaling.<br/>__*Default*__: 0
**autoScalingName**? | <code>string</code> | Name of the AutoScaling.<br/>__*Default*__: None
**dashboardName**? | <code>string</code> | Name of the dashboard.<br/>__*Default*__: automatically generated name
**elasticacheName**? | <code>string</code> | Name of the Elasticache.<br/>__*Default*__: None
**end**? | <code>string</code> | The end of the time range to use for each widget on the dashboard when the dashboard loads.<br/>__*Default*__: When the dashboard loads, the end date will be the current time.
**loadBalancerFullName**? | <code>string</code> | Full Name of the Load Balancer.<br/>__*Default*__: None
**loadBalancerName**? | <code>string</code> | Name of the Load Balancer.<br/>__*Default*__: None
**periodOverride**? | <code>[PeriodOverride](#aws-cdk-aws-cloudwatch-periodoverride)</code> | Use this field to specify the period for the graphs when the dashboard loads.<br/>__*Default*__: Auto
**rdsName**? | <code>string</code> | Name of the RDS.<br/>__*Default*__: None
**start**? | <code>string</code> | The start of the time range to use for each widget on the dashboard.<br/>__*Default*__: When the dashboard loads, the start time will be the default time range.
**widgets**? | <code>Array<Array<[IWidget](#aws-cdk-aws-cloudwatch-iwidget)>></code> | Initial set of widgets on the dashboard.<br/>__*Default*__: No widgets



