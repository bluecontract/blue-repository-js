import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
import { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';

const zod = z as any;

export const CdmProductAssetDividendPeriodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPeriod']
)(
  zod.object({
    basketConstituent: zod
      .lazy(
        () =>
          CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema
      )
      .optional(),
    dateAdjustments: zod.lazy(
      () => CdmBaseDatetimeBusinessDayAdjustmentsSchema
    ),
    description: zod.string().optional(),
    dividendPaymentDate: zod.lazy(
      () => CdmProductAssetDividendPaymentDateSchema
    ),
    dividendValuationDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    endDate: zod
      .lazy(() => CdmProductAssetDividendPaymentDateSchema)
      .optional(),
    name: zod.string().optional(),
    startDate: zod
      .lazy(() => CdmProductAssetDividendPaymentDateSchema)
      .optional(),
  })
);

export type CdmProductAssetDividendPeriod = z.infer<
  typeof CdmProductAssetDividendPeriodSchema
>;
