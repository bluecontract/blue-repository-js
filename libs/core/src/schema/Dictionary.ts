import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const DictionarySchema = withTypeBlueId(blueIds['Dictionary'])(
  z.object({
    description: z.string().optional(),
    keyType: blueNodeField().optional(),
    name: z.string().optional(),
    valueType: blueNodeField().optional(),
  })
);

export type Dictionary = z.infer<typeof DictionarySchema>;
