import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetAdditionalFixedPaymentsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AdditionalFixedPayments']
)(
  zod.object({
    description: zod.string().optional(),
    interestShortfallReimbursement: zod.boolean().optional(),
    name: zod.string().optional(),
    principalShortfallReimbursement: zod.boolean().optional(),
    writedownReimbursement: zod.boolean().optional(),
  })
);

export type CdmProductAssetAdditionalFixedPayments = z.infer<
  typeof CdmProductAssetAdditionalFixedPaymentsSchema
>;
