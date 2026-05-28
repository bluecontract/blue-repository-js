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

export const CdmEventPositionCounterpartyPositionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/CounterpartyPosition']
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
      openDateTime: z.string().optional(),
      party: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .optional(),
      partyRole: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
      positionBase: z.lazy(() => CdmProductTemplateTradableProductSchema),
      positionIdentifier: z
        .array(z.lazy(() => CdmEventCommonPositionIdentifierSchema))
        .min(0)
        .optional(),
      tradeReference: z
        .array(
          z.lazy(
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
