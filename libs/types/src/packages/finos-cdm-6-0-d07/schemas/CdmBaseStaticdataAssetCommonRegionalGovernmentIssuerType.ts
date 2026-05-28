import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/RegionalGovernmentIssuerType'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      sovereignRecourse: z.boolean(),
    })
  );

export type CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema
>;
