import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';

export const CdmBaseStaticdataPartyBusinessUnitSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/BusinessUnit']
  )(
    z.object({
      contactInformation: z
        .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
        .optional(),
      description: z.string().optional(),
      identifier: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataPartyBusinessUnit = z.infer<
  typeof CdmBaseStaticdataPartyBusinessUnitSchema
>;
