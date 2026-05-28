import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
import { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';

export const CdmLegaldocumentationCommonAddressForNoticesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AddressForNotices']
  )(
    z.object({
      additionalNotices: z
        .array(
          z.lazy(() => CdmBaseStaticdataPartyPartyContactInformationSchema)
        )
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      primaryNotices: z.lazy(() => CdmProductCollateralContactElectionSchema),
    })
  );

export type CdmLegaldocumentationCommonAddressForNotices = z.infer<
  typeof CdmLegaldocumentationCommonAddressForNoticesSchema
>;
