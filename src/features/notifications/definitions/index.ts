import { aidsNotificationDefinition } from "@/features/notifications/definitions/aids"
import { venomousAnimalNotificationDefinition } from "@/features/notifications/definitions/venomous-animal"

import { botulismNotificationDefinition } from "@/features/notifications/definitions/botulism"
import { choleraNotificationDefinition } from "@/features/notifications/definitions/cholera"
import { whoopingCoughNotificationDefinition } from "@/features/notifications/definitions/whooping-cough"

export { aidsNotificationDefinition, venomousAnimalNotificationDefinition, botulismNotificationDefinition, choleraNotificationDefinition }
export * from "@/features/notifications/definitions/shared"

export const notificationTypeDefinitionList = [
  aidsNotificationDefinition,
  venomousAnimalNotificationDefinition,
  botulismNotificationDefinition,
  choleraNotificationDefinition,
  whoopingCoughNotificationDefinition,
] as const

export const notificationTypeDefinitions = {
  aids: aidsNotificationDefinition,
  venomous_animal: venomousAnimalNotificationDefinition,
  botulism: botulismNotificationDefinition,
  cholera: choleraNotificationDefinition,
  whooping_cough: whoopingCoughNotificationDefinition,
} as const
