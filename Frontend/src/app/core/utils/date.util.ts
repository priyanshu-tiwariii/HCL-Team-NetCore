export class DateUtil {
  // Converts ISO string to 'DD MMM YYYY' (e.g., '22 Feb 2026')
  static toDisplayDate(isoString: string | null | undefined): string {
    if (!isoString) return 'N/A';

    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date);
    } catch (error) {
      return 'Invalid Date';
    }
  }

  // Converts date to API format (YYYY-MM-DD)
  static toApiFormat(date: Date | null): string | null {
    if (!date) return null;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
