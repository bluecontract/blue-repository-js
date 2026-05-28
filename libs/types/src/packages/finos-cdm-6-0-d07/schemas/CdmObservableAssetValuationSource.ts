import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
import { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
import { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';

export const CdmObservableAssetValuationSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationSource']
  )(
    z.object({
      dealerOrCCP: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryEntitySchema)
        .optional(),
      description: z.string().optional(),
      informationSource: z
        .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
        .optional(),
      name: z.string().optional(),
      quotedCurrencyPair: z
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema
        )
        .optional(),
      referenceBanks: z
        .lazy(() => CdmBaseStaticdataPartyReferenceBanksSchema)
        .optional(),
      settlementRateOption: z
        .lazy(() => CdmObservableAssetSettlementRateOptionSchema)
        .optional(),
    })
  );

export type CdmObservableAssetValuationSource = z.infer<
  typeof CdmObservableAssetValuationSourceSchema
>;
