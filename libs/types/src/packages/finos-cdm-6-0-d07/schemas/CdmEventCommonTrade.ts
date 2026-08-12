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

const zod = z as any;

export const CdmEventCommonTradeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Trade']
)(
  zod.object({
    account: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAccountSchema))
      .min(0)
      .optional(),
    adjustment: zod
      .lazy(() => CdmProductCommonNotionalAdjustmentEnumSchema)
      .optional(),
    ancillaryParty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
      .min(0)
      .optional(),
    clearedDate: zod.string().optional(),
    collateral: zod.lazy(() => CdmProductCollateralCollateralSchema).optional(),
    contractDetails: zod
      .lazy(() => CdmEventCommonContractDetailsSchema)
      .optional(),
    counterparty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
      .min(2)
      .max(2)
      .optional(),
    description: zod.string().optional(),
    executionDetails: zod
      .lazy(() => CdmEventCommonExecutionDetailsSchema)
      .optional(),
    name: zod.string().optional(),
    party: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
    product: zod
      .lazy((): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema)
      .optional(),
    tradeDate: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    tradeIdentifier: zod
      .array(zod.lazy(() => CdmEventCommonTradeIdentifierSchema))
      .min(1)
      .optional(),
    tradeLot: zod
      .array(zod.lazy(() => CdmProductTemplateTradeLotSchema))
      .min(1)
      .optional(),
    tradeTime: zod
      .lazy(() => CdmBaseDatetimeFieldWithMetaTimeZoneSchema)
      .optional(),
  })
);

export type CdmEventCommonTrade = z.infer<typeof CdmEventCommonTradeSchema>;
