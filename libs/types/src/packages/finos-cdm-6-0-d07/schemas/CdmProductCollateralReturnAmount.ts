import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralReturnAmountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ReturnAmount']
)(
  zod.object({
    customElection: zod.string().optional(),
    description: zod.string().optional(),
    includesDefaultLanguage: zod.boolean().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralReturnAmount = z.infer<
  typeof CdmProductCollateralReturnAmountSchema
>;
