import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSPackageSchema } from './MyOSPackage';

export const InformUserToInstallMyOSPackageSchema = withTypeBlueId(blueIds['MyOS/Inform User To Install MyOS Package'])(
  z.object({
    "title": z.string().optional(),
    "message": z.string().optional(),
    "package": MyOSPackageSchema.optional()
  })
);

export type InformUserToInstallMyOSPackage = z.infer<typeof InformUserToInstallMyOSPackageSchema>;
