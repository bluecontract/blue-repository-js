import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

const zod = z as any;

export const LinkedDocumentsPermissionGrantingInProgressSchema: any =
  withTypeBlueId(
    blueIds['MyOS/Linked Documents Permission Granting in Progress']
  )(
    ResponseSchema.extend({
      description: zod.string().optional(),
      links: zod.lazy(() => LinkedDocumentsPermissionSetSchema).optional(),
      name: zod.string().optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type LinkedDocumentsPermissionGrantingInProgress = z.infer<
  typeof LinkedDocumentsPermissionGrantingInProgressSchema
>;
