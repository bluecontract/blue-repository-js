import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';

const zod = z as any;

export const PrincipalActorSchema: any = withTypeBlueId(
  blueIds['Coordination/Principal Actor']
)(
  ActorSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PrincipalActor = z.infer<typeof PrincipalActorSchema>;
