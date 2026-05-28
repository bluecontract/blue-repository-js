import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifiedListSchema } from './CdmBaseStaticdataIdentifierIdentifiedList';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmEventCommonExecutionTypeEnumSchema } from './CdmEventCommonExecutionTypeEnum';

export const CdmEventCommonExecutionDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ExecutionDetails']
  )(
    z.object({
      description: z.string().optional(),
      executionType: z.lazy(() => CdmEventCommonExecutionTypeEnumSchema),
      executionVenue: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      name: z.string().optional(),
      packageReference: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifiedListSchema)
        .optional(),
    })
  );

export type CdmEventCommonExecutionDetails = z.infer<
  typeof CdmEventCommonExecutionDetailsSchema
>;
