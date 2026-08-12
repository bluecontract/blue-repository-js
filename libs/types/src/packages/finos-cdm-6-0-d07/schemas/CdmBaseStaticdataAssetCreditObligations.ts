import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCreditObligationsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/Obligations']
  )(
    zod.object({
      cashSettlementOnly: zod.boolean().optional(),
      category: zod.lazy(
        () => CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema
      ),
      continuity: zod.boolean().optional(),
      deliveryOfCommitments: zod.boolean().optional(),
      description: zod.string().optional(),
      designatedPriority: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      excluded: zod.string().optional(),
      fullFaithAndCreditObLiability: zod.boolean().optional(),
      generalFundObligationLiability: zod.boolean().optional(),
      listed: zod.boolean().optional(),
      name: zod.string().optional(),
      notContingent: zod.boolean().optional(),
      notDomesticCurrency: zod
        .lazy(() => CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema)
        .optional(),
      notDomesticIssuance: zod.boolean().optional(),
      notDomesticLaw: zod.boolean().optional(),
      notSovereignLender: zod.boolean().optional(),
      notSubordinated: zod.boolean().optional(),
      othReferenceEntityObligations: zod.string().optional(),
      revenueObligationLiability: zod.boolean().optional(),
      specifiedCurrency: zod
        .lazy(() => CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCreditObligations = z.infer<
  typeof CdmBaseStaticdataAssetCreditObligationsSchema
>;
