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

const zod = z as any;

export const CdmProductTemplatePortfolioReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/PortfolioReturnTerms']
)(
  zod.object({
    correlationReturnTerms: zod
      .lazy(() => CdmProductAssetCorrelationReturnTermsSchema)
      .optional(),
    description: zod.string().optional(),
    dividendReturnTerms: zod
      .lazy(() => CdmProductAssetDividendReturnTermsSchema)
      .optional(),
    finalValuationPrice: zod
      .array(
        zod.lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    initialValuationPrice: zod
      .array(
        zod.lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    interimValuationPrice: zod
      .array(
        zod.lazy(
          () => CdmObservableAssetMetafieldsReferenceWithMetaPriceScheduleSchema
        )
      )
      .min(0)
      .optional(),
    name: zod.string().optional(),
    payerReceiver: zod.lazy(() => CdmBaseStaticdataPartyPayerReceiverSchema),
    priceReturnTerms: zod
      .lazy(() => CdmProductAssetPriceReturnTermsSchema)
      .optional(),
    quantity: zod
      .lazy(
        () =>
          CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
      )
      .optional(),
    underlier: zod.lazy(
      () => CdmObservableAssetMetafieldsReferenceWithMetaObservableSchema
    ),
    varianceReturnTerms: zod
      .lazy(() => CdmProductAssetVarianceReturnTermsSchema)
      .optional(),
    volatilityReturnTerms: zod
      .lazy(() => CdmProductAssetVolatilityReturnTermsSchema)
      .optional(),
  })
);

export type CdmProductTemplatePortfolioReturnTerms = z.infer<
  typeof CdmProductTemplatePortfolioReturnTermsSchema
>;
