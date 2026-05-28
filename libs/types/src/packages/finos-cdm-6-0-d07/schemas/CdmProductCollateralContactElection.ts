import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyPartyContactInformationSchema } from './CdmBaseStaticdataPartyPartyContactInformation';

export const CdmProductCollateralContactElectionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/ContactElection']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      partyElection: z
        .array(
          z.lazy(() => CdmBaseStaticdataPartyPartyContactInformationSchema)
        )
        .min(2)
        .max(2)
        .optional(),
    })
  );

export type CdmProductCollateralContactElection = z.infer<
  typeof CdmProductCollateralContactElectionSchema
>;
