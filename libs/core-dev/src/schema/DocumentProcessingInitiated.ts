import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LifecycleEventSchema } from './LifecycleEvent';

export const DocumentProcessingInitiatedSchema = withTypeBlueId(
  blueIds['Document Processing Initiated']
)(
  LifecycleEventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type DocumentProcessingInitiated = z.infer<
  typeof DocumentProcessingInitiatedSchema
>;
