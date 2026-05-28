import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralCollateralTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralTypeEnum']
  )(
    z.enum(['Cash', 'CashPool', 'NonCash'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralCollateralTypeEnum = z.infer<
  typeof CdmProductCollateralCollateralTypeEnumSchema
>;
