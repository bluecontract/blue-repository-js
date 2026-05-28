import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCreditObligationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/Obligations']
  )(
    z.object({
      cashSettlementOnly: z.boolean().optional(),
      category: z.lazy(
        () => CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema
      ),
      continuity: z.boolean().optional(),
      deliveryOfCommitments: z.boolean().optional(),
      description: z.string().optional(),
      designatedPriority: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      excluded: z.string().optional(),
      fullFaithAndCreditObLiability: z.boolean().optional(),
      generalFundObligationLiability: z.boolean().optional(),
      listed: z.boolean().optional(),
      name: z.string().optional(),
      notContingent: z.boolean().optional(),
      notDomesticCurrency: z
        .lazy(() => CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema)
        .optional(),
      notDomesticIssuance: z.boolean().optional(),
      notDomesticLaw: z.boolean().optional(),
      notSovereignLender: z.boolean().optional(),
      notSubordinated: z.boolean().optional(),
      othReferenceEntityObligations: z.string().optional(),
      revenueObligationLiability: z.boolean().optional(),
      specifiedCurrency: z
        .lazy(() => CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCreditObligations = z.infer<
  typeof CdmBaseStaticdataAssetCreditObligationsSchema
>;
