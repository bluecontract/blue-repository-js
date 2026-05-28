import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';

export const PrincipalActorSchema = withTypeBlueId(
  blueIds['Coordination/Principal Actor']
)(
  ActorSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PrincipalActor = z.infer<typeof PrincipalActorSchema>;
