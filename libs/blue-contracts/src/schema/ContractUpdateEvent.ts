import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ContractUpdateEventSchema = withTypeBlueId(
  blueIds['Contract Update Event']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    changeset: blueNodeField().optional(),
  })
);

export type ContractUpdateEvent = z.infer<typeof ContractUpdateEventSchema>;
