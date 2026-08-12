import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationMandateSchema } from '../../mandate/schemas/OperationMandate';
import { MyOSAdminActorSchema } from './MyOSAdminActor';
import { MyOSAgentActorSchema } from './MyOSAgentActor';
import { MyOSAgentOperationRuleSchema } from './MyOSAgentOperationRule';
import { PrincipalActorSchema } from './PrincipalActor';

const zod = z as any;

export const MyOSAgentOperationMandateSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Operation Mandate']
)(
  OperationMandateSchema.extend({
    contracts: zod
      .object({
        authorityHolderChannel: zod
          .object({
            actor: zod.lazy(() => PrincipalActorSchema).optional(),
          })
          .optional(),
        authorizedActorChannel: zod
          .object({
            actor: zod.lazy(() => MyOSAgentActorSchema).optional(),
          })
          .optional(),
        mandateGuarantorChannel: zod
          .object({
            actor: zod.lazy(() => MyOSAdminActorSchema).optional(),
          })
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    rules: zod.array(zod.lazy(() => MyOSAgentOperationRuleSchema)).optional(),
  })
);

export type MyOSAgentOperationMandate = z.infer<
  typeof MyOSAgentOperationMandateSchema
>;
