import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituent';
import { CdmProductAssetDividendPaymentDateSchema } from './CdmProductAssetDividendPaymentDate';

export const CdmProductAssetDividendPeriodSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPeriod']
)(
  z.object({
    basketConstituent: z
      .lazy(
        () =>
          CdmObservableAssetMetafieldsReferenceWithMetaBasketConstituentSchema
      )
      .optional(),
    dateAdjustments: z.lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema),
    description: z.string().optional(),
    dividendPaymentDate: z.lazy(() => CdmProductAssetDividendPaymentDateSchema),
    dividendValuationDate: z
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    endDate: z.lazy(() => CdmProductAssetDividendPaymentDateSchema).optional(),
    name: z.string().optional(),
    startDate: z
      .lazy(() => CdmProductAssetDividendPaymentDateSchema)
      .optional(),
  })
);

export type CdmProductAssetDividendPeriod = z.infer<
  typeof CdmProductAssetDividendPeriodSchema
>;
