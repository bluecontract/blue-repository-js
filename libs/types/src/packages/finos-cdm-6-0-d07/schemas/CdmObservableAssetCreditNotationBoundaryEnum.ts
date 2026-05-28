import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCreditNotationBoundaryEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotationBoundaryEnum']
  )(
    z.enum(['Maximum', 'Minimum'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditNotationBoundaryEnum = z.infer<
  typeof CdmObservableAssetCreditNotationBoundaryEnumSchema
>;
