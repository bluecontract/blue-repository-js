import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantitySchema } from './CdmBaseMathQuantity';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';

const zod = z as any;

export const CdmEventPositionAvailableInventoryRecordSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/AvailableInventoryRecord']
  )(
    zod.object({
      collateral: zod
        .array(zod.lazy(() => CdmProductCollateralCollateralProvisionsSchema))
        .min(0)
        .optional(),
      description: zod.string().optional(),
      expirationDateTime: zod.string().optional(),
      identifer: zod
        .lazy(() => CdmBaseStaticdataIdentifierAssignedIdentifierSchema)
        .optional(),
      interestRate: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
      name: zod.string().optional(),
      partyRole: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
      quantity: zod.lazy(() => CdmBaseMathQuantitySchema).optional(),
      security: zod
        .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
        .optional(),
    })
  );

export type CdmEventPositionAvailableInventoryRecord = z.infer<
  typeof CdmEventPositionAvailableInventoryRecordSchema
>;
