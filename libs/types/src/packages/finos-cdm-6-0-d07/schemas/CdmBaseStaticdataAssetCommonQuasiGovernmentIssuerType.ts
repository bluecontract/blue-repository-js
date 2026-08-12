import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/QuasiGovernmentIssuerType'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      sovereignEntity: zod.boolean(),
      sovereignRecourse: zod.boolean().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema
>;
