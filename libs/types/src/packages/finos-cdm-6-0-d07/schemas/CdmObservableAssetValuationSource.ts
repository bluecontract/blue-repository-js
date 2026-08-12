import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAncillaryEntitySchema } from './CdmBaseStaticdataPartyAncillaryEntity';
import { CdmBaseStaticdataPartyReferenceBanksSchema } from './CdmBaseStaticdataPartyReferenceBanks';
import { CdmObservableAssetFxSpotRateSourceSchema } from './CdmObservableAssetFxSpotRateSource';
import { CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPair';
import { CdmObservableAssetSettlementRateOptionSchema } from './CdmObservableAssetSettlementRateOption';

const zod = z as any;

export const CdmObservableAssetValuationSourceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ValuationSource']
)(
  zod.object({
    dealerOrCCP: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryEntitySchema)
      .optional(),
    description: zod.string().optional(),
    informationSource: zod
      .lazy(() => CdmObservableAssetFxSpotRateSourceSchema)
      .optional(),
    name: zod.string().optional(),
    quotedCurrencyPair: zod
      .lazy(
        () =>
          CdmObservableAssetMetafieldsReferenceWithMetaQuotedCurrencyPairSchema
      )
      .optional(),
    referenceBanks: zod
      .lazy(() => CdmBaseStaticdataPartyReferenceBanksSchema)
      .optional(),
    settlementRateOption: zod
      .lazy(() => CdmObservableAssetSettlementRateOptionSchema)
      .optional(),
  })
);

export type CdmObservableAssetValuationSource = z.infer<
  typeof CdmObservableAssetValuationSourceSchema
>;
