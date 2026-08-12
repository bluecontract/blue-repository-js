import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const MyOSOperationCallRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Operation Call Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: blueNodeField().optional(),
    target: zod
      .object({
        channel: zod.string(),
        document: blueNodeField(),
        operation: zod.string(),
        requireExactDocumentVersion: zod.boolean().optional(),
      })
      .optional(),
  })
);

export type MyOSOperationCallRequested = z.infer<
  typeof MyOSOperationCallRequestedSchema
>;
