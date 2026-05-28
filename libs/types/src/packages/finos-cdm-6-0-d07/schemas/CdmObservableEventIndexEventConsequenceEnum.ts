import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableEventIndexEventConsequenceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/IndexEventConsequenceEnum']
  )(
    z.enum([
      'CalculationAgentAdjustment',
      'CancellationAndPayment',
      'NegotiatedCloseOut',
      'RelatedExchange',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventIndexEventConsequenceEnum = z.infer<
  typeof CdmObservableEventIndexEventConsequenceEnumSchema
>;
