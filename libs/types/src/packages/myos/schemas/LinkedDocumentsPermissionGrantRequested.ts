import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionGrantRequestedSchema: any =
  withTypeBlueId(blueIds['MyOS/Linked Documents Permission Grant Requested'])(
    RequestSchema.extend({
      description: zod.string().optional(),
      links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
      name: zod.string().optional(),
      onBehalfOf: zod.string().optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type LinkedDocumentsPermissionGrantRequested = z.infer<
  typeof LinkedDocumentsPermissionGrantRequestedSchema
>;
