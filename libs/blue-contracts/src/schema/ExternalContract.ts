import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const ExternalContractSchema = withTypeBlueId(blueIds.ExternalContract)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    localContractInstanceId: z.number().optional(),
    initiateContractEntry: blueNodeField().optional(),
  })
);

export type ExternalContract = z.infer<typeof ExternalContractSchema>;
