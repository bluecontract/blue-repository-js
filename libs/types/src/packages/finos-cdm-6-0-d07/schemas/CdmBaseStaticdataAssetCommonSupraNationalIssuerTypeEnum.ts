import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/SupraNationalIssuerTypeEnum'
    ]
  )(
    z.enum(['InternationalOrganisation', 'MultilateralBank'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema
>;
