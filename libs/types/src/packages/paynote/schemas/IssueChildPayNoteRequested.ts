import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const IssueChildPayNoteRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Issue Child PayNote Requested']
)(
  RequestSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type IssueChildPayNoteRequested = z.infer<
  typeof IssueChildPayNoteRequestedSchema
>;
