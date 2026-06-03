import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
import { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';

const zod = z as any;

export const CdmEventPositionContractBaseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/ContractBase']
)(
  zod.object({
    collateral: zod
      .lazy(
        () => CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema
      )
      .optional(),
    contractDetails: zod
      .lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema
      )
      .optional(),
    description: zod.string().optional(),
    executionDetails: zod
      .lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema
      )
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventPositionContractBase = z.infer<
  typeof CdmEventPositionContractBaseSchema
>;
