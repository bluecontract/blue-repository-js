import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralCollateralMarginTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralMarginTypeEnum']
  )(
    zod.enum(['InitialMargin', 'VariationMargin'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralCollateralMarginTypeEnum = z.infer<
  typeof CdmProductCollateralCollateralMarginTypeEnumSchema
>;
