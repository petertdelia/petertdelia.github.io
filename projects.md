---
layout: page
title: Projects
subtitle: What I built with my own keyboard!
---

# [Workerholic](https://workerholic.github.io){:target="_blank"}

[![workerholic](/img/workerholic_logo-1.png){:width="230"}](https://workerholic.github.io){:target="_blank" style="float: left; margin-right: 20px;"}
**Workerholic is a Background Job Processor built from scratch** by myself and my two teammates. This is the story of how three Software Engineers decided to shed some light on Background Job Processors by building one from scratch. We started by understanding the use for a Background Job Processor (BJP), then, identifying the most popular ones in the Ruby-ecosystem and, finally, building one from scratch. In this post we will walk you through the proces of building a BJP from scratch and how we managed to build one, Workerholic, that compares to Sidekiq in terms of performance.

### Features

- Concurrency, parallel processing, and custom algorithms such as ASP (Adaptive and Successive Provisioning) algorithm, effectively putting **Workerholic's performance on par with Sidekiq's**
- Takes full advantage of Redis and its features (data types, efficiency, DB snapshots)
- High configurability through an easy-to-use CLI
- Provides a Web UI displaying real-time and historical data for up to a year
- Integrates with Rails and `ActiveJob`
- Runs on multiple Ruby implementations (MRI and JRuby)

[![demo_workerholic](/img/demo_workerholic_0.gif){:id="demo"}](https://workerholic.github.io){:target="_blank"}

# Other Projects

### Myflix

[![myflix_preview](/img/myflix_preview.png){:width="400"}](https://github.com/antoineleclercq/myflix){:target="_blank" style="float: left; margin-right: 20px;"}

A video subscription web service application with account management, administration capabilities, email notifications, possibility to invite friends, user following feature, subscription and payments handling.

<br>
**Tools:** *Ruby, Rails, TDD/BDD, Rspec, Capybara, Redis, Sidekiq, Amazon S3*


### Antrello

[![antrello_preview](/img/antrello_preview.png){:width="400"}](https://github.com/antoineleclercq/myflix){:target="_blank" style="float: left; margin-right: 20px;"}

 A project management web application based on Trello that allows for creation, deletion, archival, reorganization, labeling and keyword search of lists and cards in list.

<br>

 **Tools:** *JavaScript, Backbone, Express, PostgreSQL, Jasmine, Jade, Stylus, Handlebars*
