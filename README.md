# Halloumi Cloudwatch Dashboard

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![GitHub](https://img.shields.io/badge/github-sentiampc%2Fhalloumi--cloudwatch--dashboard-orange.svg)](https://github.com/sentiampc/halloumi-cloudwatch-dashboard)
[![PyPI version fury.io](https://badge.fury.io/py/halloumi-cloudwatch-dashboard.svg)](https://pypi.python.org/pypi/halloumi-cloudwatch-dashboard/)
[![npm version](https://badge.fury.io/js/halloumi-cloudwatch-dashboard.svg)](https://badge.fury.io/js/halloumi-cloudwatch-dashboard)
[![GitHub license](https://img.shields.io/github/license/sentiampc/halloumi-cloudwatch-dashboard.svg)](https://github.com/sentiampc/halloumi-cloudwatch-dashboard/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/sentiampc/halloumi-cloudwatch-dashboard.svg)](https://GitHub.com/sentiampc/halloumi-cloudwatch-dashboard/releases/)

Create a dashboard in the AWS Cloudwatch using the best practices from Halloumi.

## Install

From pip:
```bash
pip install halloumi-cloudwatch-dashboard
```

From npm:
```bash
npm require halloumi-cloudwatch-dashboard
```

## API Documentation

Check [API Documentation](./API.md)

## Usage

### Python

```python
from aws_cdk import core
from halloumi-cloudwatch-dashboard import Dashboard

app = core.App()

stack = core.Stack(app, 'MainStack')
...

Dashboard(
    stack,
    'Dashboard',
    dashboardName='MyDashboard'
)
```

### Typescript

```typescript
import * as cdk from '@aws-cdk/core';
import { Dashboard } from '@halloumi-cloudwatch-dashboard';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    Dashboard(this, 'Dashboard', dashboardName='MyDashboard');
  }
}
```