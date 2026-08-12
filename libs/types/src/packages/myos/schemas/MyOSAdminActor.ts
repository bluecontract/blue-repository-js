import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PrincipalActorSchema } from './PrincipalActor';

const zod = z as any;

export const MyOSAdminActorSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Admin Actor']
)(
  PrincipalActorSchema.extend({
    accountId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSAdminActor = z.infer<typeof MyOSAdminActorSchema>;
