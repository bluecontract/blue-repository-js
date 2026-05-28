import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonEquityTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/EquityTypeEnum']
  )(
    z.enum(['NonConvertiblePreference', 'Ordinary'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonEquityTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonEquityTypeEnumSchema
>;
