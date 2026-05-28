import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCancelableProvisionSchema } from './CdmProductTemplateCancelableProvision';
import { CdmProductTemplateEarlyTerminationProvisionSchema } from './CdmProductTemplateEarlyTerminationProvision';
import { CdmProductTemplateEvergreenProvisionSchema } from './CdmProductTemplateEvergreenProvision';
import { CdmProductTemplateExtendibleProvisionSchema } from './CdmProductTemplateExtendibleProvision';

export const CdmProductTemplateTerminationProvisionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TerminationProvision']
  )(
    z.object({
      cancelableProvision: z
        .lazy(() => CdmProductTemplateCancelableProvisionSchema)
        .optional(),
      description: z.string().optional(),
      earlyTerminationProvision: z
        .lazy(() => CdmProductTemplateEarlyTerminationProvisionSchema)
        .optional(),
      evergreenProvision: z
        .lazy(() => CdmProductTemplateEvergreenProvisionSchema)
        .optional(),
      extendibleProvision: z
        .lazy(() => CdmProductTemplateExtendibleProvisionSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateTerminationProvision = z.infer<
  typeof CdmProductTemplateTerminationProvisionSchema
>;
