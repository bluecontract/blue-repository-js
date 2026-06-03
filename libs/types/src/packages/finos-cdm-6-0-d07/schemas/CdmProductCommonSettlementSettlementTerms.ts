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

const zod = z as any;

export const CdmProductCommonSettlementSettlementTermsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementTerms']
  )(
    zod.object({
      cashSettlementTerms: zod
        .array(
          zod.lazy(() => CdmProductCommonSettlementCashSettlementTermsSchema)
        )
        .min(0)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      physicalSettlementTerms: zod
        .lazy(() => CdmProductCommonSettlementPhysicalSettlementTermsSchema)
        .optional(),
      settlementCentre: zod
        .lazy(() => CdmProductCommonSettlementSettlementCentreEnumSchema)
        .optional(),
      settlementCurrency: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      settlementDate: zod
        .lazy(() => CdmProductCommonSettlementSettlementDateSchema)
        .optional(),
      settlementProvision: zod
        .lazy(() => CdmProductCommonSettlementSettlementProvisionSchema)
        .optional(),
      settlementType: zod
        .lazy(() => CdmProductCommonSettlementSettlementTypeEnumSchema)
        .optional(),
      standardSettlementStyle: zod
        .lazy(() => CdmProductCommonSettlementStandardSettlementStyleEnumSchema)
        .optional(),
      transferSettlementType: zod
        .lazy(() => CdmProductCommonSettlementTransferSettlementEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementSettlementTerms = z.infer<
  typeof CdmProductCommonSettlementSettlementTermsSchema
>;
