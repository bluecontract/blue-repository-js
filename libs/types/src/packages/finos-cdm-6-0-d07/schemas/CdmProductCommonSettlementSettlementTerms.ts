import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementCashSettlementTermsSchema } from './CdmProductCommonSettlementCashSettlementTerms';
import { CdmProductCommonSettlementPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementPhysicalSettlementTerms';
import { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
import { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
import { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
import { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
import { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
import { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCommonSettlementSettlementTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementTerms']
  )(
    z.object({
      cashSettlementTerms: z
        .array(
          z.lazy(() => CdmProductCommonSettlementCashSettlementTermsSchema)
        )
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      physicalSettlementTerms: z
        .lazy(() => CdmProductCommonSettlementPhysicalSettlementTermsSchema)
        .optional(),
      settlementCentre: z
        .lazy(() => CdmProductCommonSettlementSettlementCentreEnumSchema)
        .optional(),
      settlementCurrency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      settlementDate: z
        .lazy(() => CdmProductCommonSettlementSettlementDateSchema)
        .optional(),
      settlementProvision: z
        .lazy(() => CdmProductCommonSettlementSettlementProvisionSchema)
        .optional(),
      settlementType: z
        .lazy(() => CdmProductCommonSettlementSettlementTypeEnumSchema)
        .optional(),
      standardSettlementStyle: z
        .lazy(() => CdmProductCommonSettlementStandardSettlementStyleEnumSchema)
        .optional(),
      transferSettlementType: z
        .lazy(() => CdmProductCommonSettlementTransferSettlementEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementSettlementTermsSchema
>;
