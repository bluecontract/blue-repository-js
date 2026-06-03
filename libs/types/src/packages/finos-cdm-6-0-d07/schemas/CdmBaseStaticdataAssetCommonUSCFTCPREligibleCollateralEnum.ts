import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/US_CFTC_PR_EligibleCollateralEnum'
    ]
  )(
    zod.enum([
      'US_CFTC_PRType1',
      'US_CFTC_PRType2',
      'US_CFTC_PRType3',
      'US_CFTC_PRType4',
      'US_CFTC_PRType5A',
      'US_CFTC_PRType5B',
      'US_CFTC_PRType6',
      'US_CFTC_PRType7',
      'US_CFTC_PRType8A',
      'US_CFTC_PRType8B',
      'US_CFTC_PRType8C',
      'US_CFTC_PRType9',
      'US_CTFC_PRType10',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum =
  z.infer<
    typeof CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema
  >;
