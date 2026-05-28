import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonIssuerTypeEnum';
import { CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerType';
import { CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema } from './CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerType';
import { CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema } from './CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnum';

export const CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralIssuerType'
    ]
  )(
    z.object({
      description: z.string().optional(),
      issuerType: z.lazy(
        () => CdmBaseStaticdataAssetCommonIssuerTypeEnumSchema
      ),
      name: z.string().optional(),
      quasiGovernmentType: z
        .lazy(() => CdmBaseStaticdataAssetCommonQuasiGovernmentIssuerTypeSchema)
        .optional(),
      regionalGovernmentType: z
        .lazy(
          () => CdmBaseStaticdataAssetCommonRegionalGovernmentIssuerTypeSchema
        )
        .optional(),
      specialPurposeVehicleType: z
        .lazy(
          () =>
            CdmBaseStaticdataAssetCommonSpecialPurposeVehicleIssuerTypeSchema
        )
        .optional(),
      supraNationalType: z
        .lazy(
          () => CdmBaseStaticdataAssetCommonSupraNationalIssuerTypeEnumSchema
        )
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCollateralIssuerType = z.infer<
  typeof CdmBaseStaticdataAssetCommonCollateralIssuerTypeSchema
>;
