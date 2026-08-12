import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PrincipalActorSchema as BasePrincipalActorSchema } from '../../coordination/schemas/PrincipalActor';

const zod = z as any;

export const PrincipalActorSchema: any = withTypeBlueId(
  blueIds['MyOS/Principal Actor']
)(
  BasePrincipalActorSchema.extend({
    accountId: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PrincipalActor = z.infer<typeof PrincipalActorSchema>;
