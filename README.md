# Payload Plugin Schedule

This is an scheduler [Payload CMS](https://payloadcms.com) plugin.

It allows to create callbacks and execute these at a given schedule.

## Background

Here is a short recap on how to integrate plugins with Payload, to learn more visit the [plugin overview page](https://payloadcms.com/docs/plugins/overview).

### How to install a plugin

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
