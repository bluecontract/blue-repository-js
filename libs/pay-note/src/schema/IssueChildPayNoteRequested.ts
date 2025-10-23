import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const IssueChildPayNoteRequestedSchema = withTypeBlueId(
  blueIds['Issue Child PayNote Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    childPayNote: blueNodeField().optional(),
  })
);

export type IssueChildPayNoteRequested = z.infer<
  typeof IssueChildPayNoteRequestedSchema
>;
