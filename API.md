# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="halloumi-cloudwatch-dashboard.Dashboard"></a>

An AWS CloudWatch Dashboard.

*Example*

```typescript
// create a dashboard for AutoScaling
new Dashboard(this, 'dashboard', {
   autoScalingName: 'my-auto-scaling',
   autoScalingMaxCapacity: 10
});
```


#### Initializers <a name="Initializers" id="halloumi-cloudwatch-dashboard.Dashboard.Initializer"></a>

```typescript
import { Dashboard } from 'halloumi-cloudwatch-dashboard'

new Dashboard(scope: Construct, id: string, props?: HalloumiDashboard)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the scope into which to import this dashboard. |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | the logical ID of the returned dashboard construct. |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.props">props</a></code> | <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard">HalloumiDashboard</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the scope into which to import this dashboard.

---

##### `id`<sup>Required</sup> <a name="id" id="halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* string

the logical ID of the returned dashboard construct.

---

##### `props`<sup>Optional</sup> <a name="props" id="halloumi-cloudwatch-dashboard.Dashboard.Initializer.parameter.props"></a>

- *Type:* <a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard">HalloumiDashboard</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="halloumi-cloudwatch-dashboard.Dashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="halloumi-cloudwatch-dashboard.Dashboard.isConstruct"></a>

```typescript
import { Dashboard } from 'halloumi-cloudwatch-dashboard'

Dashboard.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="halloumi-cloudwatch-dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#halloumi-cloudwatch-dashboard.Dashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="halloumi-cloudwatch-dashboard.Dashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### HalloumiDashboard <a name="HalloumiDashboard" id="halloumi-cloudwatch-dashboard.HalloumiDashboard"></a>

#### Initializer <a name="Initializer" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.Initializer"></a>

```typescript
import { HalloumiDashboard } from 'halloumi-cloudwatch-dashboard'

const halloumiDashboard: HalloumiDashboard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.dashboardName">dashboardName</a></code> | <code>string</code> | Name of the dashboard. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.end">end</a></code> | <code>string</code> | The end of the time range to use for each widget on the dashboard when the dashboard loads. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.periodOverride">periodOverride</a></code> | <code>aws-cdk-lib.aws_cloudwatch.PeriodOverride</code> | Use this field to specify the period for the graphs when the dashboard loads. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.start">start</a></code> | <code>string</code> | The start of the time range to use for each widget on the dashboard. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.widgets">widgets</a></code> | <code>aws-cdk-lib.aws_cloudwatch.IWidget[][]</code> | Initial set of widgets on the dashboard. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.autoScaling">autoScaling</a></code> | <code>aws-cdk-lib.aws_autoscaling.AutoScalingGroup \| aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup \| {[ key: string ]: string \| number \| number[]}[]</code> | List of AutoScaling. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.elasticache">elasticache</a></code> | <code>aws-cdk-lib.aws_elasticache.CfnReplicationGroup \| {[ key: string ]: string \| number}[]</code> | List of Elasticache. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.CfnLoadBalancer \| aws-cdk-lib.aws_elasticloadbalancingv2.BaseLoadBalancer \| {[ key: string ]: string}[]</code> | List of LoadBalancers. |
| <code><a href="#halloumi-cloudwatch-dashboard.HalloumiDashboard.property.rds">rds</a></code> | <code>aws-cdk-lib.aws_rds.CfnDBCluster[]</code> | List of RDS. |

---

##### `dashboardName`<sup>Optional</sup> <a name="dashboardName" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string
- *Default:* automatically generated name

Name of the dashboard.

If set, must only contain alphanumerics, dash (-) and underscore (_)

---

##### `end`<sup>Optional</sup> <a name="end" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string
- *Default:* When the dashboard loads, the end date will be the current time.

The end of the time range to use for each widget on the dashboard when the dashboard loads.

If you specify a value for end, you must also specify a value for start.
Specify an absolute time in the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.

---

##### `periodOverride`<sup>Optional</sup> <a name="periodOverride" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.periodOverride"></a>

```typescript
public readonly periodOverride: PeriodOverride;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.PeriodOverride
- *Default:* Auto

Use this field to specify the period for the graphs when the dashboard loads.

Specifying `Auto` causes the period of all graphs on the dashboard to automatically adapt to the time range of the dashboard.
Specifying `Inherit` ensures that the period set for each graph is always obeyed.

---

##### `start`<sup>Optional</sup> <a name="start" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string
- *Default:* When the dashboard loads, the start time will be the default time range.

The start of the time range to use for each widget on the dashboard.

You can specify start without specifying end to specify a relative time range that ends with the current time.
In this case, the value of start must begin with -P, and you can use M, H, D, W and M as abbreviations for
minutes, hours, days, weeks and months. For example, -PT8H shows the last 8 hours and -P3M shows the last three months.
You can also use start along with an end field, to specify an absolute time range.
When specifying an absolute time range, use the ISO 8601 format. For example, 2018-12-17T06:00:00.000Z.

---

##### `widgets`<sup>Optional</sup> <a name="widgets" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.widgets"></a>

```typescript
public readonly widgets: IWidget[][];
```

- *Type:* aws-cdk-lib.aws_cloudwatch.IWidget[][]
- *Default:* No widgets

Initial set of widgets on the dashboard.

One array represents a row of widgets.

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.autoScaling"></a>

```typescript
public readonly autoScaling: AutoScalingGroup | CfnAutoScalingGroup | {[ key: string ]: string | number | number[]}[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.AutoScalingGroup | aws-cdk-lib.aws_autoscaling.CfnAutoScalingGroup | {[ key: string ]: string | number | number[]}[]
- *Default:* None

List of AutoScaling.

If set, must only contain a list of AutoScaling or Dictionary "{ 'name': string, 'max_capacity': number }"

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.elasticache"></a>

```typescript
public readonly elasticache: CfnReplicationGroup | {[ key: string ]: string | number}[];
```

- *Type:* aws-cdk-lib.aws_elasticache.CfnReplicationGroup | {[ key: string ]: string | number}[]
- *Default:* None

List of Elasticache.

If set, must only contain a list of Elasticache or Dictionary "{ 'name': string, 'nodes': number }" with nodes being optional

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: CfnLoadBalancer | BaseLoadBalancer | {[ key: string ]: string}[];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.CfnLoadBalancer | aws-cdk-lib.aws_elasticloadbalancingv2.BaseLoadBalancer | {[ key: string ]: string}[]
- *Default:* None

List of LoadBalancers.

If set, must only contain a list of LoadBalancer or Dictionary "{ 'name': string, 'full_name': string }"

---

##### `rds`<sup>Optional</sup> <a name="rds" id="halloumi-cloudwatch-dashboard.HalloumiDashboard.property.rds"></a>

```typescript
public readonly rds: CfnDBCluster[];
```

- *Type:* aws-cdk-lib.aws_rds.CfnDBCluster[]
- *Default:* None

List of RDS.

If set, must only contain a list of RDS

---



