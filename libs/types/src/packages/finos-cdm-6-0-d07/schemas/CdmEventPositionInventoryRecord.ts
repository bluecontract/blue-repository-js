import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataIdentifierAssignedIdentifierSchema } from './CdmBaseStaticdataIdentifierAssignedIdentifier';

export const CdmEventPositionInventoryRecordSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/position/InventoryRecord']
  )(
    z.object({
      description: z.string().optional(),
      identifer: z.lazy(
        () => CdmBaseStaticdataIdentifierAssignedIdentifierSchema
      ),
      name: z.string().optional(),
      security: z.lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema),
    })
  );

export type CdmEventPositionInventoryRecord = z.infer<
  typeof CdmEventPositionInventoryRecordSchema
>;
