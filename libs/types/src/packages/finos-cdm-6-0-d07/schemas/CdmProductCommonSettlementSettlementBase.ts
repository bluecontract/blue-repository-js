import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonSettlementSettlementCentreEnumSchema } from './CdmProductCommonSettlementSettlementCentreEnum';
import { CdmProductCommonSettlementSettlementDateSchema } from './CdmProductCommonSettlementSettlementDate';
import { CdmProductCommonSettlementSettlementProvisionSchema } from './CdmProductCommonSettlementSettlementProvision';
import { CdmProductCommonSettlementSettlementTypeEnumSchema } from './CdmProductCommonSettlementSettlementTypeEnum';
import { CdmProductCommonSettlementStandardSettlementStyleEnumSchema } from './CdmProductCommonSettlementStandardSettlementStyleEnum';
import { CdmProductCommonSettlementTransferSettlementEnumSchema } from './CdmProductCommonSettlementTransferSettlementEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCommonSettlementSettlementBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementBase']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
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
      settlementType: z.lazy(
        () => CdmProductCommonSettlementSettlementTypeEnumSchema
      ),
      standardSettlementStyle: z
        .lazy(() => CdmProductCommonSettlementStandardSettlementStyleEnumSchema)
        .optional(),
      transferSettlementType: z
        .lazy(() => CdmProductCommonSettlementTransferSettlementEnumSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementSettlementBase = z.infer<
  typeof CdmProductCommonSettlementSettlementBaseSchema
>;
