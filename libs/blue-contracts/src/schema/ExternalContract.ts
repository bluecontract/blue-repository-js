import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ExternalContractSchema = withTypeBlueId(blueIds.ExternalContract)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    localContractInstanceId: z.number().optional(),
    initiateContractEntry: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type ExternalContract = z.infer<typeof ExternalContractSchema>;
