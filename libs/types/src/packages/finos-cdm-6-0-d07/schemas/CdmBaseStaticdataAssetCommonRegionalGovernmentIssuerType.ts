import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/RegionalGovernmentIssuerType'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      sovereignRecourse: zod.boolean(),
    })
  );

export type CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema
>;
