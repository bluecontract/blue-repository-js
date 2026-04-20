import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PrincipalActorSchema } from '../../conversation/schemas/PrincipalActor';

export const MyOSPrincipalActorSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Principal Actor']
)(
  PrincipalActorSchema.extend({
    accountId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSPrincipalActor = z.infer<typeof MyOSPrincipalActorSchema>;
