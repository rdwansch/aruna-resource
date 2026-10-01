export const requiredContactFields = ['name', 'company', 'email', 'service', 'message'] as const
export type ContactPreview = Record<(typeof requiredContactFields)[number], string> & {
  phone: string
}

export function readContact(form: FormData): ContactPreview {
  return Object.fromEntries(
    [...requiredContactFields, 'phone'].map((key) => [key, String(form.get(key) ?? '').trim()]),
  ) as ContactPreview
}

export function blankContactFields(values: ContactPreview) {
  return requiredContactFields.filter((key) => !values[key])
}
