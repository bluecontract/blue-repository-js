import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCsaTypeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CsaTypeEnum']
)(
  z.enum(['ExistingCSA', 'NoCSA', 'ReferenceVMCSA'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetCsaTypeEnum = z.infer<
  typeof CdmObservableAssetCsaTypeEnumSchema
>;
