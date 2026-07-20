import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { OperationMandateSchema } from '../../mandate/schemas/OperationMandate';
import { MyOSAdminActorSchema } from './MyOSAdminActor';

const zod = z as any;

export const MyOSDocumentOperationMandateSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Document Operation Mandate']
)(
  OperationMandateSchema.extend({
    authorizedInitialDocument: blueNodeField(),
    contracts: zod
      .object({
        authorizedActorChannel: zod
          .object({
            actor: zod.lazy(() => MyOSAdminActorSchema).optional(),
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
  })
);

export type MyOSDocumentOperationMandate = z.infer<
  typeof MyOSDocumentOperationMandateSchema
>;
