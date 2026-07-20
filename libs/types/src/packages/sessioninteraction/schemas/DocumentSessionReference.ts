import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const DocumentSessionReferenceSchema: any = withTypeBlueId(
  blueIds['SessionInteraction/Document Session Reference']
)(
  zod.object({
    description: zod.string().optional(),
    initialDocument: blueNodeField(),
    name: zod.string().optional(),
    providerId: zod.string(),
    sessionId: zod.string(),
  })
);

export type DocumentSessionReference = z.infer<
  typeof DocumentSessionReferenceSchema
>;
