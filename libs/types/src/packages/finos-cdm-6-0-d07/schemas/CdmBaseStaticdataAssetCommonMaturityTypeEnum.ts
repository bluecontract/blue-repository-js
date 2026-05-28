import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/MaturityTypeEnum'
    ]
  )(
    z.enum(['FromIssuance', 'OriginalMaturity', 'RemainingMaturity'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonMaturityTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonMaturityTypeEnumSchema
>;
