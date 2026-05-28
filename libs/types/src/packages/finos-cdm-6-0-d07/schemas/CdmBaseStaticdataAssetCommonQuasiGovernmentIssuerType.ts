import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/QuasiGovernmentIssuerType'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      sovereignEntity: z.boolean(),
      sovereignRecourse: z.boolean().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema
>;
