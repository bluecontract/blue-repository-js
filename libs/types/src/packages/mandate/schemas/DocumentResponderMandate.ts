import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MandateSchema } from './Mandate';

const zod = z as any;

export const DocumentResponderMandateSchema: any = withTypeBlueId(
  blueIds['Mandate/Document Responder Mandate']
)(
  MandateSchema.extend({
    authorizedInitialDocument: blueNodeField(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentResponderMandate = z.infer<
  typeof DocumentResponderMandateSchema
>;
