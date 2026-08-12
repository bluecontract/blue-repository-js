import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';

const zod = z as any;

export const CdmEventCommonExecutionDetailsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExecutionDetails']
)(
  zod.object({
    description: zod.string().optional(),
    executionType: zod.lazy(() => CdmEventCommonExecutionTypeEnumSchema),
    executionVenue: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    name: zod.string().optional(),
    packageReference: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
      .optional(),
  })
);

export type CdmEventCommonExecutionDetails = z.infer<
  typeof CdmEventCommonExecutionDetailsSchema
>;
