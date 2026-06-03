import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PrincipalActorSchema } from '../../coordination/schemas/PrincipalActor';

const zod = z as any;

export const MyOSPrincipalActorSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Principal Actor']
)(
  PrincipalActorSchema.extend({
    accountId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSPrincipalActor = z.infer<typeof MyOSPrincipalActorSchema>;
