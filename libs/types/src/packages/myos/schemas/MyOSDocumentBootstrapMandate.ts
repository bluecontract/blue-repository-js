import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentResponderMandateSchema } from '../../mandate/schemas/DocumentResponderMandate';
import { MyOSAdminActorSchema } from './MyOSAdminActor';

const zod = z as any;

export const MyOSDocumentBootstrapMandateSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Document Bootstrap Mandate']
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
    name: zod.string().optional(),
  })
);

export type MyOSDocumentBootstrapMandate = z.infer<
  typeof MyOSDocumentBootstrapMandateSchema
>;
