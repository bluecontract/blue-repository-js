import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';

const zod = z as any;

export const SingleDocumentPermissionRevokingInProgressSchema: any =
  withTypeBlueId(
    blueIds['MyOS/Single Document Permission Revoking in Progress']
  )(
    ResponseSchema.extend({
      description: zod.string().optional(),
      name: zod.string().optional(),
      note: zod.string().optional(),
      permissions: zod.lazy(() => SingleDocumentPermissionSetSchema).optional(),
      targetSessionId: zod.string().optional(),
    })
  );

export type SingleDocumentPermissionRevokingInProgress = z.infer<
  typeof SingleDocumentPermissionRevokingInProgressSchema
>;
