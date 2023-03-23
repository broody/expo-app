import { Button } from '@my/ui'

export default ({ children }: { children: React.ReactNode }) => (
  <Button color="white" borderColor="#202221" borderWidth="3px" backgroundColor="#3523FE">
    {children}
  </Button>
)
