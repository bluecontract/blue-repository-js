import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaTimeZoneSchema } from './CdmBaseDatetimeFieldWithMetaTimeZone';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyAncillaryPartySchema } from './CdmBaseStaticdataPartyAncillaryParty';
import { CdmBaseStaticdataPartyCounterpartySchema } from './CdmBaseStaticdataPartyCounterparty';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonExecutionDetailsSchema } from './CdmEventCommonExecutionDetails';
import { CdmEventCommonTradeIdentifierSchema } from './CdmEventCommonTradeIdentifier';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';
import { CdmProductCollateralCollateralSchema } from './CdmProductCollateralCollateral';
import { CdmProductTemplateNonTransferableProductSchema } from './CdmProductTemplateNonTransferableProduct';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmEventCommonExecutionInstructionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExecutionInstruction']
)(
  zod.object({
    ancillaryParty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
      .min(0)
      .optional(),
    collateral: zod.lazy(() => CdmProductCollateralCollateralSchema).optional(),
    counterparty: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
      .min(2)
      .max(2)
      .optional(),
    description: zod.string().optional(),
    executionDetails: zod.lazy(() => CdmEventCommonExecutionDetailsSchema),
    lotIdentifier: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
      .optional(),
    name: zod.string().optional(),
    parties: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(2)
      .optional(),
    partyRoles: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
    priceQuantity: zod
      .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
    product: zod.lazy(
      (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
    ),
    tradeDate: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    tradeIdentifier: zod
      .array(zod.lazy(() => CdmEventCommonTradeIdentifierSchema))
      .min(1)
      .optional(),
    tradeTime: zod
      .lazy(() => CdmBaseDatetimeFieldWithMetaTimeZoneSchema)
      .optional(),
  })
);

export type CdmEventCommonExecutionInstruction = z.infer<
  typeof CdmEventCommonExecutionInstructionSchema
>;
