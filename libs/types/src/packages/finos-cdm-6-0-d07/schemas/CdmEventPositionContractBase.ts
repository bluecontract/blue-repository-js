import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
import { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';

export const CdmEventPositionContractBaseSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/ContractBase']
)(
  z.object({
    collateral: z
      .lazy(
        () => CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema
      )
      .optional(),
    contractDetails: z
      .lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema
      )
      .optional(),
    description: z.string().optional(),
    executionDetails: z
      .lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema
      )
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmEventPositionContractBase = z.infer<
  typeof CdmEventPositionContractBaseSchema
>;
