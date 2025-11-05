import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const IssueChildPayNoteRequestedSchema = withTypeBlueId(
  blueIds['Issue Child PayNote Requested']
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
