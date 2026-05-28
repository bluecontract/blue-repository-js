import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetAdditionalFixedPaymentsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/AdditionalFixedPayments']
  )(
    z.object({
      description: z.string().optional(),
      interestShortfallReimbursement: z.boolean().optional(),
      name: z.string().optional(),
      principalShortfallReimbursement: z.boolean().optional(),
      writedownReimbursement: z.boolean().optional(),
    })
  );

export type CdmProductAssetAdditionalFixedPayments = z.infer<
  typeof CdmProductAssetAdditionalFixedPaymentsSchema
>;
