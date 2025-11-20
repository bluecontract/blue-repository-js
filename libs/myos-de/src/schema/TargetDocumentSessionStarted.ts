import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const TargetDocumentSessionStartedSchema = withTypeBlueId(
  blueIds['Target Document Session Started']
)(
  z.object({
    document: blueNodeField().optional(),
    initiatorSessionIds: z.array(z.string()).optional(),
    name: z.string().optional(),
  })
);

export type TargetDocumentSessionStarted = z.infer<
  typeof TargetDocumentSessionStartedSchema
>;
