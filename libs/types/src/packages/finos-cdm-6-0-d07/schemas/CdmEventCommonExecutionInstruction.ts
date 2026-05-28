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

export const CdmEventCommonExecutionInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExecutionInstruction']
  )(
    z.object({
      ancillaryParty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyAncillaryPartySchema))
        .min(0)
        .optional(),
      collateral: z.lazy(() => CdmProductCollateralCollateralSchema).optional(),
      counterparty: z
        .array(z.lazy(() => CdmBaseStaticdataPartyCounterpartySchema))
        .min(2)
        .max(2)
        .optional(),
      description: z.string().optional(),
      executionDetails: z.lazy(() => CdmEventCommonExecutionDetailsSchema),
      lotIdentifier: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
        .optional(),
      name: z.string().optional(),
      parties: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(2)
        .optional(),
      partyRoles: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
      priceQuantity: z
        .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
      product: z.lazy(
        (): z.ZodTypeAny => CdmProductTemplateNonTransferableProductSchema
      ),
      tradeDate: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      tradeIdentifier: z
        .array(z.lazy(() => CdmEventCommonTradeIdentifierSchema))
        .min(1)
        .optional(),
      tradeTime: z
        .lazy(() => CdmBaseDatetimeFieldWithMetaTimeZoneSchema)
        .optional(),
    })
  );

export type CdmEventCommonExecutionInstruction = z.infer<
  typeof CdmEventCommonExecutionInstructionSchema
>;
