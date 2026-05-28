import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableCommonDeterminationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/common/DeterminationMethodEnum']
  )(
    z.enum([
      'AgreedInitialPrice',
      'AsSpecifiedInMasterConfirmation',
      'CalculationAgent',
      'ClosingPrice',
      'DividendCurrency',
      'ExpiringContractLevel',
      'HedgeExecution',
      'IssuerPaymentCurrency',
      'NAV',
      'OSPPrice',
      'OpenPrice',
      'SettlementCurrency',
      'StrikeDateDetermination',
      'TWAPPrice',
      'VWAPPrice',
      'ValuationTime',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableCommonDeterminationMethodEnum = z.infer<
  typeof CdmObservableCommonDeterminationMethodEnumSchema
>;
