# Payload Plugin Schedule

This is an scheduler [Payload CMS](https://payloadcms.com) plugin.

It allows to create callbacks and execute these at a given schedule.

## How to install this plugin

To install this plugin, simply add it to your payload.config() in the Plugin array.

```ts
import { schedulePlugin } from 'payload-plugin-schedule';

export const config = buildConfig({
  plugins: [
    // You can pass options to the plugin
    schedulePlugin({
		  enabled: true,
      scheduler: [
        {
          callback: () => console.log("This will be printed once per minute.")
        },
        {
          schedule: "*/5 * * * *",
          callback: (payload) => {
            // We can do something with the payload object. For example use the local API
          }
        }
      ]
    }),
  ]
});
```

## How to configure this Plugin

This plugin is based upon node-schedule. and just provides an easy way to add scheduled functions via the payload config.

Lets list the options that are available:

| Key                | type          | default       | description   |
| ------------------ | ------------- | ------------- | ------------- |
| enabled            | boolean       | false         | Set to true to enable the plugin |
| scheduler          | array         | []            | Each object in this array creates one scheduled function |
| scheduler.schedule | Schedule      | * * * * *     | Supports all Scheduling options of [node-schedule](https://github.com/node-schedule/node-schedule?tab=readme-ov-file#cron-style-scheduling) |
| scheduler.callback | function      | false         | The function that should be run periodically |

Some properties are provided to the callback:

| Key                | type          | description   |
| ------------------ | ------------- | ------------- |
| payload            | Payload       | Payload object. Allows for example to use of the Local API |
| fireDate           | Date          | Date of when the callback should have been fired. **Not the current time.** |


## Contributing

This plugin is pretty new and no rules have been established jet. If you would like to contribute by writing code, fixing stuff, reporting bugs or providing ideas, please feel free to create a pull-request or commit an issue.

## Roadmap

Currently this is more of an collection of ideas on how to improve this plugin, not a commited roadmap.

- Add The apility to add and cancel crons programatically and make this functionality available in the payload config
