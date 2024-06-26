import type schedule from 'node-schedule'
import { type Payload } from 'payload'

export interface PluginTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean
  /**
   * Array of configuration for the scheduler
   * @default []
   */
  scheduler?: {
    /**
     * Configuration for the schedule.
     * Supports Cron-style Scheduling, Date-based Scheduling and Recurrence Rule Scheduling.
     * @default '* * * * *' (once per minute)
     */
    schedule?:
      | string
      | number
      | Date
      | schedule.RecurrenceRule
      | schedule.RecurrenceSpecDateRange
      | schedule.RecurrenceSpecObjLit
    /**
     * Function that should be run.
     */
    callback: (payload: Payload, fireDate: Date) => void
  }[]
}

export interface NewCollectionTypes {
  title: string
}
