import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyContactInformationSchema } from './CdmBaseStaticdataPartyContactInformation';

const zod = z as any;

export const CdmBaseStaticdataPartyBusinessUnitSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/BusinessUnit']
)(
  zod.object({
    contactInformation: zod
      .lazy(() => CdmBaseStaticdataPartyContactInformationSchema)
      .optional(),
    description: zod.string().optional(),
    identifier: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyBusinessUnit = z.infer<
  typeof CdmBaseStaticdataPartyBusinessUnitSchema
>;
