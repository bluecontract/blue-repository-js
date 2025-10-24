import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '@blue-repository/core-dev';

export const PrincipalActorSchema = withTypeBlueId(blueIds['Principal Actor'])(
  ActorSchema.extend({
    accountId: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PrincipalActor = z.infer<typeof PrincipalActorSchema>;
