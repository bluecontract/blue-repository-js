import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCreditNotationBoundaryEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CreditNotationBoundaryEnum']
  )(
    zod.enum(['Maximum', 'Minimum'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCreditNotationBoundaryEnum = z.infer<
  typeof CdmObservableAssetCreditNotationBoundaryEnumSchema
>;
