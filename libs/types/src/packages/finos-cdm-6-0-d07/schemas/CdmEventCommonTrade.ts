import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonContractDetailsSchema } from './CdmEventCommonContractDetails';
import { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductCommonNotionalAdjustmentEnumSchema } from './CdmProductCommonNotionalAdjustmentEnum';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { CdmProductTemplateTradeLotSchema } from './CdmProductTemplateTradeLot';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmEventCommonTradeSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Trade']
)(
  z.object({
    account: z
      .array(z.lazy(() => CdmBaseStaticdataPartyAccountSchema))
      .min(0)
      .optional(),
    adjustment: z
      .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
      .optional(),
    ancillaryParty: z
      .array(z.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
      .min(0)
      .optional(),
    clearedDate: z.string().optional(),
    collateral: z.lazy(() => CdmProductCollateralCollateralSchema).optional(),
    contractDetails: z
      .lazy(() => CdmEventCommonContractDetailsSchema)
      .optional(),
    counterparty: z
      .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
      .min(2)
      .max(2)
      .optional(),
    description: z.string().optional(),
    executionDetails: z
      .lazy(() => CdmEventCommonExecutionDetailsSchema)
      .optional(),
    name: z.string().optional(),
    party: z
      .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: z
      .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
    product: z
      .lazy((): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema)
      .optional(),
    tradeDate: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    tradeIdentifier: z
      .array(z.lazy(() => CdmEventCommonTradeIdentifierSchema))
      .min(1)
      .optional(),
    tradeLot: z
      .array(z.lazy(() => CdmProductTemplateTradeLotSchema))
      .min(1)
      .optional(),
    tradeTime: z
      .lazy(() => CdmBaseDatetimeFieldWithMetaTimeZoneSchema)
      .optional(),
  })
);

export type CdmEventCommonTrade = z.infer<typeof CdmEventCommonTradeSchema>;
