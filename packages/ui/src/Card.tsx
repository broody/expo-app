import { Card, CardProps } from '@my/ui'

export default ({ children, ...rest }: { children: React.ReactNode } & CardProps) => (
  <Card jc="center" ai="center" {...rest}>
    {children}
  </Card>
)
