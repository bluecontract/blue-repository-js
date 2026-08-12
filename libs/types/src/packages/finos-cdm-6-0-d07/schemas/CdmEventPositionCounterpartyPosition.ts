import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonMetafieldsReferenceWithMetaContractDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaContractDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaExecutionDetailsSchema } from './CdmEventCommonMetafieldsReferenceWithMetaExecutionDetails';
import { CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema } from './CdmEventCommonMetafieldsReferenceWithMetaTradeState';
import { CdmEventCommonPositionIdentifierSchema } from './CdmEventCommonPositionIdentifier';
import { CdmProductCollateralMetafieldsReferenceWithMetaCollateralSchema } from './CdmProductCollateralMetafieldsReferenceWithMetaCollateral';
import { CdmProductTemplateTradableProductSchema } from './CdmProductTemplateTradableProduct';

const zod = z as any;

export const CdmEventPositionCounterpartyPositionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/CounterpartyPosition']
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
    openDateTime: zod.string().optional(),
    party: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
    positionBase: zod.lazy(() => CdmProductTemplateTradableProductSchema),
    positionIdentifier: zod
      .array(zod.lazy(() => CdmEventCommonPositionIdentifierSchema))
      .min(0)
      .optional(),
    tradeReference: zod
      .array(
        zod.lazy(
          () => CdmEventCommonMetafieldsReferenceWithMetaTradeStateSchema
        )
      )
      .min(0)
      .optional(),
  })
);

export type CdmEventPositionCounterpartyPosition = z.infer<
  typeof CdmEventPositionCounterpartyPositionSchema
>;
