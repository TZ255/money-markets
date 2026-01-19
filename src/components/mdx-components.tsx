import type { ComponentProps } from 'react'

export const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 {...props} className='text-foreground mt-16 mb-4 scroll-mt-20 text-2xl font-semibold' />
  ),

  h3: (props: ComponentProps<'h3'>) => (
    <h3 {...props} className='text-foreground mb-4 scroll-mt-20 text-xl font-medium' />
  ),

  p: (props: ComponentProps<'p'>) => <p {...props} className='text-muted-foreground mb-4 text-xl' />,

  ul: (props: ComponentProps<'ul'>) => <ul {...props} className='mb-4 list-inside list-disc space-y-2 pl-2' />,

  li: (props: ComponentProps<'li'>) => <li {...props} className='text-muted-foreground text-xl' />
}
