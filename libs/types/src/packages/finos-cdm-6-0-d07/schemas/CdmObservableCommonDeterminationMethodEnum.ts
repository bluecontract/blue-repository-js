import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableCommonDeterminationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/common/DeterminationMethodEnum']
  )(
    zod.enum([
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
