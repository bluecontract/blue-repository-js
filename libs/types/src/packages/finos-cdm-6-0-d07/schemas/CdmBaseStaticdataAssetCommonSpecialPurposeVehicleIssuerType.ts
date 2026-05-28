import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCreditRiskEnumSchema } from './CdmBaseStaticdataAssetCommonCreditRiskEnum';

export const CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/SpecialPurposeVehicleIssuerType'
    ]
  )(
    z.object({
      creditRisk: z
        .lazy(() => CdmBaseStaticdataAssetCommonCreditRiskEnumSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType =
  z.infer<
    typeof CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema
  >;
