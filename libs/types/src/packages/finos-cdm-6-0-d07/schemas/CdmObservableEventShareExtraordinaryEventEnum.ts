import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableEventShareExtraordinaryEventEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/ShareExtraordinaryEventEnum'
    ]
  )(
    zod.enum([
      'AlternativeObligation',
      'CalculationAgent',
      'CancellationAndPayment',
      'Component',
      'ModifiedCalculationAgent',
      'OptionsExchange',
      'PartialCancellationAndPayment',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventShareExtraordinaryEventEnum = z.infer<
  typeof CdmObservableEventShareExtraordinaryEventEnumSchema
>;
