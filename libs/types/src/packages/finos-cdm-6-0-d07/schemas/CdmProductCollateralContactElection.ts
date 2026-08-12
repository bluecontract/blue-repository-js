import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';

const zod = z as any;

export const CdmProductCollateralContactElectionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ContactElection']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyElection: zod
      .array(
        zod.lazy(() => CdmBaseStaticdataPartyPartyContactInformationSchema)
      )
      .min(2)
      .max(2)
      .optional(),
  })
);

export type CdmProductCollateralContactElection = z.infer<
  typeof CdmProductCollateralContactElectionSchema
>;
