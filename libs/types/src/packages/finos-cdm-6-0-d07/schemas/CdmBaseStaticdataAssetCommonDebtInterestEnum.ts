import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDebtInterestEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtInterestEnum'
    ]
  )(
    zod.enum([
      'Fixed',
      'Floating',
      'IndexLinked',
      'InflationLinked',
      'InterestOnly',
      'InverseFloating',
      'OtherStructured',
      'ZeroCoupon',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDebtInterestEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtInterestEnumSchema
>;
