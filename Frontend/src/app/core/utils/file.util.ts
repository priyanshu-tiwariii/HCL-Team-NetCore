import { AllowedTypes } from '../../shared/entities/AllowedTypes';
import { DataSize } from '../../shared/entities/DataSize';

export class FileUtil {
  // Converts bytes to KB, MB, GB, etc.
  static formatBytes(bytes: number, decimals: number = 2): string {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = Object.values(DataSize);

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  static isAllowedImageType(file: File): boolean {
    const allowedTypes = Object.values(AllowedTypes);
    return (allowedTypes as string[]).includes(file.type);
  }
}
