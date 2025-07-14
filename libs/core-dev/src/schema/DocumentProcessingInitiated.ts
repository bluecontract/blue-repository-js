import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LifecycleEventSchema } from './LifecycleEvent';

export const DocumentProcessingInitiatedSchema = withTypeBlueId(
  blueIds['Document Processing Initiated']
)(
  LifecycleEventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type DocumentProcessingInitiated = z.infer<
  typeof DocumentProcessingInitiatedSchema
>;
