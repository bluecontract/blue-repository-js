import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const IssueChildPayNoteRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Issue Child PayNote Requested']
)(
  RequestSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type IssueChildPayNoteRequested = z.infer<
  typeof IssueChildPayNoteRequestedSchema
>;
