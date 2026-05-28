import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { CdmBaseStaticdataPartyPayerReceiverSchema } from './CdmBaseStaticdataPartyPayerReceiver';
import { CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaObservable';
import { CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaPriceSchedule';
import { CdmProductAssetCorrelationReturnTermsSchema } from './CdmProductAssetCorrelationReturnTerms';
import { CdmProductAssetDividendReturnTermsSchema } from './CdmProductAssetDividendReturnTerms';
import { CdmProductAssetPriceReturnTermsSchema } from './CdmProductAssetPriceReturnTerms';
import { CdmProductAssetVarianceReturnTermsSchema } from './CdmProductAssetVarianceReturnTerms';
import { CdmProductAssetVolatilityReturnTermsSchema } from './CdmProductAssetVolatilityReturnTerms';

export const CdmProductTemplatePortfolioReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PortfolioReturnTerms']
  )(
    z.object({
      correlationReturnTerms: z
        .lazy(() => CdmProductAssetCorrelationReturnTermsSchema)
        .optional(),
      description: z.string().optional(),
      dividendReturnTerms: z
        .lazy(() => CdmProductAssetDividendReturnTermsSchema)
        .optional(),
      finalValuationPrice: z
        .array(
          z.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      initialValuationPrice: z
        .array(
          z.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      interimValuationPrice: z
        .array(
          z.lazy(
            () =>
              CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      payerReceiver: z.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
      priceReturnTerms: z
        .lazy(() => CdmProductAssetPriceReturnTermsSchema)
        .optional(),
      quantity: z
        .lazy(
          () =>
            CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
        )
        .optional(),
      underlier: z.lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
      ),
      varianceReturnTerms: z
        .lazy(() => CdmProductAssetVarianceReturnTermsSchema)
        .optional(),
      volatilityReturnTerms: z
        .lazy(() => CdmProductAssetVolatilityReturnTermsSchema)
        .optional(),
    })
  );

export type CdmProductTemplatePortfolioReturnTerms = z.infer<
  typeof CdmProductTemplatePortfolioReturnTermsSchema
>;
