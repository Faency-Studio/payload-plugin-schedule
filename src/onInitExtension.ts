import type { Payload } from 'payload/dist/payload'

import type { PluginTypes } from './types'

import schedule from 'node-schedule'

export const onInitExtension = async (
  pluginOptions: PluginTypes,
  payload: Payload,
): Promise<void> => {
  const { express: app } = payload

  if (!app || !pluginOptions.enabled || !pluginOptions?.scheduler) return

  try {
    pluginOptions.scheduler.forEach(scheduleConfig => {
      const job = schedule.scheduleJob(scheduleConfig.schedule ?? '* * * * *', fireDate =>
        scheduleConfig.callback(payload, fireDate),
      )
    })
  } catch (err: unknown) {
    payload.logger.error({ msg: 'Error in onInitExtension', err })
  }
}
