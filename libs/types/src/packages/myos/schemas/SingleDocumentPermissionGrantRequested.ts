import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const SingleDocumentPermissionGrantRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Grant Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.string().optional(),
    permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SingleDocumentPermissionGrantRequested = z.infer<
  typeof SingleDocumentPermissionGrantRequestedSchema
>;
