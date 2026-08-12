import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { DocumentResponderMandateSchema } from '../../mandate/schemas/DocumentResponderMandate';
import { MyOSAdminActorSchema } from './MyOSAdminActor';

const zod = z as any;

export const MyOSSessionSubscriptionMandateSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Mandate']
)(
  DocumentResponderMandateSchema.extend({
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
    linkedDocuments: zod
      .object({
        allowedAnchors: zod.array(zod.string()).optional(),
      })
      .optional(),
    name: zod.string().optional(),
    sourceDocumentSessionId: zod.string().optional(),
    sourceInitialDocument: blueNodeField(),
  })
);

export type MyOSSessionSubscriptionMandate = z.infer<
  typeof MyOSSessionSubscriptionMandateSchema
>;
