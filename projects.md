---
layout: page
title: Projects
subtitle: OSS And Personal Projects
---

## [Workerholic](https://workerholic.github.io){:target="_blank"} - 2017

[![workerholic](/img/workerholic_logo-1.png){:width="190"}](https://workerholic.github.io){:target="_blank" style="float: left; margin-right: 20px;"}
**Workerholic is an efficient and scalable Background Job Processor I built from scratch** with two teammates. The story behind Workerholic is about of how we decided to shed some light on Background Job Processors. We started by developing a deeper understanding about the use for a Background Job Processor (BJP), then we identified the most popular ones in the Ruby-ecosystem, and finally, we built one from scratch.

### Features

- Concurrency, parallel processing, and custom algorithms such as ASP (Adaptive and Successive Provisioning) algorithm, effectively putting **Workerholic's performance on par with Sidekiq's**
- Takes full advantage of Redis and its features (data types, efficiency, DB snapshots)
- High configurability through an easy-to-use CLI
- Provides a Web UI displaying real-time and historical data for up to a year
- Integrates with Rails and `ActiveJob`
- Runs on multiple Ruby implementations (MRI and JRuby)

[![demo_workerholic](/img/demo_workerholic_0.gif){:id="demo"}](https://workerholic.github.io){:target="_blank"}
