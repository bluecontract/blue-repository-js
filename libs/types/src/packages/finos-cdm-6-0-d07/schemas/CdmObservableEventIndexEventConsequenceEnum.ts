import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableEventIndexEventConsequenceEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/IndexEventConsequenceEnum']
  )(
    zod.enum([
      'CalculationAgentAdjustment',
      'CancellationAndPayment',
      'NegotiatedCloseOut',
      'RelatedExchange',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventIndexEventConsequenceEnum = z.infer<
  typeof CdmObservableEventIndexEventConsequenceEnumSchema
>;
