import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';

const zod = z as any;

export const CdmEventPositionInventoryRecordSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/position/InventoryRecord']
)(
  zod.object({
    description: zod.string().optional(),
    identifer: zod.lazy(
      () => CdmBaseStaticdataIdentifierAssignedIdentifierSchema
    ),
    name: zod.string().optional(),
    security: zod.lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema),
  })
);

export type CdmEventPositionInventoryRecord = z.infer<
  typeof CdmEventPositionInventoryRecordSchema
>;
