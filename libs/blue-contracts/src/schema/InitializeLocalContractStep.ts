import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const InitializeLocalContractStepSchema = withTypeBlueId(
  blueIds.InitializeLocalContractStep
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    contract: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type InitializeLocalContractStep = z.infer<
  typeof InitializeLocalContractStepSchema
>;
