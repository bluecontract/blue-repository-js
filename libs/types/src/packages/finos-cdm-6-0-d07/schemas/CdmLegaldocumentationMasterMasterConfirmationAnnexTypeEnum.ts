import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/MasterConfirmationAnnexTypeEnum'
    ]
  )(
    zod.enum([
      'ISDA2004IndexVarianceSwapAmericasInterdealer',
      'ISDA2004ShareVarianceSwapAmericasInterdealer',
      'ISDA2007DispersionVarianceSwapEuropean',
      'ISDA2007EquityFinanceSwapEuropean',
      'ISDA2007IndexVarianceSwapAmericasInterdealer',
      'ISDA2007ShareVarianceSwapAmericasInterdealer',
      'ISDA2007VarianceOptionEuropean',
      'ISDA2008EquityFinanceSwapAsiaExcludingJapan',
      'ISDA2008EquityFinanceSwapAsiaExcludingJapanRev1',
      'ISDA2008EquityOptionAsiaExcludingJapan',
      'ISDA2008EquityOptionAsiaExcludingJapanRev1',
      'ISDA2008EquityOptionJapan',
      'ISDA2009ClosedMarketsOptionsAsiaExcludingJapan',
      'ISDA2009EquityEuropeanIS',
      'ISDA2009EquityEuropeanInterdealerSS',
      'ISDA2009IndexShareOptionAmericas',
      'ISDA2009IndexSwapEuropeanInterdealer',
      'ISDA2009IndexSwapPanAsiaInterdealer',
      'ISDA2009ShareSwapPanAsia',
      'ISDA2010FairValueShareSwapEuropeanInterdealer',
      'ISDA2010IndexShareOptionEMEAInterdealer',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema
  >;
