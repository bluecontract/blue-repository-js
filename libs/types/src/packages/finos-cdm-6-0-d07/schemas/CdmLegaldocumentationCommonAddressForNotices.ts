import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';
import { CdmProductCollateralContactElectionSchema } from './CdmProductCollateralContactElection';

const zod = z as any;

export const CdmLegaldocumentationCommonAddressForNoticesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/AddressForNotices']
  )(
    zod.object({
      additionalNotices: zod
        .array(
          zod.lazy(() => CdmBaseStaticdataPartyPartyContactInformationSchema)
        )
        .min(0)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      primaryNotices: zod.lazy(() => CdmProductCollateralContactElectionSchema),
    })
  );

export type CdmLegaldocumentationCommonAddressForNotices = z.infer<
  typeof CdmLegaldocumentationCommonAddressForNoticesSchema
>;
