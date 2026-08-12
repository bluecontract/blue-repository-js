import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
import { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
import { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
import { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';

const zod = z as any;

export const CdmProductTemplateTerminationProvisionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TerminationProvision']
)(
  zod.object({
    cancelableProvision: zod
      .lazy(() => CdmProductTemplateCancelableProvisionSchema)
      .optional(),
    description: zod.string().optional(),
    earlyTerminationProvision: zod
      .lazy(() => CdmProductTemplateEarlyTerminationProvisionSchema)
      .optional(),
    evergreenProvision: zod
      .lazy(() => CdmProductTemplateEvergreenProvisionSchema)
      .optional(),
    extendibleProvision: zod
      .lazy(() => CdmProductTemplateExtendibleProvisionSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateTerminationProvision = z.infer<
  typeof CdmProductTemplateTerminationProvisionSchema
>;
