import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableEventRestructuringEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/RestructuringEnum']
  )(
    z.enum(['ModModR', 'ModR', 'R'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventRestructuringEnum = z.infer<
  typeof CdmObservableEventRestructuringEnumSchema
>;
