import { expect, test } from 'bun:test'
import { articles, galleryItems, processSteps, services } from '@/constants/site-content'
import { blankContactFields, readContact } from '@/features/Contact/utils'

test('static content provides unique route slugs, complete articles, and coherent gallery filters', () => {
  for (const entries of [services, articles]) {
    const slugs = entries.map((entry) => entry.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))).toBe(true)
  }
  expect(new Set(galleryItems.map((item) => item.id)).size).toBe(galleryItems.length)
  for (const category of ['Fasilitas', 'Operasional', 'Material']) {
    expect(galleryItems.filter((item) => item.category === category).length).toBeGreaterThan(0)
  }
  expect(processSteps.at(-1)?.title).toBe('Dokumentasi')
  for (const article of articles) {
    expect(article.sections.length).toBeGreaterThanOrEqual(4)
    expect(
      article.sections
        .flatMap((section) => section.paragraphs)
        .join(' ')
        .split(/\s+/).length,
    ).toBeGreaterThan(300)
    expect(article.sources.length).toBeGreaterThan(0)
    expect(
      article.sources.every((source) =>
        ['www.epa.gov', 'csrc.nist.gov'].includes(new URL(source.url).hostname),
      ),
    ).toBe(true)
    expect(Number.isNaN(Date.parse(article.date))).toBe(false)
  }
})

test('contact preview trims input and rejects whitespace-only required fields', () => {
  const form = new FormData()
  form.set('name', '  Raka  ')
  form.set('company', '  Nusa Contoh  ')
  form.set('email', 'raka@example.com')
  form.set('service', services[0].slug)
  form.set('message', ' \n\t ')
  let values = readContact(form)
  expect(values.name).toBe('Raka')
  expect(values.phone).toBe('')
  expect(blankContactFields(values)).toEqual(['message'])
  form.set('message', '  20 perangkat di Jakarta.  ')
  values = readContact(form)
  expect(blankContactFields(values)).toEqual([])
  expect(values.message).toBe('20 perangkat di Jakarta.')
})
