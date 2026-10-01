import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { blankContactFields, readContact } from '../utils'
import type { ContactPreview } from '../utils'

export function useContactManagement() {
  const [preview, setPreview] = useState<ContactPreview | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const previewRef = useRef<HTMLHeadingElement>(null)
  const previousPreview = useRef(false)
  useEffect(() => {
    if (preview) previewRef.current?.focus()
    else if (previousPreview.current)
      formRef.current?.querySelector<HTMLInputElement>('input')?.focus()
    previousPreview.current = !!preview
  }, [preview])
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = readContact(new FormData(form))
    for (const key of blankContactFields(values)) {
      const field = form.elements.namedItem(key)
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement ||
        field instanceof HTMLSelectElement
      )
        field.setCustomValidity('Isi kolom ini dengan teks, bukan hanya spasi.')
    }
    if (form.reportValidity()) setPreview(values)
  }
  const clearValidation = (event: FormEvent<HTMLFormElement>) => {
    const field = event.target
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement ||
      field instanceof HTMLSelectElement
    )
      field.setCustomValidity('')
  }
  const reset = () => {
    formRef.current?.reset()
    const service = formRef.current?.elements.namedItem('service')
    if (service instanceof HTMLSelectElement) service.value = ''
    setPreview(null)
  }
  return {
    preview,
    formRef,
    previewRef,
    submit,
    clearValidation,
    reset,
    edit: () => setPreview(null),
  }
}
