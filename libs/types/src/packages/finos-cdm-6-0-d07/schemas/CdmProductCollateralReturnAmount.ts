import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralReturnAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ReturnAmount']
  )(
    z.object({
      customElection: z.string().optional(),
      description: z.string().optional(),
      includesDefaultLanguage: z.boolean().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralReturnAmount = z.infer<
  typeof CdmProductCollateralReturnAmountSchema
>;
