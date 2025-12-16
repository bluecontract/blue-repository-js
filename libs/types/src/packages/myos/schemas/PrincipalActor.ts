import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '../../conversation/schemas/Actor';

export const PrincipalActorSchema = withTypeBlueId(blueIds['MyOS/Principal Actor'])(
  ActorSchema.extend({
    "accountId": z.string().optional()
  })
);

export type PrincipalActor = z.infer<typeof PrincipalActorSchema>;
