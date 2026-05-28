import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';

export const CdmEventPositionAvailableInventoryRecordSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AvailableInventoryRecord']
  )(
    z.object({
      collateral: z
        .array(z.lazy(() => CdmProductCollateralCollateralProvisionsSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      expirationDateTime: z.string().optional(),
      identifer: z
        .lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema)
        .optional(),
      interestRate: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      name: z.string().optional(),
      partyRole: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
      quantity: z.lazy(() => CdmBaseMathQuantitySchema).optional(),
      security: z
        .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
        .optional(),
    })
  );

export type CdmEventPositionAvailableInventoryRecord = z.infer<
  typeof CdmEventPositionAvailableInventoryRecordSchema
>;
